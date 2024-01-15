import ProdutoItem from "@/components/listas/ProdutoItem";
import produtos from "@/constants/produtos";

export default function PaginaListaProdutos (){
    const produto = produtos[0]
    return(
        <div className={`
            flex flex-col justify-center items-center h-screen
        `}>
            Produtos
            <ProdutoItem produto={produto}/>
        </div>
    )
}