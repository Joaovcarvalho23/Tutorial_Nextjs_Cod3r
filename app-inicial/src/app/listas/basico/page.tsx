import TabelaSerieA from "@/components/listas/TabelaSerieA"
import { IconBallFootball } from "@tabler/icons-react"

export default function PaginaListaBasica (){
    const listaTimes = [
"Palmeiras",
"Grêmio",
"Atlético-MG",
"Flamengo",
"Botafogo",
"Bragantino",
"Fluminense",
"Athletico-PR",
"Internacional",
"Fortaleza"
]
    return(
        <div className={`
            flex flex-col justify-center items-center h-screen
        `}>
            <h1 className="flex items-center gap-2 text-5xl font-black">
                <IconBallFootball size={50} stroke={1} className="text-green-700"/>
                Tabela Série A
            </h1>
            <TabelaSerieA times={listaTimes}/>
        </div>
    )
}