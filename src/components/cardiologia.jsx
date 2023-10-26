import React from "react"
import Image from "next/image";


export default function Cardiologia() {


    return (
        <div class="container mx-auto pt-4 text-gray-700">
            <div class="text-xl leading-7 text-justify px-4">
                <div class="bg-red-600 rounded-xl py-2 px-6 mx-40">
                    <h2 class="text-lg font-medium text-center text-white">
                        Tratamento Infardo agudo do Miocárdio sem elevação do segmento ST
                    </h2>
                </div>
            </div>
            <div class="my-6">
                <div class=" text-justify px-4 py-2">
                    <h1 class="underline underline-offset-1 text-lg font-medium text-start ">
                        Dose Recomendada
                    </h1>
                    <p className="mt-2">
                        1 mg/kg a cada 12 horas via SC administrada em combinação com terapia antiplaquetária. O tratamento deve ser mantido por no mínimo 2 dias e continuar até a estabilização clínica. A duração habitual do tratamento é de 2 a 8 dias.
                    </p>
                </div>
                <div class="bg-red-600 rounded-xl py-2 px-6 mx-40 my-6">
                    <h2 class="text-lg font-medium text-center text-white">
                        Tratamento Infardo agudo do Miocárdio COM elevação do segmento ST
                    </h2>
                </div>
                <div class=" text-justify px-4 py-2">
                    <h1 class="underline underline-offset-1 text-lg font-medium text-start ">
                        Dose Recomendada
                    </h1>
                    <p className="mt-2">
                        Bolus intravenoso (IV) de 30 mg mais uma dose SC de 1 mg/Kg seguido por uma administração SC de 1
                        mg/kg a cada 12 horas (máximo 100 mg para cada uma das duas primeiras doses SC). Uma terapia antiplaquetária apropriada deve ser administrada em conjunto como ácido acetilsalicílico por via oral (75 mg a 325 mg uma vez por dia), a menos que seja contraindicado. A duração recomendada do tratamento é de 8 dias ou até a alta hospitalar, o que ocorrer primeiro.
                    </p>
                    <p className="mt-4">
                        Tabela de dosagem para doentes com insuficiência renal grave (depuração da creatinina [15-30] ml / min):
                    </p>
                    <div className="relative overflow-x-auto rounded-xl mx-10 my-4">
                        <table className="w-full text-sm text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-100 uppercase bg-purple-900">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        Tratamento do infarto agudo do miocárdio com elevação do segmento ST em pacientes com idade inferior a 75 anos
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-purple-500 border-b dark:border-gray-700 text-gray-100">
                                    <th scope="row" className="px-6 py-2 font-medium">
                                        Dose Padrão
                                    </th>
                                </tr>
                                <tr className="bg-purple-100 border-b dark:border-gray-700 text-gray-500">
                                    <th scope="row" className="px-6 py-4 font-medium ">
                                        30 mg em bolus intravenoso único acompanhado de uma dose de 1 mg/kg por via subcutânea, seguido de 1 mg/kg por via subcutânea duas vezes ao dia (as duas primeiras doses subcutâneas devem ser de no máximo 100 mg cada)
                                    </th>
                                </tr>
                                <tr className="bg-purple-500 border-b dark:border-gray-700 text-gray-100">
                                    <th scope="row" className="px-6 py-2 font-medium">
                                        Insufiência renal severa
                                    </th>
                                </tr>
                                <tr className="bg-purple-100 border-b dark:border-gray-700 text-gray-500">
                                    <th scope="row" className="px-6 py-4 font-medium ">
                                        30 mg em bolus intravenoso único acompanhado de uma dose de 1 mg/kg por via subcutânea, seguido de 1 mg/kg por via subcutânea uma vez ao dia (a primeira dose subcutânea deve ser de no máximo 100 mg cada)
                                    </th>
                                </tr>
                            </tbody>
                            <thead className="text-xs text-gray-100 uppercase bg-purple-900">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        Tratamento do infarto agudo do miocárdio com elevação do segmento ST em pacientes idosos com idade maior ou igual a 75 anos
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-purple-500 border-b dark:border-gray-700 text-gray-100">
                                    <th scope="row" className="px-6 py-2 font-medium">
                                        Dose Padrão
                                    </th>
                                </tr>
                                <tr className="bg-purple-100 border-b dark:border-gray-700 text-gray-500">
                                    <th scope="row" className="px-6 py-4 font-medium ">
                                        0,75 mg/kg por via subcutânea duas vezes ao dia SEM bolus intravenoso inicial (as duas primeiras doses subcutânea devem ser de no máximo 75 mg cada)
                                    </th>
                                </tr>
                                <tr className="bg-purple-500 border-b dark:border-gray-700 text-gray-100">
                                    <th scope="row" className="px-6 py-2 font-medium">
                                        Insufiência renal severa
                                    </th>
                                </tr>
                                <tr className="bg-purple-100 border-b dark:border-gray-700 text-gray-500">
                                    <th scope="row" className="px-6 py-4 font-medium ">
                                        1 mg/kg por via subcutânea uma vez ao dia SEM bolus intravenoso inicial (a primeira dose subcutânea deve ser de no máximo 100 mg)
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="px-4 text-justify">
                    <p>
                        1.ANVISA- Bula Clexane (disponível em <a href="http://www.anvisa.gov.br/datavisa/fila_bula/index.asp"> www.anvisa.gov.br/datavisa/fila_bula/index.asp 
                        </a>
                        acesso em dezembro 2018)
                    </p>
                    <p>
                        2.Piegas LS, et al. V Diretriz da Sociedade Brasileira de Cardiologia sobre Tratamento do Infarto Agudo do Miocárdio com Supradesnível do Segmento ST. Arquivos Brasileiros de Cardiologia, 2015; 105(2): 1-105.
                    </p>
                    <p>
                        3.Nicolau JC, et al. Diretrizes da Sociedade Brasileira de Cardiologia sobre Angina Instável e Infarto Agudo do Miocárdio sem Supradesnível do Segmento ST(II Edição, 2007) - Atualização 2013/2014. Arquivos Brasileiros de Cardiologia , 2014; 102(3)
                    </p>
                    <p>
                        4.Ibanez B,et al. Scientific Document Group . 2017 ESC Guidelines for the management of acute myocardial infarction in patients presenting with ST-segment elevation: The Task Force for the management of acute myocardial infarction in patients presenting with ST-segment elevation of the European Society of Cardiology (ESC). Eur Heart J. 2018 Jan 7;39(2):119-177.
                    </p>
                </div>
            </div>
        </div>

    );
}


