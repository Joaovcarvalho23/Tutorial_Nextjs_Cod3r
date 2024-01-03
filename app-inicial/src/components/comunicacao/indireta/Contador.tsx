import { useState } from "react";
import Botoes from "./Botoes";
import Display from "./Display";

export default function Contador () {
    const [num, setNum] = useState<number>(0)
    
    return (
        <div className={`
            flex flex-col p-2 border border-red-600 rounded-lg
        `}>
            <Display valor={32} />
            <Botoes />
        </div>
    )
}