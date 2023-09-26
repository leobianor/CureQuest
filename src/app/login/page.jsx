"use client"

import Image from "next/image"
import logo from "@/images/logo.png"
import { useState } from "react"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const { push } = useRouter()

    function login(e){
        e.preventDefault()
        if (email === "leobianor@outlook.com" && senha === "123"){
            push("/")
        }else{
            toast.error("Credenciais Invalidas", {
                style:{
                    backgroundColor: '#333',
                    color: '#FFF'
                }
            })
        }
    }


    return (
        <div className=" flex h-screen ">
            <aside className="hidden md:flex">
                <Image
                    className="h-full w-full object-cover"
                    src={logo}
                    alt="Picture of the author"
                />
            </aside>

            <main className="contanier m-auto max-w-md p-3">
                <h1 className="text-xl font-bold">Fiap Filmes</h1>
                <form onSubmit={login} className="flex flex-col">
                    <label htmlFor="email">E-mail</label>
                    <input 
                    className="bg-slate-600 p-1 rounded" 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    />


                    <label htmlFor="senha">Senha</label>
                    <input 
                    className="bg-slate-600 p-1 rounded" 
                    type="password" 
                    id="senha" 
                    value={senha} 
                    onChange={e => setSenha(e.target.value)}
                    />

                    <button className="bg-pink-600 p-1 mt-3 rounded">Entrar</button>

                </form>
            </main>
        </div>
    )
}