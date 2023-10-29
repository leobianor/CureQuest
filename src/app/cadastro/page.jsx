"use client"

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import InputMask from "react-input-mask";
import toast, { Toaster } from "react-hot-toast";

export default function SignUp() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        crm: "",
    });

    const [repeatPassword, setRepeatPassword] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRepeatPasswordChange = (e) => {
        setRepeatPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== repeatPassword) {
            toast.error("As senhas não coincidem!",{
                style: {
                    backgroundColor: "#333",
                    color: "#FFF",
                },
            });
            return;
        }

        // Verificar se o usuário já está cadastrado com o mesmo email ou CRM
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const isUserExists = existingUsers.some(
            (user) => user.email === formData.email || user.crm === formData.crm
        );

        if (isUserExists) {
            toast.error("Usuário já cadastrado!",{
                style: {
                    backgroundColor: "#333",
                    color: "#FFF",
                },
            });
            window.location.href = "/login";
            return;
        }

        // Adicionar o novo usuário ao localStorage
        existingUsers.push(formData);
        localStorage.setItem("users", JSON.stringify(existingUsers));

        // Exibir uma notificação de sucesso
        toast.success("Cadastro realizado com sucesso!",{
            style: {
                backgroundColor: "#333",
                color: "#FFF",
            },
        });

        // Redirecionar o usuário para a página de dashboard/home após 3 segundos
        setTimeout(() => {
            window.location.href = "/dashboard/home"; // Atualize com a rota correta
        });
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-800 h-screen">
            <div className="flex h-full flex-1 flex-col justify-center px-40 py-14 2xl:px-[600px] sm:px-80 md:px-16 max-xl:px-10">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image
                        className="mx-auto h-14 w-auto object-cover"
                        src={logo}
                        alt="Picture of the author"
                    />
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
                        Faça seu cadastro
                    </h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="email"
                            name="email"
                            id="floating_email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Endereço de Email
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="password"
                            name="password"
                            id="floating_password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_password"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Senha
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="password"
                            name="repeatPassword"
                            id="floating_repeat_password"
                            value={repeatPassword}
                            onChange={handleRepeatPasswordChange}
                            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 ${repeatPassword === "" ? 'border-gray-300' : formData.password === repeatPassword ? 'border-green-500' : 'border-red-500'
                                } border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer`}
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_repeat_password"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Confirme a Senha
                        </label>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="firstName"
                                id="floating_first_name"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Primeiro Nome
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="lastName"
                                id="floating_last_name"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_last_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Sobrenome
                            </label>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            
                            <InputMask
                                mask="(99) 99999-9999"
                                type="tel"
                                name="phone"
                                id="floating_phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_phone"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Telefone
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            
                            <InputMask
                                mask="9999999"
                                type="text"
                                name="crm"
                                id="floating_crm"
                                value={formData.crm}
                                onChange={handleInputChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_crm"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                CRM
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
            <Toaster />
        </div>
    );
}
