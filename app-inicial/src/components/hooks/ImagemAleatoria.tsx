"use client"

import Image from "next/image"
import { useState } from "react"

export default function ImagemAleatoria () {
    const url = 'https://source.unsplash.com/featured/'
    //let pesquisa: string = ''
    const [pesquisa, alterarPesquisa] = useState<string>('abstract')
    const [tamanho, alterarTamanho] = useState<number>(300)

    let rederizarBotao = (valor: string) =>{
        return(
            <button className={`
                bg-blue-500 px-4 py-2 rounded-md
            `} onClick={() => {
                alterarPesquisa(valor)
                console.log(valor)
            }}>
                {valor}
            </button>
        )
    }

    return (
        <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-xl">
            <div className="flex justify-center gap-7 mb-5">
                <span>{pesquisa}</span> 
                <span>{tamanho}x{tamanho}</span> 
            </div>
            <Image src={`${url}${tamanho}x${tamanho}?${pesquisa}`} height={200} width={200} alt="Imagem" className="rounded-md" /> {/*dando problema de certificado*/}
            <div className="flex gap-5">
                {rederizarBotao('abstract')}
                {rederizarBotao('city')}
                {rederizarBotao('person')}
            </div>
            <div>
                <input type="number" value={tamanho} 
                className="bg-zinc-800 p-2 rounded-md outline-none w-full" 
                onChange={e => {
                    console.log(e.target.value)
                    alterarTamanho(+e.target.value) //o '+' converte para inteiro, já que inicialmente é uma string
                }}/>
                {/*o fluxo de alteração é unidirecional. Ou seja, é sempre unidirecional no que diz respeito a renderização
                da sua interface. É sempre renderizado. O estado é alterado, ou seja, o valor interno muda, e com essa mudança
                ele altera essa interface*/}
                {/*O valor está completamente amarrado ao estado. Ou seja, o que diz o valor desse campo do input é o estado
                do meu componente. O estado do componente não foi alterado em nenhum momento, pois o 'alterarTamanho' não
                foi chamado em nenhum momento. Isso nos impede de alterar qualquer valor*/}

            </div>
        </div>
    )
}