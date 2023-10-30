
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
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-gray-900 dark:text-gray-100 max-lg:text-sm">Cure Quest</span>
          </a>
          <div class="flex md:order-2 gap-2">
            <a href="/login" type="button" class="text-gray-100 bg-purple-800 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Login</a>
            <a href="/cadastro" type="button" class="text-gray-900 dark:text-gray-100 font-medium rounded-lg text-sm px-1 py-2 text-center md:mr-0 ">Cadastrar</a>
          </div>

        </div>
      </nav>







      <div className=" justify-center items-center bg-gray-50 dark:bg-gray-800 flex flex-col self-stretch w-full px-4 max-lg:text-center pt-6">
        <div className="flex max-w-full flex-col self-center">
          <div className="items-center justify-center flex max-w-full flex-col h-screen min">
            <div className="max-w-full max-lg:px-6">
              <div className=" justify-center gap-10 flex max-md:flex-col ">
                <div className="flex flex-col justify-center ">
                  <div className="justify-center max-xl:items-center items-start flex flex-col mt-12 max-md:max-w-full max-md:mt-12">
                    <div className=" font-extrabold text-4xl max-xl:mr-0 mr-10 max-md:text-3xl max-md:max-w-full">
                      <h1 className="text-gray-900 dark:text-gray-100">Bem-vindos ao </h1>
                      <h1 className="text-purple-900">
                        Sanofi Cure Quest
                      </h1>
                      <span
                        className="text-gray-900 dark:text-gray-100 font-medium text-xl mt-4 "
                      >
                        Simplificando a Comunicação entre Profissionais de Saúde e Sanofi
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start max-lg:justify-center mt-4">
                    <a href="/login" class="custom-button">
                      <span className="text-gray-100">ACESSE</span>
                      <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="37" cy="37" r="35.5" stroke="white" stroke-width="3"></circle>
                        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="white"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center leading-[normal] w-[30%] max-sm:hidden">
                  <Image
                    className=" object-cover items-center justify-center"
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

                    <div class="relative text-gray-900 dark:text-gray-100 antialiased text-sm font-semibold">
                      <div class="hidden sm:block w-1 bg-purple-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>
                      <div class="mt-6 sm:mt-0 sm:mb-12">
                        <div class="flex flex-col sm:flex-row items-center">
                          <div class="flex justify-start w-full mx-auto items-center">
                            <div class="w-full sm:w-1/2 sm:pr-8">
                              <div class="p-4 bg-white dark:bg-slate-700 rounded shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)] text-center">
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
                              <div class="p-4 bg-white dark:bg-slate-700 rounded shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)] text-center">
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


                      <div class="mt-6 mb-6 sm:mt-0 sm:mb-12">
                        <div class="flex flex-col sm:flex-row items-center">
                          <div class="flex justify-start w-full mx-auto items-center">
                            <div class="w-full sm:w-1/2 sm:pr-8">
                              <div class="p-4 bg-white dark:bg-slate-700 rounded shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)] text-center">
                                <h3 class="font-semibold text-lg mb-1 ">Uma plataforma simples e aconchegante</h3>
                                <p class="leading-tight ">
                                  Tenha tudo em um click, seja no seu computador ou na palma da sua mão
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="rounded-full bg-purple-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
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


      <footer class="bg-white  shadow dark:bg-gray-900">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
              <Image
                src={logo}
                className="w-8 h-8 mr-3"
                alt="Cure Quest Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-100">Cure Quest</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" class="hover:underline">Grupo GNZ™</a>. All Rights Reserved.</span>
        </div>
      </footer>




    </>
  )
}
