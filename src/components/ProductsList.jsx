import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fazer a solicitação à API quando o componente for montado
        axios.get('https://api.sanofi.com/v1/products')
            .then((response) => {
                setProducts(response.data); // Armazenar os dados dos produtos no estado
            })
            .catch((error) => {
                console.error('Erro ao buscar produtos:', error);
            });
    }, []);

    return (
        <div className="p-4 sm:ml-64 bg-gray-50 dark:bg-gray-900 h-screen">
            <h1>Lista de Produtos</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h2>{product.name}</h2>
                        <p>ID: {product.id}</p>
                        <p>Descrição: {product.description}</p>
                        {/* Adicione mais informações conforme necessário */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
