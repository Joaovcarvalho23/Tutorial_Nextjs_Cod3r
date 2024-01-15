import Produto from "@/model/Produto";

const produtos: Produto[] = [
    {
        id: 1,
        nome: "Camiseta",
        preco: 39.9,
        descricao: "Camiseta preta de algodão",
        imagem: 'https://source.unsplash.com/featured/300x300?tshirt'
    },

    {
        id: 2,
        nome: "Boné",
        preco: 24.9,
        descricao: "Boné preto listrado",
        imagem: 'https://source.unsplash.com/featured/300x300?cap'
    },

    {
        id: 3,
        nome: "Tênis",
        preco: 59.9,
        descricao: "Tênis casual branco",
        imagem: 'https://source.unsplash.com/featured/300x300?sneaker'
    },

    {
        id: 4,
        nome: "Calça Jeans",
        preco: 99.9,
        descricao: "Calça jeans slim preta",
        imagem: 'https://source.unsplash.com/featured/300x300?jeans'
    }
]

export default produtos