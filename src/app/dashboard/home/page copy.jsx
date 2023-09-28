import Titulo from "@/components/Titulo"
import Image from "next/image"
import logo from "@/images/logo.png"


export default async function Home() {
    //mock
    return (
        <>
            <div className="bg-white w-full h-full flex flex-col">
                <div className="justify-center items-center self-stretch flex flex-col pl-[24px] pr-[24px]  ">
                    <div className="w-full h-full flex flex-col ">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch leading-[normal] w-[8%] max-md:w-full ">
                                <nav className="fixed justify-center items-center flex flex-col py-[26px] ">
                                    <div className="justify-center items-center shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)] h-auto self-stretch flex flex-col px-[10px] py-[20px] rounded-[20px]">
                                        <div className="items-center w-full max-w-2xl mt-[-2px]  flex flex-col ml-px mb-[2px]">
                                            <div className=" w-full max-w-[50px] flex flex-col">
                                                <Image
                                                    className="h-full w-full object-cover"
                                                    src={logo}
                                                    alt="logo"
                                                />
                                                <div className="items-center self-stretch flex flex-col mt-[44px] gap-9">
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-black lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></a>

                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-black lucide lucide-heart-pulse"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" /></svg>
                                                    </a>

                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black lucide lucide-pill"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" /><path d="m8.5 8.5 7 7" /></svg>
                                                    </a>

                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
                                                    </a>

                                                    <a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black lucide lucide-user-2"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 1 0-16 0" /></svg>
                                                    </a>



                                                </div>
                                            </div>
                                            <div className="items-center self-stretch flex flex-col mt-[20px] max-md:mt-[20px] pt-8 gap-4">
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
                                                </a>

                                                <label class="switch-container">
                                                    <input type="checkbox" />
                                                    <span class="slider"></span>
                                                </label>



                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <section className="bg-white flex flex-col items-stretch leading-[normal] w-[92%] ml-[20px] max-md:w-full">
                                <div className="items-center flex flex-col mt-[27.5px] py-[37px] rounded-[20px] max-md:mt-[32px]">
                                    <div className="self-stretch flex flex-col -mb-px">
                                        <div className="text-[color:var(--black,#000)] font-medium tracking-[1.9px] text-[34px]  max-md:ml-[10px]">
                                            <span>
                                                Olá{" "}
                                            </span>
                                            <span className="font-bold">
                                                Dr. Marcio
                                            </span>
                                            <span>
                                                , bem-vindo de novo!
                                            </span>
                                        </div>
                                        <div className="self-stretch flex flex-col mt-[32px] pr-[20px]">
                                            <div className="gap-[20px] flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                                <div className="flex flex-col items-stretch leading-[normal] w-[61%] max-md:w-full">
                                                    <div className="items-start flex flex-col pr-px max-md:mt-[32.5px]">
                                                        <div className="items-start self-stretch flex flex-col pt-[24px] pb-[40px] px-[20px]">
                                                            <Titulo>Mensagens</Titulo>
                                                            <div className="flex flex-wrap">
                                                                <div id="cardMenssagem" className="justify-center items-start shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)] w-full max-w-[300px] flex flex-col ml-[20px] mt-[25px]  px-[20px] py-[26px] rounded-[20px] max-md:ml-[10px]">
                                                                    <div className="w-full max-w-[293px] ml-[-3px] self-center flex flex-col mt-px">
                                                                        <h2
                                                                            className="justify-center text-[color:var(--primary\_color,#551786)] not-italic font-bold text-[23px] ml-px max-md:ml-px"
                                                                        >
                                                                            Nathalia Santos
                                                                        </h2>
                                                                        <h3
                                                                            className="text-[color:var(--black,#000)] not-italic font-light text-[15px] mt-[12px]"
                                                                        >
                                                                            Agente Sanofi
                                                                        </h3>
                                                                        <span className="text-[color:var(--black,#000)] text-justify not-italic font-[275] text-[15px] self-stretch mt-[9px]">
                                                                            Lorem Ipsum is simply dummy text of the
                                                                            printing and typesetting industry. Lorem Ipsum
                                                                            has been...
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="items-start w-full max-w-[650px] flex flex-col px-[20px] py-[22px]">
                                                            <Titulo>Notícias</Titulo>
                                                            <div id="cardNoticias" className="items-center shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)] w-full max-w-[300px] flex flex-col ml-[20px] mt-[33px] pt-[20px] pb-[40px] px-[20px] rounded-[20px] max-md:ml-[10px]">
                                                                <img
                                                                    loading="lazy"
                                                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/37747b97-6875-419c-88bf-21af5832022d?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/37747b97-6875-419c-88bf-21af5832022d?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37747b97-6875-419c-88bf-21af5832022d?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/37747b97-6875-419c-88bf-21af5832022d?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/37747b97-6875-419c-88bf-21af5832022d?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37747b97-6875-419c-88bf-21af5832022d?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/37747b97-6875-419c-88bf-21af5832022d?apiKey=39d19bbbb71746dabf0300d8fa0366e5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/37747b97-6875-419c-88bf-21af5832022d?apiKey=39d19bbbb71746dabf0300d8fa0366e5&"
                                                                    className="aspect-[1.54] object-cover object-center w-full max-w-[250px] self-center shrink-0"
                                                                />
                                                                <a
                                                                    href="..."
                                                                    className="text-black not-italic font-bold tracking-[1px] text-[18px] ml-[-0px] self-center text-center mt-[15px]"
                                                                >
                                                                    Lorem Ipsum
                                                                </a>
                                                                <div className="justify-center text-[color:var(--black,#000)] text-center not-italic font-[275] text-[14px] ml-[-0px] self-center mt-[20px] mb-[40px]">
                                                                    Lorem Ipsum is simply dummy text of the printing
                                                                    and typesetting industry. Lorem Ipsum has
                                                                    been...
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-stretch leading-[normal] w-[39%] ">
                                                    <div className="items-center flex flex-col">
                                                        <div className="items-start self-stretch flex flex-col ">
                                                            <div className="w-full items-start flex-col mt-[23px]">
                                                                <Titulo>Atalhos</Titulo>
                                                                <div className="items-start content-start flex-wrap self-stretch flex flex-col pl-[11px] pr-[19px] pt-[11px] pb-[19px]">
                                                                    <div className="self-stretch flex flex-col">
                                                                        <div className="self-stretch flex flex-col">
                                                                            <div className="gap-[20px] flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                                                                <div className="flex flex-wrap items-stretch leading-[normal] gap-4 ">






                                                                                    <a href="#" id="atalhos" className="flex justify-center items-center shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)] px-[20px] py-[40px] rounded-[20px] ">
                                                                                        <div className="w-full self-center flex flex-row gap-2 flex-wrap">
                                                                                            <div
                                                                                                href="..."
                                                                                                className="flex items-center text-black not-italic font-bold text-xl self-center text-center mt-px gap-2"
                                                                                            >
                                                                                                Doenças
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-pulse"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" /></svg>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
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
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
