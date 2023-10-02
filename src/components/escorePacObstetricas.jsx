import React, { useState } from 'react';

const EscorePacObstetricas = () => {
    const [score, setScore] = useState(0);

    const handleCheckboxChange = (event) => {
        const checkboxValue = parseInt(event.target.value);
        const isChecked = event.target.checked;
        setScore((prevScore) => isChecked ? prevScore + checkboxValue : prevScore - checkboxValue);
    };

    const getCardColor = () => {
        if (score < 4) {
            return 'blue';
        } else {
            return 'red';
        }
    };

    return (
        <div className="flex flex-col bg-white rounded-xl p-5 text-gray-900 dark:text-white shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)] overflow-auto max-md:p5">
            <h2 className="text-2xl text-center font-semibold uppercase">Escore de Avaliação de Risco de Paciente Cirúrgico</h2>
            <div className="flex flex-col items-center">
                <div className="max-w-md text-justify my-5 p-5 rounded-2xl text-white" style={{ backgroundColor: getCardColor()}}>
                    <p className="font-bold">Pontuação: {score}</p>
                        Recomendações:
                    <br />
                    {score >= 4 && 'Alto Risco - Para pacientes agudamente enfermos e hospitalizados com alto risco de TEV, recomenda-se tromboprofilaxia farmacológica com HBOM, HNF (de 12-12h ou 8-8h) ou fondaparina'}
                    {score < 4 &&  'Baixo Risco - Para pacientes agudamente enfermos e hospitalizados com baixo risco de TEV, recomenda- se contra o uso de tromboprofilaxia farmacológica ou mecânica.'}
                </div>
            </div>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Selecione os fatores de risco:</h3>
            <div className="flex gap-8 justify-center flex-wrap">
                <ul class="">
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={3}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Câncer em atividade
                            </label>
                        </div>
                    </li>

                </ul>

                



                


            </div>
        </div>
    );
};

export default EscorePacObstetricas;
