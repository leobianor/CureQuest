import React from "react"
import Accordion from "@/components/Accordion"

export default function TratamentoTEV() {
    const accordions = [
        {
            title: "Insuficiência Renal Grave",
            content: (
                <div className="relative overflow-x-auto rounded-xl">
                    <table className="text-center w-full text-sm text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3"></th>
                                <th scope="col" className="px-6 py-3">
                                    Tratamento
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Profilaxia
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-sky-700 border-b dark:border-gray-700 text-white">
                                <th scope="row" className="px-6 py-4 font-medium">
                                    Função Renal Normal
                                </th>
                                <td className="px-6 py-4">
                                    1,5 mg/Kg/1x dia <br />
                                    1 mg/Kg/2x dia
                                </td>
                                <td className="px-6 py-4">40 mg/1x dia</td>
                            </tr>
                            <tr className="bg-red-700 border-b dark:border-gray-700 text-white">
                                <th scope="row" className="px-6 py-4 font-medium">
                                    Insuficiência Renal Grave <br />
                                    (Depuração de Creatina &lt;30 ml/min)
                                </th>
                                <td className="px-6 py-4">1 mg/Kg/1x dia</td>
                                <td className="px-6 py-4">20 mg/1x dia</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ),
        },
        {
            title: "Pacientes com Baixo Peso e Obesos",
            content: (<div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-full h-full object-cover px-4">
                    <h1 className="font-semibold text-purple-600 text-justify">Pacientes com baixo peso:{" "}
                        <p className="font-normal text-gray-900 dark:text-white">
                            Sem a necessidade de ajuste de dose, aconselha-se a monitorização clínica cuidadosa.<sup>1</sup>
                        </p>
                        <ul className="font-medium pl-2 mt-1">
                            <li>- Mulheres &lt;45kg</li>
                            <li>- Homens &lt;57kg</li>
                        </ul>
                    </h1>
                    <h1 className="font-semibold text-purple-600 mt-5 text-justify">Pacientes obesos:{" "}
                        <p className="text-justify font-normal text-gray-900 dark:text-white">
                            Pacientes obesos apresentam maior risco de tromboembolismo. Esses pacientes devem ser cuidadosamente observados para sinais e sintomas de tromboembolismo.<sup>1</sup>
                        </p>
                        <br />
                        <p className=" font-normal text-gray-900 dark:text-white mt-2 px-8">
                            GUÍAS ACCP 2012<sup>2-3</sup>: Um aumento na dose de drogas anticoagulantes poderia ser avaliado em relação à dose padrão em pacientes obesos submetidos à cirurgia bariátrica e em outras situações.
                        </p>
                    </h1>
                    <ul className="text-gray-900 dark:text-white mt-20">
                        <li>
                            <a href="https://www.anvisa.gov.br/datavisa/fila_bula/index.asp" target="_blank" className="text-blue-500">1.ANVISA- Bula Clexane</a>
                        </li>
                        <li>
                            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3332114/" target="_blank" className="text-blue-500">2.Falck-Ytter Y, Francis CW, Johanson NA, Curley C, Dahl OE, Schulman S, Ortel TL, Pauker SG, Colwell CW Jr. Prevention of VTE in orthopedic surgery patients: Antithrombotic Therapy and Prevention of Thrombosis, 9th ed: American College of Chest Physicians Evidence-Based Clinical Practice Guidelines. Chest. 2012 Feb;141(2 Suppl):e278S-e325S</a>
                        </li>
                        <li>
                            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3332114/" target="_blank" className="text-blue-500">3.Gould MK, et al. Prevention of VTE in nonorthopedic surgical patients: Antithrombotic Therapy and Prevention of Thrombosis, 9th ed: American College of Chest Physicians Evidence-Based Clinical Practice Guidelines. Chest. 2012;141(2 Suppl):e227S-e775</a>
                        </li>
                    </ul>
                </div>
            </div>
            ),
        },
    ];

    return (
        <Accordion items={accordions} />
    );
}

