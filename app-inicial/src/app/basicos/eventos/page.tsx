"use client"
import Evento from "@/components/basicos/Evento";

export default function PaginaEventos () {
    return (
        <div className="flex flex-wrap justify-center items-center gap-5 bg-purple-700 h-screen">
            <Evento>Botão 1</Evento>
            <Evento>Botão 2</Evento>
            <Evento>Botão 3</Evento>
            <Evento>Botão 4</Evento>
        </div>
    )
}