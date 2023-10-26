import React from "react"
import Accordion from "@/components/Accordion" // Importe o componente Accordion

function TratamentoTEV() {
    const accordions = [
        {
            title: "1 Vez ao Dia",
            content: (
                <div class="text-gray-500">
                    <h1 class="text-center py-4 font-bold text-3xl">1 vez ao dia</h1>
                    <h2 class="text-center py-4 font-medium text-xl">1,5 mg/kg/24h</h2>
                    <p class="text-center py-4 bg-blue-700 rounded-lg p-2 mx-20 text-white font-semibold">
                        O regime de 1 vez por dia de ENOXAPARINA é o mais comumente usado na prática clínica¹
                    </p>
                    <p class="text-center py-4">
                        1.Kearon C, Antithrombotic therapy for VTE disease: Antithrombotic Therapy and Prevention of Thrombosis, 9th ed: American College of Chest Physicians Evidence-Based Clinical Practice Guidelines. Chest. 2012 Feb;141(2 Suppl):e419S-e496S. doi: 1378/chest.11-2301. ANVISA- Bula Clexane (disponível em
                        <a href="http://www.anvisa.gov.br/fila/bula/fila.asp?id=4081">www.anvisa.gov.br/fila/bula/fila.asp?id=4081</a>
                        acesso em dezembro de 2018)
                    </p>
                </div>
            ),
        },
        {
            title: "2 Vezes ao Dia",
            content: (
                <div class="text-gray-500">
                    <h1 class="text-center py-4 font-bold text-3xl">2 vezes ao dia</h1>
                    <h2 class="text-center py-4 font-medium text-xl">1 mg/kg/12h</h2>
                    <p class="text-center py-4">
                        1.Kearon C, Antithrombotic therapy for VTE disease: Antithrombotic Therapy and Prevention of Thrombosis, 9th ed: American College of Chest Physicians Evidence-Based Clinical Practice Guidelines. Chest. 2012 Feb;141(2 Suppl):e419S-e496S. doi: 1378/chest.11-2301. ANVISA- Bula Clexane (disponível em
                        <a href="http://www.anvisa.gov.br/fila/bula/fila.asp?id=4081">www.anvisa.gov.br/fila/bula/fila.asp?id=4081</a>
                        acesso em dezembro de 2018)
                    </p>
                </div>
            ),
        },
    ];

    return (
        <Accordion items={accordions} />
    );
}

export default TratamentoTEV;
