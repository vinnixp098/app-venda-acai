import { Produto } from "../interfaces/ProdutoInterface";

export const ProdutosData: Produto[] = [
    {
        id: 1,
        titulo: "Combo Família",
        descricao: "Açaí com banana, morango, granola, leite condensado e cobertura de chocolate. Ideal para compartilhar com a família!",
        preco: 19.99,
        precoAntigo: 22.99,
        url: require('../../../assets/images/combo-familia.jpeg'), 
    },
    {
        id: 2,
        titulo: "Combo Tradicional",
        descricao: "Açaí puro com banana, granola crocante e mel. Uma opção clássica para os amantes do sabor original.",
        preco: 14.99,
        precoAntigo: 17.99,
        url: require('../../../assets/images/combo-tradicional.png'),
    },
    {
        id: 3,
        titulo: "Combo Frutas Vermelhas",
        descricao: "Açaí com mix de frutas vermelhas (morango, amora e framboesa) e granola, para um toque de doçura natural.",
        preco: 15.99,
        precoAntigo: 18.99,
        url: require('../../../assets/images/frutas-vermelhas.jpeg'),
    },
    {
        id: 4,
        titulo: "Combo Clássico",
        descricao: "Açaí com banana, granola, leite em pó e cobertura de leite condensado. Um sabor tradicional para todas as ocasiões.",
        preco: 16.99,
        precoAntigo: 19.99,
        url: require('../../../assets/images/combo-classico.jpg'),
    },
    {
        id: 5,
        titulo: "Combo Energia",
        descricao: "Açaí com banana, aveia, melado de cana e guaraná em pó para dar aquele impulso extra de energia.",
        preco: 17.99,
        precoAntigo: 20.99,
        url: require('../../../assets/images/frutas-vermelhas.jpeg'),
    },
    {
        id: 6,
        titulo: "Combo Fitness",
        descricao: "Açaí com chia, mix de castanhas, granola sem açúcar e frutas frescas para uma opção saudável e equilibrada.",
        preco: 18.99,
        precoAntigo: 21.99,
        url: require('../../../assets/images/combo-classico.jpg'),
    }
];
