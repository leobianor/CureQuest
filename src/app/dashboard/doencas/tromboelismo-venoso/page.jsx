"use client"

import CalculadoraMedicamento from "@/components/calculoDose"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidevar"
import 'flowbite'
import EscorePacCirurgico from "@/components/escorePacCirurgico"
import EscorePacClinico from "@/components/escorePacClinico"





export default function Home() {
    //mock
    return (
        <>
            <Navbar />
            <Sidebar />


            <div className="p-4 sm:ml-64 bg-gray-50 dark:bg-gray-900 min-h-screen h-full">
                <div className="px-1 mt-14">
                    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                            <li class="mr-2" role="presentation">
                                <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Cálculo de Dose</button>
                            </li>
                            <li class="mr-2" role="presentation">
                                <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Profilaxia TEV em Pacientes cirúgicos</button>
                            </li>
                            <li class="mr-2" role="presentation">
                                <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Profilaxia TEV em Pacientes clínicos</button>
                            </li>
                            
                        </ul>
                    </div>
                    <div id="myTabContent">
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <CalculadoraMedicamento />
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                            <EscorePacCirurgico />
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                            <EscorePacClinico />
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}
