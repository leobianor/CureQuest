import React, { useState } from 'react'
import CheckboxItem from '@/components/CheckboxItem'

const EscorePacObstetrica = () => {
    const [score, setScore] = useState(0);

    const handleCheckboxChange = (event) => {
        const checkboxValue = parseInt(event.target.value);
        const isChecked = event.target.checked;
        setScore((prevScore) => isChecked ? prevScore + checkboxValue : prevScore - checkboxValue);
    };

    const getCardColor = () => {
        if (score <= 2) {
            return '#0000CD';
        } else if (score === 3) {
            return '#EEB600';
        } else if (score >= 4) {
            return '#A20202';
        }
    };

    return (


        <div className="flex flex-col rounded-xl p-5 text-gray-900 dark:text-white overflow-auto max-md:p5">
            <h2 className="text-2xl text-center font-semibold uppercase">Escore de AVALIAÇÃO DE RISCO DE TEV EM PACIENTES OBSTÉTRICAS</h2>
            <div className="flex flex-col items-center">
                <div className="max-w-md text-justify my-5 p-5 rounded-2xl text-white" style={{ backgroundColor: getCardColor() }}>
                    <p className="font-bold">Pontuação: {score}</p>
                    Recomendações:
                    <br />
                    {score <= 2 && 'Pós parto - Considere a tromboprofilaxia pelo menos por 10 dias.'}
                    {score === 3 && 'Anteparto - Considere a tromboprofilaxia a partir de 28 semanas.'}
                    {score >= 4 && 'Anteparto - Considere realizar tromboprofilaxia a partir do primeiro trimestre.'}
                    
                </div>

                <p className='font-bold'>Observações:</p>
                <div className="max-w-md text-justify mt-2 p-5 rounded-2xl text-white bg-amber-500">
                    <p className="font-normal text-base">Se a paciente foi hospitalizada pré-parto, considere a tromboprofilaxia.</p>
                </div>
                <div className="max-w-md text-justify mt-3 p-5 rounded-2xl text-white bg-amber-500">
                    <p className="font-normal text-base">Se a hospitalização foi prolongada (≥3 dias) ou a paciente voltou ao hospital durante o puerpério, considere a tromboprofilaxia.</p>
                </div>
                <div className="max-w-md text-justify my-3 p-5 rounded-2xl text-white bg-stone-600">
                    <p className="font-normal text-base">Em caso de risco identificado de hemorragia, deve-se pesar os riscos de hemorragia e trombose e discuti-los em consulta com um hematologista que tenha experiéncia nesses dois eventos na gravidez.</p>
                </div>







            </div>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white justify-center">Selecione os fatores de risco:</h3>
            <div className="flex gap-8 justify-center flex-wrap">
                <ul>
                    <p className='text-sm font-medium'>Fatores de risco preexistentes</p>
                    <CheckboxItem label="TEV anterior (exceto um único evento relativo a cirugía de grande porte)" value={4} onChange={handleCheckboxChange} />
                    <CheckboxItem label="TEV prévio provocado por cirugia de grande porte" value={3} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Trombofilia conhecida de alto risco" value={3} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Comorbidades médicas como câncer, insuficência cardíaca, lúpus eritematoso sistêmico ativo, poliartropatia inflamatória ou doença intestinal inflamatória, nefrose, Diabetes Melitus Tipo 1 com nefropatia, doença falciforme, uso atual de drogas intravenosas" value={3} onChange={handleCheckboxChange} />
                    <CheckboxItem label="História familiar de TEV não provocado ou relacionado a estrogênio em parente de primeiro grau" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Trombofilia de baixo risco conhecida (sem TEV)" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Idade (>35 anos)" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Obesidade" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Paridade ≥3" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Tabagismo" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Veias varicosas de grosso calibre" value={1} onChange={handleCheckboxChange} />
                    <p className='text-sm font-medium mt-3 mb-2'>Fatores de risco obstétricos</p>
                    <CheckboxItem label="Pré-eclâmpsia na gravidez atual" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="FIV/técnica de reprodução assistida" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Gravidez múltipla" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Cesariana em trabalho de parto" value={2} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Cesariana eletiva" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Fórcipe médio ou rotação" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Trabalho de parto prolongado (>24 horas)" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="HPP (>1 L ou transfusão)" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Nascimento pré-termo <37+0 semanas na gravidez atual" value={1} onChange={handleCheckboxChange} />
                    <p className='text-sm font-medium mt-3 mb-2'>Fatores de risco transitórios</p>
                    <CheckboxItem label="Natimorto na gravidez atual" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Qualquer procedimento cirúrgico durante a gravidez ou o puerpério, exceto reparação imediata do perineo, como apendicetomia ou esterilização pós-parto" value={3} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Hiperêmese" value={3} onChange={handleCheckboxChange} />
                    <CheckboxItem label="SHO (apenas no primeiro trimestre)" value={4} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Infecção sistêmica atual" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Imobilidade, desidratação" value={1} onChange={handleCheckboxChange} />
                    </ul>
            </div>
        </div>

    );
};


export default EscorePacObstetrica;
