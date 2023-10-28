"use client"

import Image from "next/image"
import logo from "@/images/logo.png"
import { useState } from "react"
import { useRouter } from "next/navigation"
import toast, { Toaster } from "react-hot-toast";
import { serverLogin } from "@/actions/auth"

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [credenciaisInvalidas, setCredenciaisInvalidas] = useState(false);
    const { push } = useRouter();

    function login(e) {
        e.preventDefault();

        // Recupere os usuários cadastrados do localStorage
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const user = existingUsers.find(
            (user) => user.email === email && user.password === senha
        );

        if (user) {
            toast.success("Login bem-sucedido!", {
                style: {
                    backgroundColor: "#333",
                    color: "#FFF",
                },
            }
            
            );
            serverLogin()
            // Redirecione para a página de dashboard/home após o login
            push("/dashboard/home");
        } else {
            toast.error("Credenciais Inválidas", {
                style: {
                    backgroundColor: "#333",
                    color: "#FFF",
                },
            });
            // Define credenciaisInvalidas como true para limpar os campos de entrada
            setCredenciaisInvalidas(true);
        }
    }


    return (
        <div className="bg-gray-50 dark:bg-gray-800 h-screen">
            <div className="flex h-full flex-1 flex-col justify-center px-6 py-14">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image
                        className="mx-auto h-10 w-auto object-cover"
                        src={logo}
                        alt="Picture of the author"
                    />
                    <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                        Faça login em sua conta
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={login} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white ">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    className={`block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${credenciaisInvalidas ? "ring-red-500" : "" // Adicione um anel vermelho quando as credenciais forem inválidas
                                        }`}
                                    value={credenciaisInvalidas ? "" : email} // Limpe o valor do campo se as credenciais forem inválidas
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setCredenciaisInvalidas(false); // Defina como false ao digitar novamente
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="senha" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                    Senha
                                </label>

                                
                            </div>
                            <div className="mt-2">
                                <input
                                    id="senha"
                                    type="password"
                                    autoComplete="current-password"
                                    className={`block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${credenciaisInvalidas ? "ring-red-500" : ""
                                        }`}
                                    value={credenciaisInvalidas ? "" : senha}
                                    onChange={(e) => {
                                        setSenha(e.target.value);
                                        setCredenciaisInvalidas(false);
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-purple-700 hover:bg-purple-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-900 dark:text-white">
                        Não faz parte ainda?{' '}
                        <a href="/cadastro" className="font-semibold leading-6 text-purple-700 hover:text-purple-800">
                            Cadastre-se agora!
                        </a>
                    </p>
                </div>
            </div>
            <Toaster />
        </div>
    )
}
