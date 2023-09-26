import Titulo from "@/components/Titulo"
import Image from "next/image"
import logo from "@/images/logo.png"
import personagem_inicio from "@/images/personagem_inicio.png"


export default async function Home() {
  //mock
  return (
    <>
      <nav className="items-start fixed flex max-w-full  flex-col pl-4 max-md:max-w-full bg-white">
        <div className="justify-center items-center z-[1] flex flex-col self-stretch pl-2.5 pr-5 py-3 max-md:max-w-full">
          <div className="flex max-w-full w-[1611px] flex-row items-start justify-between gap-5 max-md:flex-wrap max-md:justify-center max-md:max-w-full">
            <div className="justify-center items-start flex flex-row self-center gap-5 min-w-[300px] pr-5">
              <a
                href="..."
                builder-id="builder-06324398389924779"
                className="flex text-black font-semibold text-3xl grow shrink-0 basis-auto self-center text-center -mt-px"
              >
                <Image
                  className="aspect-auto object-contain object-center w-[39px] max-w-full self-center"
                  src={logo}
                  alt="logo"
                />
                Sanofi MedConnect
              </a>
            </div>
            <div className="justify-between items-start flex max-w-full w-[659px] flex-row self-center gap-5 min-w-[300px] mt-0.5 pr-5 max-md:flex-wrap max-md:justify-center max-md:max-w-full">
            </div>
            <div className="justify-between items-start flex max-w-full w-[226px] flex-row self-center gap-5 min-w-[203px] pr-5 max-md:justify-center">
              <a
                href="..."
                builder-id="builder-8222876377595578"
                className="text-neutral-500 font-normal text-base min-w-[41px] mt-1"
              >
                Login
              </a>
              <a
                href="..."
                builder-id="builder-6951353784116829"
                className="text-neutral-500 font-normal text-base self-center text-center min-w-[82px]"
              >
                Cadastrar
              </a>

            </div>
          </div>
        </div>
      </nav>




      <div className=" justify-center items-center bg-white flex flex-col self-stretch mr-px pb-2.5 px-5 max-md:max-w-full max-md:mr-px">
        <div className="flex max-w-full flex-col self-center">
          <div className="items-center justify-center flex max-w-full flex-col h-screen">
            <div className="max-w-full w-[1370px] my-48 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col justify-center leading-[normal] w-[64%] max-md:w-full ">
                  <div className="justify-center items-start flex flex-col mt-12 max-md:max-w-full max-md:mt-12">
                    <div
                      className="text-purple-900 font-extrabold text-4xl mr-10 max-md:text-3xl max-md:max-w-full"
                    >
                      <h1 className="text-black">Bem-vindos ao </h1>
                      <h1 className="text-purple-900">
                        Sanofi MedConnect
                      </h1>
                      <span
                        className="text-black font-medium text-xl mt-4 "
                      >
                        Simplificando a Comunicação entre Profissionais de Saúde e Sanofi
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start mt-4">
                  <button class="items-start max-w-full w-[300px] self-center py-4 px-8 text-white text-3xl font-medium rounded-[50px] 
                  overflow-hidden bg-purple-900 transition-all duration-400 ease-in-out shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)] 
                  hover:scale-105 hover:text-black hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full 
                  before:w-full before:h-full before:bg-gradient-to-r before:from-purple-200 before:to-purple-100 
                  before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] 
                  hover:before:left-0  text-center cursor-pointer">
                    Acesse &gt;&gt;
                  </button>

                  </div>
            

                </div>
                <div className="flex flex-col items-center leading-[normal] w-[30%] max-md:w-full">
                  <Image
                    className=" object-cover"
                    src={personagem_inicio}
                    alt="logo"
                  />

                </div>
              </div>
            </div>
          </div>
          <div className="items-center flex max-w-full w-[1243px] flex-col ml-12 mt-px py-10 max-md:max-w-full max-md:ml-2.5">
            <div className="flex max-w-full w-[1243px] flex-row items-start self-stretch justify-between gap-5 mt-36 mb-36 max-md:flex-wrap max-md:max-w-full">
              <div className="justify-center items-start flex flex-col self-center min-w-[300px] max-md:max-w-full">
                <div
                  builder-id="builder-5689177454932433"
                  className="text-purple-900 font-extrabold text-5xl max-md:max-w-full"
                >
                  Comunicação em Tempo Real
                </div>
                <div
                  builder-id="builder-15748007046675627"
                  className="text-black font-medium text-2xl mt-3.5 max-md:max-w-full"
                >
                  Converse instantaneamente com representantes da Sanofi para
                  obter respostas rápidas.
                </div>
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/42681ef1-01e3-4ebf-8ebe-227789708234?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/42681ef1-01e3-4ebf-8ebe-227789708234?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/42681ef1-01e3-4ebf-8ebe-227789708234?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/42681ef1-01e3-4ebf-8ebe-227789708234?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/42681ef1-01e3-4ebf-8ebe-227789708234?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/42681ef1-01e3-4ebf-8ebe-227789708234?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/42681ef1-01e3-4ebf-8ebe-227789708234?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/42681ef1-01e3-4ebf-8ebe-227789708234?apiKey=39d19bbbb71746dabf0300d8fa0366e5&"
                className="aspect-[1] object-contain object-center w-[100px] max-w-full self-center min-w-[90px] -mt-px"
              />
            </div>
          </div>
          <div className="items-center flex max-w-full w-[1229px] flex-col mt-0.5 pr-5 py-10 max-md:max-w-full">
            <div className="flex max-w-full w-[1206px] flex-row items-start justify-between gap-5 mt-36 mb-36 max-md:flex-wrap max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/23f34395-3509-423e-922b-0bfda9b64307?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/23f34395-3509-423e-922b-0bfda9b64307?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/23f34395-3509-423e-922b-0bfda9b64307?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/23f34395-3509-423e-922b-0bfda9b64307?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/23f34395-3509-423e-922b-0bfda9b64307?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/23f34395-3509-423e-922b-0bfda9b64307?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/23f34395-3509-423e-922b-0bfda9b64307?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/23f34395-3509-423e-922b-0bfda9b64307?apiKey=39d19bbbb71746dabf0300d8fa0366e5&"
                className="aspect-[0.72] object-contain object-center w-[72px] max-w-full self-center min-w-[65px] -mt-px"
              />
              <div className="justify-center items-start flex flex-col self-center min-w-[300px] max-md:max-w-full">
                <div
                  builder-id="builder-12531495529029058"
                  className="text-purple-900 font-extrabold text-5xl max-md:max-w-full"
                >
                  Acesso a Informações Atualizadas
                </div>
                <div
                  builder-id="builder-9841000677461953"
                  className="text-black font-medium text-2xl mt-3.5 max-md:max-w-full"
                >
                  Fique por dentro de produtos, tratamentos e estudos clínicos
                  com informações em tempo real.
                </div>
              </div>
            </div>
          </div>
          <div className="items-center flex max-w-full w-[1239px] flex-col ml-12 mt-0.5 py-10 max-md:max-w-full max-md:ml-2.5">
            <div className="flex max-w-full w-[1239px] flex-row items-start self-stretch justify-between gap-5 mt-28 mb-32 max-md:flex-wrap max-md:max-w-full">
              <div className="justify-center items-start flex flex-col self-center min-w-[300px] max-md:max-w-full">
                <div
                  builder-id="builder-9485913166726689"
                  className="text-purple-900 font-extrabold text-5xl max-md:max-w-full"
                >
                  Agendamento de Reuniões Virtuais
                </div>
                <div
                  builder-id="builder-8149188837255597"
                  className="text-black font-medium text-2xl mt-6 max-md:max-w-full"
                >
                  Agende reuniões virtuais com nossos especialistas para
                  discussões detalhadas.
                </div>
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5cd07c85-2475-4f80-b70d-de7db75b85e6?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cd07c85-2475-4f80-b70d-de7db75b85e6?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cd07c85-2475-4f80-b70d-de7db75b85e6?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cd07c85-2475-4f80-b70d-de7db75b85e6?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cd07c85-2475-4f80-b70d-de7db75b85e6?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cd07c85-2475-4f80-b70d-de7db75b85e6?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cd07c85-2475-4f80-b70d-de7db75b85e6?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cd07c85-2475-4f80-b70d-de7db75b85e6?apiKey=39d19bbbb71746dabf0300d8fa0366e5&"
                className="aspect-[0.92] object-contain object-center w-[90px] max-w-full self-center min-w-[81px] mt-0.5"
              />
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3051ae6b-a617-458d-b09c-7bdf4e93a23a?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3051ae6b-a617-458d-b09c-7bdf4e93a23a?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3051ae6b-a617-458d-b09c-7bdf4e93a23a?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3051ae6b-a617-458d-b09c-7bdf4e93a23a?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3051ae6b-a617-458d-b09c-7bdf4e93a23a?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3051ae6b-a617-458d-b09c-7bdf4e93a23a?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3051ae6b-a617-458d-b09c-7bdf4e93a23a?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3051ae6b-a617-458d-b09c-7bdf4e93a23a?apiKey=39d19bbbb71746dabf0300d8fa0366e5&"
            className="aspect-[1.65] object-contain object-center w-[1152px] max-w-full self-center ml-6 mt-3 max-md:max-w-full"
          />
        </div>
      </div>
      <div className="items-start flex flex-col self-stretch max-md:max-w-full">
        <div className="bg-white flex max-w-full w-[1668px] flex-col min-h-[1px] max-md:max-w-full" />
        <div className="items-start bg-black flex max-w-full w-[1671px] flex-col px-5 py-10 max-md:max-w-full">
          <div className="flex max-w-full w-[1018px] flex-col self-center -ml-1.5 mt-3 mb-3.5 max-md:max-w-full">
            <a
              href="..."
              builder-id="builder-6903154410602521"
              className="text-white font-normal text-xs"
            >
              ÁREAS DA SAÚDE
            </a>
            <div className="flex max-w-full w-[1017px] flex-row items-start justify-between gap-5 mt-12 max-md:flex-wrap max-md:justify-center max-md:max-w-full">
              <div className="items-start flex flex-col self-stretch min-w-[173px]">
                <a
                  href="..."
                  builder-id="builder-45473202712859173"
                  className="text-white font-normal text-base"
                >
                  Câncer e Tumores
                </a>
                <div
                  builder-id="builder-2190072701869219"
                  className="text-white font-normal text-base mt-5"
                >
                  Doenças Cardiovascular
                </div>
              </div>
              <div className="items-start flex flex-col self-stretch min-w-[145px]">
                <a
                  href="..."
                  builder-id="builder-36176987993291343"
                  className="text-white font-normal text-base"
                >
                  Doenças do Sangue
                </a>
                <a
                  href="..."
                  builder-id="builder-5328227305023103"
                  className="text-white font-normal text-base mt-4"
                >
                  Doenças Endócrinas
                </a>
              </div>
              <div className="items-start flex flex-col self-stretch min-w-[148px]">
                <a
                  href="..."
                  builder-id="builder-5390154831296419"
                  className="text-white font-normal text-base"
                >
                  Doenças Preveníveis
                </a>
                <a
                  href="..."
                  builder-id="builder-8282385787065905"
                  className="text-white font-normal text-base mt-4"
                >
                  Doenças Raras
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center bg-black flex flex-col self-stretch pl-0.5 pr-1 pt-10 max-md:max-w-full">
          <div className="flex flex-col self-stretch mt-4 max-md:max-w-full">
            <div className="min-w-[1280px] items-start flex max-w-full w-[1067px] ml-0 flex-row self-center justify-between gap-5 pr-5 py-2 max-md:flex-wrap max-md:max-w-full">
              <div className="items-start flex flex-col min-w-[275px] mt-2.5">
                <div
                  builder-id="builder-5342133041084371"
                  className="text-white font-normal text-sm"
                >
                  Sanofi 2022 - Todos os direitos reservados
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b72379a2-e1e9-471f-b83e-46e0612e83e1?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b72379a2-e1e9-471f-b83e-46e0612e83e1?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b72379a2-e1e9-471f-b83e-46e0612e83e1?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b72379a2-e1e9-471f-b83e-46e0612e83e1?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b72379a2-e1e9-471f-b83e-46e0612e83e1?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b72379a2-e1e9-471f-b83e-46e0612e83e1?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b72379a2-e1e9-471f-b83e-46e0612e83e1?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b72379a2-e1e9-471f-b83e-46e0612e83e1?apiKey=39d19bbbb71746dabf0300d8fa0366e5&"
                  className="aspect-[3.93] object-contain object-center w-[110px] max-w-full mt-2.5"
                />
              </div>
              <div className="items-start flex flex-row gap-4 min-w-[104px] pr-5">
                <div className="justify-center items-center border flex flex-col self-stretch p-3.5 rounded-full border-solid border-white">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6de5676b-781e-4831-bd17-332b0280ed61?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6de5676b-781e-4831-bd17-332b0280ed61?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6de5676b-781e-4831-bd17-332b0280ed61?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6de5676b-781e-4831-bd17-332b0280ed61?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6de5676b-781e-4831-bd17-332b0280ed61?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6de5676b-781e-4831-bd17-332b0280ed61?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6de5676b-781e-4831-bd17-332b0280ed61?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6de5676b-781e-4831-bd17-332b0280ed61?apiKey=39d19bbbb71746dabf0300d8fa0366e5&"
                    className="aspect-[1] object-contain object-center w-6 max-w-full self-stretch"
                  />
                </div>
                <div className="justify-center items-center border flex flex-col self-stretch p-3.5 rounded-full border-solid border-white">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d3ba61d6-884d-4960-9621-0954394a33b3?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3ba61d6-884d-4960-9621-0954394a33b3?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3ba61d6-884d-4960-9621-0954394a33b3?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3ba61d6-884d-4960-9621-0954394a33b3?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3ba61d6-884d-4960-9621-0954394a33b3?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3ba61d6-884d-4960-9621-0954394a33b3?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3ba61d6-884d-4960-9621-0954394a33b3?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3ba61d6-884d-4960-9621-0954394a33b3?apiKey=39d19bbbb71746dabf0300d8fa0366e5&"
                    className="aspect-[1] object-contain object-center w-6 max-w-full self-stretch"
                  />
                </div>
              </div>
            </div>
            <div className="items-start bg-black flex max-w-full w-[1666px] flex-col self-center mt-14 px-5 py-5 max-md:max-w-full">
              <div className="items-start content-start flex-wrap flex max-w-full w-[749px] ml-0 flex-row self-center justify-between gap-5 -mb-px pr-5 max-md:flex-wrap max-md:justify-center max-md:max-w-full max-md:mb-2.5">
                <a
                  href="..."
                  builder-id="builder-25708739104924105"
                  className="text-white font-normal text-sm min-w-[92px] mt-px"
                >
                  Sobre a Sanofi
                </a>
                <a
                  href="..."
                  builder-id="builder-003507879604834674"
                  className="text-white font-normal text-sm min-w-[85px] mt-px"
                >
                  Fale Conosco
                </a>
                <a
                  href="..."
                  builder-id="builder-37128294921757554"
                  className="text-white font-normal text-sm min-w-[95px] mt-0.5"
                >
                  Menções Legais
                </a>
                <div
                  builder-id="builder-09731665579615711"
                  className="text-white font-normal text-sm min-w-[143px]"
                >
                  Política de Privacidade
                </div>
                <a
                  href="..."
                  builder-id="builder-47387447891046874"
                  className="text-white font-normal text-sm min-w-[130px] mt-px"
                >
                  Termos e Condições
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
