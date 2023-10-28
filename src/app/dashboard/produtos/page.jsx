"use client"

import ProductsList from "@/components/ProductsList";
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
        <ProductsList />

        </>
    )
}
