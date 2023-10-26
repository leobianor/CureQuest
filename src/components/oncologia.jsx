import React from "react"
import Image from "next/image";


export default function Oncologia() {


    return (
        <div class="container mx-auto pt-4 text-gray-700">
            <h1 className="text-3xl text-center font-bold pb-2">Tratamento</h1>
            <div class="text-xl leading-7 text-justify px-4">
                <p class="">
                    Sugerimos um tratamento agudo e de longo prazo de TEV em pacientes com câncer com HBPM, preferencialmente ao longo de AVK pelo menos 6 meses.¹
                </p>
                <p class="pt-2">
                    Anticoagulação após 6 meses (HBMP ou AVK) pode ser considerada em pacientes selecionados com câncer ativo (doença metastática ou tratamento com quimioterapia).
                </p>
            </div>
            <div class="w-full max-w-6xl">
                <Image src="" class="w-full h-auto object-cover object-fit-cover" />
            </div>
            <div class="my-6">
                <div class="bg-red-600 rounded-ss-xl rounded-se-xl py-2 px-6 mx-64">
                    <h2 class="text-lg font-medium text-center text-white">
                        Pacientes com câncer e tev
                    </h2>
                </div>
                <div class="bg-gray-600 shadow-md rounded-lg py-4 px-6 mx-48">
                    <h2 class="text-lg font-medium text-center text-white">
                        Tratamento na fase aguda e no longo prazo
                    </h2>
                </div>
            </div>
            <div class="my-6">
                <div class="">
                    <h2 class="text-2xl font-semibold text-center ">
                        Enoxaparina
                    </h2>
                </div>
                <h2 class="text-xl font-medium text-center text-gray-600 py-4">
                    1 vez ao dia
                </h2>
                <div class="px-4 text-justify">
                    <p>
                        1.Lyman et al. Venous Thromboembolism Prophylaxis and Treatment in Patients With Cancer: American Society of Clinical Oncology Clinical Practice Guideline Update. J Clin Oncol 2013; 31:2189-2204.
                    </p>
                    <p>
                        2.Deitcher et al.; ONCENOX Investigators. Secondary prevention of venous thromboembolic events in patients with active cancer: ernoxaparin alone versus initial enoxaparin followed by warfarin for a
                        180-day period. Clin Appl Thromb Hemost. 2006;12:389-96.
                    </p>
                    <p>
                        3.Meyer et al. Comparison of low-molecular-weiht heparin and warfarin for the secondary prevention of venous thromboembolism in patients with cancer. Arch Intern Med; 2002;162:1729-1735.
                    </p>

                </div>
            </div>
        </div>

    );
}


