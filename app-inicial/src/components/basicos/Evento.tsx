export default function Evento (props:any) {
    let contadorCliques = 0

    function incrementar () {
        console.log(contadorCliques++)
    }

    return (
        <button className={`
            flex justify-center items-center
            h-72 w-72 bg-lime-600
            text-4xl font-thin
        `} onClick={incrementar}>
            {props.children}
        </button>
    )
}