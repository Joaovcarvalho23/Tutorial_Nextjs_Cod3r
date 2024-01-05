interface DisplayProps{
    valor: number
}

export default function Display (props: DisplayProps) {
    return (
        <div className={`
            text-5xl font-black
            bg-zinc-600 rounded-md
            p-7 flex justify-center items-center
            flex-1
        `}>
            {props.valor}
        </div>
    )
}