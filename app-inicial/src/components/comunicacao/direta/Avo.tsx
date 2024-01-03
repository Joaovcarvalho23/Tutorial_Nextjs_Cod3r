import Pai from "./Pai";

interface AvoProps {
    nome: string
    sobrenome: string
    idade: number
}

export default function Avo (props: AvoProps){
    return (
        <div className={`
            flex flex-col gap-5 p-5 rounded-md items-center
            bg-purple-500 text-white border border-white
        `}>

            Componente do Avô!
            <div className={`
                text-black
                flex justify-center gap-2
                text-2xl
            `}>
                <span className="font font-bold">Avô</span>
                <span>{props.nome} {props.sobrenome} {props.idade} anos</span>
            </div>

            <div className={`
                flex gap-5
            `}>
                <Pai nome="Levi" sobrenome="Cordeiro" idade={49}/>
                <Pai nome="João" sobrenome="Cordeiro" idade={22}/>
                <Pai nome="Pedro" sobrenome="Cordeiro" idade={35}/>
            </div>
        </div>
    )
}