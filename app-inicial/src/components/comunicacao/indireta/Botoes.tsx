interface BotoesProps{
}

export default function Botoes (props: BotoesProps) {
    return (
        <div className="flex justify-between pt-2">
            <button className="botaoInc">
                Incrementar
            </button>
            <button className="botaoDec">
                Decrementar
            </button>
        </div>
    )
}