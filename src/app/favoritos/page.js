import Titulo from "@/components/Titulo";
import CardFilme from "@/components/cardFilme";

async function carregarDados() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTkyMjY2NzQ4MWFiMjA3ZDY0MjQ1MGIwZWZiNDYxZSIsInN1YiI6IjVlYTA5ZTZiYmU0YjM2MDAxYzU5NWExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vhu0pPCiIwmtrpyOHdBlQid8HJJllaHthn1MERS_ANg'
        }
    };

    const response = await fetch('https://api.themoviedb.org/3/account/9269654/watchlist/movies?language=pt-br&page=1&sort_by=created_at.asc', options)
    const json = await response.json()
    console.log(json)
    return json.results
}


export default async function Favoritos() {
    //mock

    const filmes = await carregarDados()


    return (
        <>
            <nav className="bg-neutral-950 p-2 flex gap-3 items-end ">
                <h1 className='text-4xl text-zinc-100 font-bold uppercase mx-8'>
                    Fiap Filmes
                </h1>

                <ul>
                    <li>
                        <a className='mx-8' href="/favoritos">Favoritos</a>
                        <a className='mx-8' href="#">Lançamentos</a>
                    </li>
                </ul>
            </nav>
            <Titulo>Favoritos</Titulo>

            <section className="flex gap-2 flex-wrap">
                {filmes.map(filme => <CardFilme filme={filme} />)}
            </section>

        </>
    )
}
