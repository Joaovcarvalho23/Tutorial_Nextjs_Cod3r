import Circulos from "@/components/basicos/Circulos";

export default function PaginaCirculos () {
    return (
        <div className="flex justify-around items-center h-96 bg-red-600">
            <Circulos textoCirculo="Circulo 1"/>
            <Circulos textoCirculo="Circulo 2" quasePerfeito={true}/>
            <Circulos textoCirculo="Circulo 3" quasePerfeito={false}/>
            <Circulos textoCirculo="Circulo 4" quasePerfeito/>
            {/*<Circulos />*/} {/*Não vai funcionar pois na props do componente Circulo precisa passar um textoCirculo!!*/}
        </div>
    )
}