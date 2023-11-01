import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fazer a solicitação à API quando o componente for montado
        axios.get('http://localhost:3001/produtos')
            .then((response) => {
                setProducts(response.data); // Armazenar os dados dos produtos no estado
            })
            .catch((error) => {
                console.error('Erro ao buscar produtos:', error);
            });
    }, []);

    function quebrarLinhasNaDescricao(descricao) {
        // Substituir todas as ocorrências de '<br>' por elementos <br />
        return descricao.split('<br>').map((item, index, array) => (
            <span key={index}>
                {item}
                {index === array.length - 1 ? null : <br />}
            </span>
        ));
    }

    return (


        <div className="p-4 sm:ml-64 bg-gray-50 dark:bg-gray-900  min-h-screen h-full">
            <div className="p-4 mt-14">
                <h1 className="text-gray-900 dark:text-gray-100 font-medium tracking-[1.9px] text-[34px]  max-md:ml-[10px]">Lista de Produtos</h1>
                <div className="flex flex-wrap gap-4 product-list items-center justify-center text-center">

                    {products.map((product) => (

                        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-sm md:min-w-max hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <Image
                                class="object-cover w-full p-8 rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg bg-purple-700"
                                src={product.imagePath}
                                alt=""
                                width="10"
                                height="10"
                            />
                            <div class="flex flex-col justify-between w-40 p-3 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.nome}</h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{quebrarLinhasNaDescricao(product.descricao)}</p>
                            </div>
                        </a>


                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
