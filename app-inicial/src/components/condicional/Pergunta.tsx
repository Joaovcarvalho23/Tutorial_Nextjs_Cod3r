"use client"
import { useState } from "react"
import If from "./If"

interface PerguntaProps {
    texto: string
    alternativas: string
    resposta: string
}

export default function Pergunta(props: PerguntaProps){
    const [aberta, setAberta] = useState<boolean>(false)

    return (
        <div className={`
            border border-white rounded-md
            overflow-hidden
        `}>
            <div 
                className="bg-zinc-700 p-5 cursor-pointer select-none"
                onClick={() => setAberta(!aberta)}
            >
                {props.texto}
                {props.alternativas}
            </div>
            {/*{aberta? "Sim" : "Não"}*/}
            {/*{aberta && "Pergunta aberta"}*/}
            {/*{aberta && (
                <div className="bg-green-600 p-5">
                    {props.resposta}
                </div>
            )}*/}

            <If teste={aberta}>
                <div className="bg-green-600 p-5">
                    {props.resposta}
                </div>
            </If>
        </div>
    )
}