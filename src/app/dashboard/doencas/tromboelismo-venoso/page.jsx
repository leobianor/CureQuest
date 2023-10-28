"use client"

import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import 'flowbite'
import CalculadoraMedicamento from "@/components/calculoDose"
import EscorePacCirurgico from "@/components/escorePacCirurgico"
import EscorePacClinico from "@/components/escorePacClinico"
import EscorePacObstetrica from "@/components/EscorePacObstetrica"
import PacEspecial from "@/components/pacEspecial"
import ModalComponent from "@/components/botaoModal"
import TratamentoTEV from "@/components/tratamentoTEV"
import Oncologia from "@/components/oncologia"
import Cardiologia from "@/components/cardiologia"



export default function Home() {
    //mock
    return (
        <>
            <Navbar />
            <Sidebar />


            <div className="p-4 sm:ml-64 bg-gray-50 dark:bg-gray-900 min-h-screen h-full">
                <div className="px-1 mt-16">
                    <div className="flex flex-wrap gap-2 items-center justify-center mb-4">

                        <ModalComponent
                            title="Profilaxia TEV em Pacientes Cirúgicos"
                            content={<EscorePacCirurgico />}
                            id={1}

                        />

                        <ModalComponent
                            title="Profilaxia TEV em Paciente Clinicos"
                            content={<EscorePacClinico />}
                            id={2}
                        />

                        <ModalComponent
                            title="Profilaxia TEV em Paciente Obstetrica"
                            content={<EscorePacObstetrica />}
                            id={3}
                        />

                        <ModalComponent
                            title="Pacientes Especiais"
                            content={<PacEspecial />}
                            id={4}
                        />

                        <ModalComponent
                            title="Tratamento de TEV"
                            content={<TratamentoTEV />}
                            id={5}
                        />

                        <ModalComponent
                            title="Oncologia"
                            content={<Oncologia />}
                            id={6}
                        />

                        <ModalComponent
                            title="Cardiologia"
                            content={<Cardiologia />}
                            id={7}
                        />

                        





                    </div>
                    <CalculadoraMedicamento />
                </div>
            </div>

        </>
    )
}
