import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigate } from "react-router-native";
import { InputComponent } from "../components/InputComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from "react-redux";
import { Produto } from "../app/interfaces/ProdutoInterface";
import { setNavBar, setProduto } from "../redux/reducers/AppReducer";
import { ProdutosData } from "../app/data/ProdutosData";

export function HomeView() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(ProdutosData);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSearch = () => {
        const filtered = ProdutosData.filter(produto =>
            produto.titulo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            produto.descricao?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                width: "100%",
                flexDirection: "column",
                paddingTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 20,
            }}
        >

            <View
                style={{
                    width: "100%",
                    flexDirection:  "row",
                    justifyContent:  "center"
                }}
            >
                <Image
                    source={require("../../assets/images/logo_acai.png")}
                    style={{
                        width: 90,
                        height: 90,
                        // resizeMode: 'cover',
                    }}
                />
            </View>

            <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center", width: "100%", justifyContent: "center" }}>
                <InputComponent
                    placeholder='Search'
                    label="Digite algo:"
                    value={searchTerm}
                    onChangeText={text => setSearchTerm(text)}
                    style={{
                        width: 300,
                        height: 50,
                        borderBottomLeftRadius: 10,
                        borderTopLeftRadius: 10,
                        borderColor: "purple",
                    }}
                />
                <ButtonComponent
                    style={{
                        width: 80,
                        height: 50,
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                        backgroundColor: 'purple',
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onPress={handleSearch}
                >
                    <Icon name="search" size={22} color="white" />
                </ButtonComponent>
            </View>

            <ScrollView
                style={{ marginTop: 20 }}
                showsVerticalScrollIndicator={false}
            >
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
                    Combos
                </Text>
                <ScrollView style={{ marginTop: 10 }} showsVerticalScrollIndicator={false}>
                    {filteredProducts.map((produto) => (
                        <TouchableOpacity
                            onPress={() => {
                                dispatch(setProduto(produto));
                                navigate("/ProdutoView");
                                dispatch(setNavBar(false));
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    height: 120,
                                    borderWidth: 1,
                                    borderColor: "#d1d1d1",
                                    borderRadius: 10,
                                    marginBottom: 12,
                                    overflow: 'hidden',
                                    backgroundColor: '#fff',
                                    elevation: 2, // adiciona uma leve sombra para destacar o componente
                                }}
                            >
                                <View
                                    style={{
                                        width: "25%",
                                        borderRightWidth: 1,
                                        borderRightColor: "#d1d1d1",
                                    }}
                                >
                                    <Image
                                        source={produto.url}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            resizeMode: 'cover',
                                        }}
                                    />
                                </View>

                                <View
                                    style={{
                                        flex: 1, // ocupa o restante do espaço
                                        padding: 10,
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            color: '#333',
                                            fontWeight: 'bold',
                                            marginBottom: 4, // espaçamento entre o título e a descrição
                                        }}
                                    >
                                        {produto.titulo || "Sem título"}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            color: '#555',
                                            marginBottom: 6, // espaçamento entre a descrição e o preço
                                        }}
                                        numberOfLines={2} // garante que a descrição não quebre o layout
                                    >
                                        {produto.descricao || "Sem descrição"}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            color: '#000',
                                            fontWeight: '600',
                                        }}
                                    >
                                        {`R$ ${produto.preco?.toFixed(2)}`}
                                    </Text>
                                </View>
                            </View>

                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
}

