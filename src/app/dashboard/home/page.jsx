"use client"

import Titulo from "@/components/Titulo"
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";


import 'flowbite';



export default function Home() {

    


    //mock
    return (
        <>
            <Navbar />
            <Sidebar />


            <div className="p-4 sm:ml-64 bg-gray-50 dark:bg-gray-900  min-h-screen h-full">
                <div className="p-4 mt-14">
                    <div className="text-gray-900 dark:text-white font-medium tracking-[1.9px] text-[34px]  max-md:ml-[10px]">
                        <span>
                            Olá{" "}
                        </span>
                        <span className="font-bold text-purple-700">
                            Dr. Fernandes
                        </span>
                        <span>
                            , bem-vindo de novo!
                        </span>
                    </div>
                    <div className="flex items-start justify-start mb-4 ">
                        <div className="items-start self-stretch flex flex-col pt-[24px] pb-[40px] px-[20px]">
                            <Titulo>Notificações</Titulo>
                            <div className="flex flex-wrap">
                                <div id="cardMenssagem" className="justify-center items-start bg-gray-50 dark:bg-gray-800 shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)] w-full max-w-[300px] flex flex-col ml-[20px] mt-[25px]  px-[20px] py-[26px] rounded-[20px] max-md:ml-[10px]">
                                    <div className="w-full max-w-[293px] ml-[-3px] self-center flex flex-col mt-px">
                                        <h2
                                            className="justify-center text-purple-700 not-italic font-bold text-[23px] ml-px max-md:ml-px"
                                        >
                                            Nathalia Santos
                                        </h2>
                                        <h3
                                            className="text-gray-900 dark:text-white not-italic font-light text-[15px] mt-[12px]"
                                        >
                                            Agente Sanofi
                                        </h3>
                                        <span className="text-gray-900 dark:text-white text-justify not-italic font-[275] text-[15px] self-stretch mt-[9px]">
                                            Lorem Ipsum is simply dummy text of the
                                            printing and typesetting industry. Lorem Ipsum
                                            has been...
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>

        </>
    )
}
