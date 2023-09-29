import Titulo from "@/components/Titulo"
import Image from "next/image"
import logo from "@/images/logo.png"
import personagem_inicio from "@/images/personagem_inicio.png"
import 'flowbite';



export default async function Home() {
  //mock
  return (
    <>

      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex ml-2 md:mr-24">
            <Image
              src={logo}
              className="w-8 h-8 mr-3"
              alt="Cure Quest Logo" />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-gray-900 dark:text-white">Cure Quest</span>
          </a>
          <div class="flex md:order-2">
            <a href="/login" type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Login</a>
            <a href="/cadastro" type="button" class="text-gray-900 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ">Cadastrar</a>
             
          </div>
    
        </div>
      </nav>







      <div className=" justify-center items-center bg-gray-50 dark:bg-gray-800 flex flex-col self-stretch w-full px-4">
        <div className="flex max-w-full flex-col self-center">
          <div className="items-center justify-center flex max-w-full flex-col h-screen">
            <div className="max-w-full">
              <div className=" justify-center gap-10 flex max-md:flex-col ">
                <div className="flex flex-col justify-center ">
                  <div className="justify-center items-start flex flex-col mt-12 max-md:max-w-full max-md:mt-12">
                    <div
                      className="text-purple-900 font-extrabold text-4xl mr-10 max-md:text-3xl max-md:max-w-full"
                    >
                      <h1 className="text-black">Bem-vindos ao </h1>
                      <h1 className="text-purple-900">
                        Sanofi Cure Quest
                      </h1>
                      <span
                        className="text-black font-medium text-xl mt-4 "
                      >
                        Simplificando a Comunicação entre Profissionais de Saúde e Sanofi
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start mt-4">
                    <a href="/login" class="items-start max-w-full w-[300px] self-center py-4 px-8 text-white text-3xl font-medium rounded-[50px] 
                  overflow-hidden bg-purple-900 transition-all duration-400 ease-in-out shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)] 
                  hover:scale-105 hover:text-black hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full 
                  before:w-full before:h-full before:bg-gradient-to-r before:from-purple-200 before:to-purple-100 
                  before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] 
                  hover:before:left-0  text-center cursor-pointer">
                      Acesse &gt;&gt;
                    </a>

                  </div>


                </div>
                <div className="flex flex-col items-center leading-[normal] w-[30%]">
                  <Image
                    className=" object-cover items-center"
                    src={personagem_inicio}
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="items-center justify-center h-screen flex  flex-col max-md:max-w-full">
            <div className="flex max-w-full flex-row items-center justify-between gap-5 max-md:flex-wrap max-md:max-w-full">
              <div className="justify-center items-center flex flex-col self-center max-md:max-w-full">

                <div class="min-h-screen flex flex-col justify-center items-center">
                  <div class=" sm:max-w-xl sm:mx-auto">

                    <div class="relative text-gray-700 antialiased text-sm font-semibold">


                      <div class="hidden sm:block w-1 bg-purple-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>


                      <div class="mt-6 sm:mt-0 sm:mb-12">
                        <div class="flex flex-col sm:flex-row items-center">
                          <div class="flex justify-start w-full mx-auto items-center">
                            <div class="w-full sm:w-1/2 sm:pr-8">
                              <div class="p-4 bg-white rounded shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)]">
                                <h3 class="font-semibold text-lg mb-1">Comunicação em Tempo Real</h3>
                                <p class="leading-tight text-justify">
                                  Converse instantaneamente com representantes da Sanofi para
                                  obter respostas rápidas.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="rounded-full bg-purple-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-speech text-white"><path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" /><path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" /><path d="M17 15a3.5 3.5 0 0 0-.025-4.975" /></svg>

                          </div>
                        </div>
                      </div>


                      <div class="mt-6 sm:mt-0 sm:mb-12">
                        <div class="flex flex-col sm:flex-row items-center">
                          <div class="flex justify-end w-full mx-auto items-center">
                            <div class="w-full sm:w-1/2 sm:pl-8">
                              <div class="p-4 bg-white rounded shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)]">
                                <h3 class="font-semibold text-lg mb-1">Acesso a Informações Atualizadas</h3>
                                <p class="leading-tight text-justify">
                                  Fique por dentro de produtos, tratamentos e estudos clínicos
                                  com informações em tempo real.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="rounded-full bg-purple-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                          </div>
                        </div>
                      </div>


                      <div class="mt-6 sm:mt-0 sm:mb-12">
                        <div class="flex flex-col sm:flex-row items-center">
                          <div class="flex justify-start w-full mx-auto items-center">
                            <div class="w-full sm:w-1/2 sm:pr-8">
                              <div class="p-4 bg-white rounded shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)]">
                                And I'd like to take a minute, just sit right there,
                              </div>
                            </div>
                          </div>
                          <div class="rounded-full bg-purple-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
