"use client"
import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {
    const [ativo, setAtivo] = useState<number>(0)

    function alternarVisibilidade(id: number) {
        if(id == ativo){
            setAtivo(-1)
        } else{
            setAtivo(id)
        }
    }
    return (
        <div className="flex flex-col gap-3 w-[90%] md:w-3/4">
            <Pergunta
                id={0}
                aberta={ativo === 0}
                texto="De quem é a famosa frase “Penso, logo existo”?"
                // alternativas=""
                resposta="Descartes"
                alternarVisibilidade={alternarVisibilidade}
            />

            <Pergunta
                id={1}
                aberta={ativo === 1}
                texto="De onde é a invenção do chuveiro elétrico?"
                // alternativas=""
                resposta="Brasil"
                alternarVisibilidade={alternarVisibilidade}
            />

            <Pergunta
                id={2}
                aberta={ativo === 2}
                texto="Quais o menor e o maior país do mundo?"
                // alternativas=""
                resposta="Vaticano e Rússia"
                alternarVisibilidade={alternarVisibilidade}
            />

            <Pergunta
                id={3}
                aberta={ativo === 3}
                texto="Qual o nome do presidente do Brasil que ficou conhecido como Jango?"
                // alternativas=""
                resposta="João Goulart"
                alternarVisibilidade={alternarVisibilidade}
            />
        </div>
    )
}