import React, { useState } from 'react'
import CheckboxItem from '@/components/CheckboxItem'

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


        <div className="flex flex-col rounded-xl p-5 text-gray-900 dark:text-white overflow-auto max-md:p5">
            <h2 className="text-2xl text-center font-semibold uppercase">Escore de Avaliação de Risco de Paciente Cirúrgico</h2>
            <div className="flex flex-col items-center">
                <div className="max-w-md text-justify my-5 p-5 rounded-2xl text-white" style={{ backgroundColor: getCardColor() }}>
                    <p className="font-bold">Pontuação: {score}</p>
                    Recomendações:
                    <br />
                    {score === 0 && 'Muito baixo - Deambulação precoce'}
                    {score >= 1 && score <= 2 && 'Baixo - Profilaxia mecânica (CPI)'}
                    {score >= 3 && score <= 4 && 'Risco moderado - Profilaxia farmacológica (HNF, HBPM)'}
                    {score >= 5 && 'Alto risco - Profilaxia farmacológica + profilaxia mecânica (CPI ou meias antirombo). Pacientes de alto risco submetidos à cirurgia oncológica abdominal e pélvica: estender a profilaxia por 4 semanas'}
                </div>
            </div>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white justify-center">Selecione os fatores de risco:</h3>
            <div className="flex gap-8 justify-center flex-wrap">
                <ul>
                    <CheckboxItem label="Idade de 41 a 60 anos" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Cirurgia de grande porte (menos de 1 mês)" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Obesidade (IMC > 25)" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Varizes de membros inferiores" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Histórico de doença intestinal inflamatória" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Sepse (Menos de 1 mês)" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Doença pulmonar grave (Menos de 1 mês), incluindo pneumonia" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Edema recorrente de membros inferiores" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Infarto agudo do miocárdio" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Insuficiência cardíaca congestiva (menos de 1 mês)" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Doença pulmonar obstrutiva crônica" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Idade de 61 a 74 anos" value={2} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Cirurgia de artroscopia" value={2} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Cirurgia de grande porte (Mais de 45 min)" value={2} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Cirurgia de laparoscópica (Mais de 45 min)" value={2} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Câncer (Prévio ou presente)" value={2} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Paciente confinado ao leito (Mais de 72 hrs)" value={2} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Imobilização do membro (Gesso ou tala) por mais de 1 mês" value={2} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Acesso central venoso" value={2} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Idade acima de 75 anos" value={3} onChange={handleCheckboxChange} />
                    <CheckboxItem label="História prévia de trombose venosa ou embolia pulmonar, História familiar de trombose" value={3} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Fator V de Leiden positivo" value={3} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Protrombina 20210 A positivo" value={3} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Anticoagulante lúpico positivo" value={3} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Homocisteína sérica elevada" value={3} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Anticorpos anticardiolipinas elevados" value={3} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Trombocitopenia induzida por heparina" value={3} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Trombofilia congênita ou adquirida" value={3} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Acidente vascular cerebral (Menos de 1 mês)" value={5} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Artroplastia de membros inferiores" value={5} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Fratura de pelve, coxa ou perna (menos de 1 mês)" value={5} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Politrauma (menos de 1 mês)" value={5} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Lesão medular - paralisia (menos de 1 mês)" value={5} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Gravidez ou pós parto (menos de um mês)" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="Uso de anticoncepcional ou terapia de reposição hormonal" value={1} onChange={handleCheckboxChange} />
                    <CheckboxItem label="História inexplicada de natimorto, abortos de repetição, prematuridade com toxemia ou desenvolvimento restrito" value={1} onChange={handleCheckboxChange} />
                </ul>
            </div>
        </div>

    );
};

export default EscorePacCirurgico;
