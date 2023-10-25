import React, { useState } from 'react';
import CheckboxItem from '@/components/CheckboxItem'


const EscorePacClinico = () => {
    const [score, setScore] = useState(0);

    const handleCheckboxChange = (event) => {
        const checkboxValue = parseInt(event.target.value);
        const isChecked = event.target.checked;
        setScore((prevScore) => isChecked ? prevScore + checkboxValue : prevScore - checkboxValue);
    };

    const getCardColor = () => {
        if (score < 4) {
            return '#0000CD';
        } else {
            return '#A20202';
        }
    };


    return (

        <div className="flex flex-col rounded-xl p-5 text-gray-900 dark:text-white overflow-auto max-md:p5">
            <h2 className="text-2xl text-center font-semibold uppercase">Escore de Avaliação de Risco de Paciente Cirúrgico</h2>
            <div className="flex flex-col items-center">
                <div className="max-w-md text-justify my-5 p-5 rounded-2xl text-white" style={{ backgroundColor: getCardColor() }}>
                    <p className="font-bold">Pontuação: {score}</p>
                    Recomendações:
                    <br />
                    {score >= 4 && 'Alto Risco - Para pacientes agudamente enfermos e hospitalizados com alto risco de TEV, recomenda-se tromboprofilaxia farmacológica com HBOM, HNF (de 12-12h ou 8-8h) ou fondaparina'}
                    {score < 4 && 'Baixo Risco - Para pacientes agudamente enfermos e hospitalizados com baixo risco de TEV, recomenda- se contra o uso de tromboprofilaxia farmacológica ou mecânica.'}
                </div>
            </div>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white justify-center">Selecione os fatores de risco:</h3>
            <div className="flex gap-8 justify-center flex-wrap">
                <ul>
                    <CheckboxItem label="Câncer em atividade" value={3} onChange={handleCheckboxChange} />
                    <CheckboxItem label="História prévia de TEV (excluindo trombose venosa superficial)" value={3} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Mobilidade reduzida" value={3} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Trombofilia conhecida" value={3} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Trauma ou cirurgia recente (último mês)" value={3} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Idade avançada (Mais de 70 anos)" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Insuficiência cardíaca e/ou respiratória" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Infecções e/ou doenças reumatológicas" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Infarto agudo do miocárdio ou acidente vascular cerebral" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Obesidade (IMC > 30)" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Terapia hormonal atual" value={1} onChange={handleCheckboxChange} />
                </ul>
            </div>
        </div>
    );
};

export default EscorePacClinico;
