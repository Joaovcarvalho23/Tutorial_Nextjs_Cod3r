import Pergunta from "./Pergunta";

export default function Faq() {
    return (
        <div className="flex flex-col gap-3 w-[90%] md:w-3/4">
            <Pergunta 
                texto="De quem é a famosa frase “Penso, logo existo”?"
                alternativas=""
                resposta="Descartes"
            />

            <Pergunta
                texto="De onde é a invenção do chuveiro elétrico?"
                alternativas=""
                resposta="Brasil"
            />

            <Pergunta
                texto="Quais o menor e o maior país do mundo?"
                alternativas=""
                resposta="Vaticano e Rússia"
            />

            <Pergunta
                texto="Qual o nome do presidente do Brasil que ficou conhecido como Jango?"
                alternativas=""
                resposta="João Goulart"
            />
        </div>
    )
}