interface FilhoProps{
    nome: string
    sobrenome: string
    idade: number
}

export default function Filho (props: FilhoProps){
    return (
        <div className={`
            flex justify-center items-center
            bg-red-600 rounded-md p-5 border border-white
        `}>
            Componente do Filho!

            <div className={`
                text-black
                flex justify-center gap-2
                text-xl
            `}>
                <h6>
                    <span className="font font-bold">Filho</span>
                </h6>
                <span>{props.nome} {props.sobrenome} {props.idade} anos</span>
            </div>
        </div>
    )
}