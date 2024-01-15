import Produto from "@/model/Produto"
import Image from "next/image"

interface ProdutoItemProps{
    produto: Produto
}

export default function ProdutoItem (props: ProdutoItemProps) {
    const { produto } = props
    return (
        <div className={`
            flex flex-col rounded-md
            border border-zinc-200
            p-2
            
        `}>
            <Image 
                src={produto.imagem}
                width={300} height={300}
                alt="Imagem do produto"
                className="rounded-md"
            />

            <div className="flex flex-col p-3 gap-3">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-black">{produto.nome}</div>
                    <div className="text-green-500 font-bold">R${produto.preco}</div>
                </div>

                <div>
                    <div className="text-gray-500">{produto.descricao}</div>
                </div>
            </div>

        </div>
    )
}