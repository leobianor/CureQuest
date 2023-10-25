"use client"

import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidevar"
import 'flowbite'
import CalculadoraMedicamento from "@/components/calculoDose"
import EscorePacCirurgico from "@/components/escorePacCirurgico"
import EscorePacClinico from "@/components/escorePacClinico"
import EscorePacObstetrica from "@/components/EscorePacObstetrica"
import ModalComponent from "@/components/botaoModal"
import PacEspeciais from "@/components/PacEspeciais"





export default function Home() {
    //mock
    return (
        <>
            <Navbar />
            <Sidebar />


            <div className="p-4 sm:ml-64 bg-gray-50 dark:bg-gray-900 min-h-screen h-full">
                <div className="px-1 mt-16">
                    <div className="flex flex-wrap gap-2 items-center justify-center">

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
                            content={<PacEspeciais />}
                            id={4}
                        />





                    </div>
                    <CalculadoraMedicamento />
                </div>
            </div>

        </>
    )
}
