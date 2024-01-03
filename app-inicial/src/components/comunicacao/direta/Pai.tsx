import Filho from "./Filho";

interface PaiProps{
    nome: string
    sobrenome: string
    idade: number
}

export default function Pai (props: PaiProps){
    return (
        <div className={`
            flex flex-col gap-5
            bg-blue-500 text-white border border-white
            rounded-md p-5
        `}>
            Componente do Pai!
            <div className={`
                text-black
                flex justify-center gap-2
                text-xl
            `}>
                <span className="font font-bold">Pai</span>
                <span>{props.nome} {props.sobrenome} {props.idade} anos</span>
            </div>

            <div className={`
                flex gap-5
            `}>
                <Filho nome="Helena" sobrenome="Cordeiro" idade={7}/>
                <Filho nome="Lucas" sobrenome="Cordeiro" idade={11}/>
            </div>
        </div>
    )
}