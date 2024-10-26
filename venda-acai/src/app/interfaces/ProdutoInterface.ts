import { ImageSourcePropType } from "react-native";

export interface Produto {
    id?: number;
    titulo?: string;
    descricao?: string;
    preco?: number;
    url?: ImageSourcePropType;
    quantidade?: number;

}