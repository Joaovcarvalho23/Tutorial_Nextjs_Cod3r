import Avo from "@/components/comunicacao/direta/Avo";

export default function PaginaComunicacaoDireta () {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-5xl mb-10">Página principal de Comunicação Direta</h1>
            <Avo nome="Nildo" sobrenome="Cordeiro" idade={81}/>
        </div>
    )
}