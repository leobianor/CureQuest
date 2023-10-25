import React from 'react';

function PacEspeciais() {
    return (
        <>


            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    <li class="mr-2" role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Insuficiência Renal Grave</button>
                    </li>
                    <li class="mr-2" role="presentation">
                        <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Pacientes Com Baixo Peso e Obesos</button>
                    </li>
                </ul>
            </div>
            <div id="myTabContent">
                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                    <div class="relative overflow-x-auto">
                        <table class="text-center w-full text-sm text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">

                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Tratamento
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Profilaxia
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-sky-700 border-b dark:border-gray-700 text-white">
                                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                        Função Renal Normal
                                    </th>
                                    <td class="px-6 py-4">
                                        1,5 mg/Kg/1x dia <br />
                                        1 mg/Kg/2x dia
                                    </td>
                                    <td class="px-6 py-4">
                                        40 mg/1x dia
                                    </td>

                                </tr>
                                <tr class="bg-red-700 border-b dark:border-gray-700 text-white">
                                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                        Insuficiência Renal Grave <br />
                                        (Depuração de Creatina &lt;30 ml/min)
                                    </th>
                                    <td class="px-6 py-4">
                                        1 mg/Kg/1x dia
                                    </td>
                                    <td class="px-6 py-4">
                                        20 mg/1x dia
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                <div class="w-full h-full flex flex-col items-center justify-center">
                    <div class="w-full h-full object-cover" src="img/texto.png" alt="Imagem de texto">
                        <h1 className='font-semibold text-purple-600 text-justify'>Pacientes com baixo peso:{" "}
                            <p class="font-normal text-gray-500">
                                Sem a necessidade de ajuste de dose, aconselha-se a monitorização clínica cuidadosa.<sup>1</sup>
                                <ul className='font-medium pl-2 mt-1'>
                                    <li>- Mulheres &lt;45kg</li>
                                    <li>- Homens &lt;57kg</li>
                                </ul>
                            </p>

                        </h1>
                        <h1 className='font-semibold text-purple-600 mt-5 text-justify'>Pacientes obesos:{" "}
                            <p class="text-justify font-normal text-gray-500">
                                Pacientes obesos apresentam maior risco de tromboembolismo. Esses pacientes devem ser cuidadosamente observados para sinais e sintomas de tromboembolismo.<sup>1</sup>
                            </p>
                            <br />
                            <p class=" font-normal text-gray-500 mt-2 px-4">
                                GUÍAS ACCP 2012<sup>2-3</sup>: Um aumento na dose de drogas anticoagulantes poderia ser avaliado em relação à dose padrão em pacientes obesos submetidos à cirurgia bariátrica e em outras situações.
                            </p>
                        </h1>
                        <ul class=" text-gray-500 mt-20">
                            <li>
                                <a href="https://www.anvisa.gov.br/datavisa/fila_bula/index.asp" target="_blank" class="text-blue-500">ANVISA- Bula Clexane</a>
                            </li>
                            <li>
                                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3332114/" target="_blank" class="text-blue-500">Falck-Ytter Y, Francis CW, Johanson NA, Curley C, Dahl OE, Schulman S, Ortel TL, Pauker SG, Colwell CW Jr. Prevention of VTE in orthopedic surgery patients: Antithrombotic Therapy and Prevention of Thrombosis, 9th ed: American College of Chest Physicians Evidence-Based Clinical Practice Guidelines. Chest. 2012 Feb;141(2 Suppl):e278S-e325S</a>
                            </li>
                            <li>
                                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3332114/" target="_blank" class="text-blue-500">Gould MK, et al. Prevention of VTE in nonorthopedic surgical patients: Antithrombotic Therapy and Prevention of Thrombosis, 9th ed: American College of Chest Physicians Evidence-Based Clinical Practice Guidelines. Chest. 2012;141(2 Suppl):e227S-e775</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PacEspeciais;
