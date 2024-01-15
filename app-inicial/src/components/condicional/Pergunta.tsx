"use client"
import { useState } from "react"
import If from "./If"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"
//import IfElse from "./IfElse"

interface PerguntaProps {
    id: number
    texto: string
    //alternativas: string
    resposta: string
    aberta: boolean
    alternarVisibilidade: (id: number) => void
}

export default function Pergunta(props: PerguntaProps){
    return (
        <div className={`
            border border-white rounded-md
            overflow-hidden
        `}>
            <div 
                className="bg-zinc-700 p-5 cursor-pointer select-none flex justify-between"
                onClick={() => props.alternarVisibilidade(props.id)}
            >
                <span>
                    {props.texto}
                    {/* {props.alternativas} */}
                </span>
                {props.aberta? <IconChevronUp /> : <IconChevronDown />}
                {/* Outra forma que também funciona!!!
                <IfElse teste={aberta}>
                    <IconChevronUp />
                    <IconChevronDown />
                </IfElse> */}
                
            </div>
            {/*{aberta? "Sim" : "Não"}*/}
            {/*{aberta && "Pergunta aberta"}*/}
            {/*{aberta && (
                <div className="bg-green-600 p-5">
                    {props.resposta}
                </div>
            )}*/}

            <If teste={props.aberta}>
                <div className="bg-green-600 p-5">
                    {props.resposta}
                </div>
            </If>
        </div>
    )
}