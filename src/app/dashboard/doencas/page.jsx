"use client"

import Titulo from "@/components/Titulo"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidevar"
import Image from "next/image"
import TromboembolismoVenoso from "@/images/TromboembolismoVenoso.png"




export default function Home() {
    //mock
    return (
        <>
            <Navbar />
            <Sidebar />


            <div className="p-4 sm:ml-64 bg-gray-50 dark:bg-gray-900 h-screen">
                <div className="p-4 mt-14">
                    <a href="doencas/tromboelismo-venoso" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <Image
                            class="bg-white px-2 py-2 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src={TromboembolismoVenoso}
                            alt=""
                        />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Tromboembolismo Venoso</h5>
                        </div>
                    </a>



                </div>
            </div>

        </>
    )
}
