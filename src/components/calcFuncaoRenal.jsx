import React, { useState } from "react";
import Accordion from "@/components/Accordion"; 

function RenalCalculator() {
    const [idade, setIdade] = useState(18);
    const [peso, setPeso] = useState(70);
    const [creatinina, setCreatinina] = useState(0.10);
    const [sexo, setSexo] = useState("Homem");
    const [raca, setRaca] = useState("branco");

    const calculateCkdPi = () => {
        const coeficienteIdade = 0.993;
        let coeficienteGenero;
        let coeficienteRaca;
        let RFG;

        if (sexo === "Homem") {
            if (raca === true) {
                coeficienteGenero = (creatinina <= 0.9) ? 1.159 : 1.209;
                RFG = (creatinina <= 0.9) ?
                    163 * ((creatinina / 0.9) ** -0.411) * 0.993 ** idade :
                    163 * ((creatinina / 0.9) ** -1.209) * 0.993 ** idade;
            } else {
                coeficienteGenero = (creatinina <= 0.9) ? 1 : 1.209;
                RFG = (creatinina <= 0.9) ?
                    141 * ((creatinina / 0.9) ** -0.411) * 0.993 ** idade :
                    141 * ((creatinina / 0.9) ** - 1.209) * 0.993 ** idade;
            }
        } else {
            if (raca === true) {
                coeficienteGenero = (creatinina <= 0.7) ? 1.018 : 1;
                RFG = (creatinina <= 0.7) ?
                    166 * ((creatinina / 0.7) ** -0.329) * 0.993 ** idade :
                    166 * ((creatinina / 0.7) ** -1.209) * 0.993 ** idade;
            } else {
                coeficienteGenero = (creatinina <= 0.7) ? 1 : 1;
                RFG = (creatinina <= 0.7) ?
                    144 * ((creatinina / 0.7) ** -0.329) * 0.993 ** idade :
                    144 * ((creatinina / 0.7) ** -1.209) * 0.993 ** idade;
            }
        }

        return RFG;
    };

    const calculateMdrdImps = () => {
        let rfg = 175 * (creatinina ** -1.154) * (idade ** -0.203);
        if (sexo === "Mulher") {
            rfg *= 0.742;
        }

        if (raca === true) {
            rfg *= 1.21;
        }

        return rfg;
    };

    const calculateMdrd4 = () => {
        let rfg = 186 * (creatinina ** -1.154) * (idade ** -0.203);
        if (sexo === "Mulher") {
            rfg *= 0.742;
        }

        if (raca === true) {
            rfg *= 1.21;
        }

        return rfg;
    };

    const calculateCockG = () => {
        const clearance = (140 - idade) * (peso / (72 * creatinina));
        if (sexo === "Mulher") {
            return clearance * 0.85;
        }
        return clearance;
    };

    const accordionItems = [
        {
            title: "CKD-Pi",
            content: (
                <div className="py-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Idade (anos):</label>
                    <input
                        type="number"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Creatinina (mg/dl):</label>
                    <input
                        type="number"
                        value={creatinina}
                        onChange={(e) => setCreatinina(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexo:</label>
                    <div className="space-x-4">
                        <button
                            onClick={() => setSexo("Homem")}
                            className={`py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 rounded-full ${sexo === "Homem" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        >
                            Homem
                        </button>
                        <button
                            onClick={() => setSexo("Mulher")}
                            className={`py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 rounded-full ${sexo === "Mulher" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        >
                            Mulher
                        </button>
                    </div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Raça Negra:</label>
                    <div className="space-x-4">
                        <button
                            onClick={() => setRaca(true)}
                            className={`py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 rounded-full ${raca ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        >
                            Sim
                        </button>
                        <button
                            onClick={() => setRaca(false)}
                            className={`py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 rounded-full ${!raca ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        >
                            Não
                        </button>
                    </div>
                    <div className="mt-4 bg-red-600 rounded-xl py-10 px-6 text-center">
                        <h1 className="text-5xl font-medium">
                        {calculateCkdPi().toFixed(2)}
                        </h1>
                        <p className="text-sm font-light">mL/min por 1.73 m²</p> 
                    </div>
                </div>
            ),
        },
        {
            title: "MDRD Imps",
            content: (
                <div className="py-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Idade (anos):</label>
                    <input
                        type="number"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Creatinina (mg/dl):</label>
                    <input
                        type="number"
                        value={creatinina}
                        onChange={(e) => setCreatinina(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexo:</label>
                    <div className="space-x-4">
                        <button
                            onClick={() => setSexo("Homem")}
                            className={`py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 rounded-full ${sexo === "Homem" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        >
                            Homem
                        </button>
                        <button
                            onClick={() => setSexo("Mulher")}
                            className={`py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 rounded-full ${sexo === "Mulher" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        >
                            Mulher
                        </button>
                    </div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Raça Negra:</label>
                    <div className="space-x-4">
                        <button
                            onClick={() => setRaca(true)}
                            className={`py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 rounded-full ${raca ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        >
                            Sim
                        </button>
                        <button
                            onClick={() => setRaca(false)}
                            className={`py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 rounded-full ${!raca ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        >
                            Não
                        </button>
                    </div>
                    <div className="mt-4 bg-red-600 rounded-xl py-10 px-6 text-center">
                        <h1 className="text-5xl font-medium">
                        {calculateMdrdImps().toFixed(2)}
                        </h1>
                        <p className="text-sm font-light">mL/min por 1.73 m²</p> 
                    </div>
                </div>
            ),
        },
        {
            title: "MDRD 4",
            content: (
                <div className="py-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Idade (anos):</label>
                    <input
                        type="number"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Creatinina (mg/dl):</label>
                    <input
                        type="number"
                        value={creatinina}
                        onChange={(e) => setCreatinina(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexo:</label>
                    <div className="space-x-4">
                        <button
                            onClick={() => setSexo("Homem")}
                            className={`py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 rounded-full ${sexo === "Homem" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        >
                            Homem
                        </button>
                        <button
                            onClick={() => setSexo("Mulher")}
                            className={`py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 rounded-full ${sexo === "Mulher" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        >
                            Mulher
                        </button>
                    </div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Raça Negra:</label>
                    <div className="space-x-4">
                        <button
                            onClick={() => setRaca(true)}
                            className={`py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 rounded-full ${raca ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        >
                            Sim
                        </button>
                        <button
                            onClick={() => setRaca(false)}
                            className={`py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 rounded-full ${!raca ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        >
                            Não
                        </button>
                    </div>
                    <div className="mt-4 bg-red-600 rounded-xl py-10 px-6 text-center">
                        <h1 className="text-5xl font-medium">
                        {calculateMdrd4().toFixed(2)}
                        </h1>
                        <p className="text-sm font-light">mL/min por 1.73 m²</p> 
                    </div>
                </div>
            ),
        },
        {
            title: "Cockcroft-Gault",
            content: (
                <div className="py-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Idade (anos):</label>
                    <input
                        type="number"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Peso (kg):</label>
                    <input
                        type="number"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Creatinina (mg/dl):</label>
                    <input
                        type="number"
                        value={creatinina}
                        onChange={(e) => setCreatinina(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexo:</label>
                    <div className="space-x-4">
                        <button
                            onClick={() => setSexo("Homem")}
                            className={`py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 rounded-full ${sexo === "Homem" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        >
                            Homem
                        </button>
                        <button
                            onClick={() => setSexo("Mulher")}
                            className={`py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 rounded-full ${sexo === "Mulher" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        >
                            Mulher
                        </button>
                    </div>
                    <div className="mt-4 bg-red-600 rounded-xl py-10 px-6 text-center">
                        <h1 className="text-5xl font-medium">
                        {calculateCockG().toFixed(2)}
                        </h1>
                        <p className="text-sm font-light">mL/min por 1.73 m²</p> 
                    </div>
                </div>
            ),
        },
    ];
    


    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Calculadora renal</h1>
            <Accordion items={accordionItems} />
        </div>
    );
}

export default RenalCalculator;
