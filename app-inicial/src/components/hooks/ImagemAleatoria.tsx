export default function ImagemAleatoria () {

    let rederizarBotao = () =>{
        return(
            <button className={`
                bg-blue-500 px-4 py-2 rounded-md
            `}>
                Teste
            </button>
        )
    }

    return (
        <div>
            {rederizarBotao()}
        </div>
    )
}