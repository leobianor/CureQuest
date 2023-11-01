"use client"

import Titulo from "@/components/Titulo"
import InfoProduto from "@/components/infoProduto";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import 'flowbite';




export default function Home() {
    const userName = 'Leonardo Bianor'
    //mock
    return (
        <>
            <Navbar />
            <Sidebar />


            <div className="p-4 sm:ml-64 bg-gray-50 dark:bg-gray-900  min-h-screen h-full">
                <div className="p-4 mt-14">
                    <div className="text-gray-900 dark:text-gray-100 font-medium tracking-[1.9px] text-[34px]  max-md:ml-[10px]">
                        <span>
                            Olá{" "}
                        </span>
                        <span className="font-bold text-purple-700">
                            Doutor
                        </span>
                        <span>
                            , seja muito bem-vindo!
                        </span>
                    </div>
                    <div className="flex items-start justify-start mb-4 ">
                        <div className="items-start self-stretch flex flex-col pt-[24px] pb-[40px] px-[20px]">
                            <Titulo>Notícias</Titulo>
                            <div className="flex flex-wrap mt-2 gap-6 items-center justify-center">


                                <InfoProduto
                                    title="Comunicado sobre a descontinuação definitiva da fabricação do produto PHARMATON® VITAWIN"
                                    content="27/10/2023"
                                    link="https://www.sanofi.com.br/pt/quem-somos/noticias/informacoes-de-produto/2023-10-descontinuacao-vitawin"
                                />

                                <InfoProduto
                                    title="Comunicado sobre a descontinuação definitiva da fabricação do produto TARGIFOR®"
                                    content="10/10/2023"
                                    link="https://www.sanofi.com.br/pt/quem-somos/noticias/informacoes-de-produto/2023-10-descontinuacao-tagifor"
                                />

                                <InfoProduto
                                    title="Recolhimento voluntário e preventivo do lote nº DRA03131 do medicamento Lasix® injetável, 5 ampolas com 2mL"
                                    content="10/10/2023"
                                    link="https://www.sanofi.com.br/pt/quem-somos/noticias/informacoes-de-produto/2023-10-10-recolhimento-voluntario-e-preventivo-lasix-injetavel"
                                />


                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
