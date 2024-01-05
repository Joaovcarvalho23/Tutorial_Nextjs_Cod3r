"use client"
import { useState } from "react";
import Botoes from "./Botoes";
import Display from "./Display";

export default function Contador () {
    const [num, setNum] = useState<number>(0)
    
    let incrementar = () => {
        setNum(num + 1)
    }

    let decrementar = () => {
        setNum(num - 1)
    }
    
    return (
        <div className={`
            flex flex-col p-2 border border-red-600 rounded-lg
            w-72 h-72
        `}>
            <Display valor={num} />
            <Botoes inc={incrementar} dec={decrementar}/>
        </div>
    )
}