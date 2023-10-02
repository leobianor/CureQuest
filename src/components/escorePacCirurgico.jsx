import React, { useState } from 'react';

const EscorePacCirurgico = () => {
    const [score, setScore] = useState(0);

    const handleCheckboxChange = (event) => {
        const checkboxValue = parseInt(event.target.value);
        const isChecked = event.target.checked;
        setScore((prevScore) => isChecked ? prevScore + checkboxValue : prevScore - checkboxValue);
    };

    const getCardColor = () => {
        if (score === 0) {
            return '#0000CD';
        } else if (score >= 1 && score <= 2) {
            return '#EEB600';
        } else if (score >= 3 && score <= 4) {
            return '#FF4500';
        } else {
            return '#A20202';
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
                    {score === 0 && 'Muito baixo - Deambulação precoce'}
                    {score >= 1 && score <= 2 && 'Baixo - Profilaxia mecânica (CPI)'}
                    {score >= 3 && score <= 4 && 'Risco moderado - Profilaxia farmacológica (HNF, HBPM)'}
                    {score >= 5 && 'Alto risco - Profilaxia farmacológica + profilaxia mecânica (CPI ou meias antirombo). Pacientes de alto risco submetidos à cirurgia oncológica abdominal e pélvica: estender a profilaxia por 4 semanas'}
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
                                value={1}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">Idade de 41 a 60 anos</label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={1}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Cirurgia de grande porte (menos de 1 mês)
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={1}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Obesidade (IMC&#62;25)
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={1}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Varizes de membros inferiores
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={1}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Histórico de doença intestinal inflamatória
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={1}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Sepse (Menos de 1 mês)
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={1}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Doença pulmonar grave (Menos de 1 mês), incluindo pneumonia
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={1}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Edema recorrente de membros inferiores
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={1}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Infarto agudo do miocárdio
                            </label>
                        </div>
                    </li>





                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={1}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Insuficiencia cardíaca congestiva (menos de 1 mês)
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={1}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Doença pulmonar obstrutiva crônica
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={2}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Idade de 61 a 74 anos
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={2}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Cirurgia de artroscopia
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={2}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Cirurgia de grande porte (Mais de 45 min)
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={2}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Cirurgia de laparoscópica (Mais de 45 min)
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={2}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Câncer (Prévio ou presente)
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={2}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Paciente confinado ao leito (Mais de 72 hrs)
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={2}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Imobilização do membro (Gesso ou tala) por mais de 1 mês
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={2}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Acesso central venoso
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={3}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Idade acima de 75 anos
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={3}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                História prévia de trombose venosa ou embolia pulmonar, História familiar de trombose
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={3}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Fator V de Leiden positivo
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={3}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Protombina 20210 A positivo
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={3}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Anticoagulante lúpico positivo
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={3}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Homocisteína sérica elevada
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={3}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Anticorpos anticardiolipinas elevados
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={3}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Trombocitopenia induzida por heparina
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={3}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Trombofilia congênita ou adquirida
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={5}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Acidente vascular cerebral (Menos de 1 mês)
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={5}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Artroplastia de membros inferiores
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={5}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Fratura de pelve, coxa ou perna (menos de 1 mês)
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={5}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Politrauma  (menos de 1 mês)
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={5}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Lesão medular - paralisia (menos de 1 mês)
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={1}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Gravidez ou pós parto (menos de um mês)
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={1}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Uso de anticoncepcional ou terapia de reposição hormonal
                            </label>
                        </div>
                    </li>

                    <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                type="checkbox"
                                value={1}
                                onChange={handleCheckboxChange}
                            />
                            <label for="vue-checkbox" class="w-full py-3 mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                História inexplicada de natimorto, abortos sde repetição, prematuridade com toxemia ou desenvolvimento restrito
                            </label>
                        </div>
                    </li>
                </ul>

                



                


            </div>
        </div>
    );
};

export default EscorePacCirurgico;
