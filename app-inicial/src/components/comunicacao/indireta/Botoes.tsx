interface BotoesProps{
    inc: () => void
    dec: () => void
}

export default function Botoes (props: BotoesProps) {
    return (
        <div className="flex justify-between pt-2 gap-2">
            <button className="botaoInc flex-1" onClick={props.inc}>
                Incrementar
            </button>
            <button className="botaoDec flex-1" onClick={props.dec}>
                Decrementar
            </button>
        </div>
    )
}