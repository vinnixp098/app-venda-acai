import { Produto } from "../interfaces/ProdutoInterface";

export const AcaiData: Produto[] = [
    {
        id: 1,
        titulo: "Açaí Família 1L",
        descricao: "Açaí, banana, morango, granola, leite condensado, cobertura de chocolate",
        preco: 29.99,
        precoAntigo: "34.99",
        url: require('../../../assets/images/combo-familia.jpeg'), 
    },
    {
        id: 2,
        titulo: "Açaí Tradicional 500ml",
        descricao: "Açaí puro, banana, granola crocante, mel",
        preco: 15.99,
        precoAntigo: 18.99,
        url: require('../../../assets/images/combo-tradicional.png'),
    },
    {
        id: 3,
        titulo: "Açaí Frutas Vermelhas 700ml",
        descricao: "Açaí, morango, amora, framboesa, granola",
        preco: 24.99,
        precoAntigo: 28.99,
        url: require('../../../assets/images/frutas-vermelhas.jpeg'),
    },
    {
        id: 4,
        titulo: "Açaí Clássico 1L",
        descricao: "Açaí, banana, granola, leite em pó, cobertura de leite condensado",
        preco: 27.99,
        precoAntigo: 32.99,
        url: require('../../../assets/images/combo-classico.jpg'),
    },
    {
        id: 5,
        titulo: "Açaí Energia 600ml",
        descricao: "Açaí, banana, aveia, melado de cana, guaraná em pó",
        preco: 21.99,
        precoAntigo: "25.99",
        url: require('../../../assets/images/frutas-vermelhas.jpeg'),
    },
    {
        id: 6,
        titulo: "Açaí Fitness 500ml",
        descricao: "Açaí, chia, mix de castanhas, granola sem açúcar, frutas frescas",
        preco: 19.99,
        precoAntigo: 23.99,
        url: require('../../../assets/images/combo-classico.jpg'),
    }
];
