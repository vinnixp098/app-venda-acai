import { Button, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-native";
import { RootState } from "../redux/store";
import Icon from 'react-native-vector-icons/FontAwesome';
import { setNavBar } from "../redux/reducers/AppReducer";
import { AcompanhamentoData } from "../app/data/AcompanhamentoData";

export function ProdutoView() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const produto = useSelector((state: RootState) => state.app.produto);
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
                    // flex: 1,
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,


                }}
            >
                <TouchableOpacity style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    backgroundColor: "purple",
                    justifyContent: "center",
                    alignItems: "center",
                }} onPress={() => {

                    navigate("/HomeView")
                    dispatch(setNavBar(true));
                }}>

                    <Icon name="chevron-left" size={18} color="white" />
                </TouchableOpacity>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "semibold",
                        color: "#000",
                    }}
                >
                    {produto.titulo}
                </Text>


            </View>

            <ScrollView
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 20,
                    width: "100%",

                }}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        width: "100%",
                        height: 280,
                        backgroundColor: "red",
                        borderRadius: 10
                    }}
                >
                    <Image
                        source={produto.url}
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: 'cover',
                            borderRadius: 10
                        }}
                    />
                </View>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 10,
                        // backgroundColor: "blue",
                        alignItems: "center",

                        height: 30

                    }}
                >
                    <Text
                        style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: "semibold",
                            // marginLeft: 10
                        }}
                    >Acompanhamentos</Text>
                    <View
                        style={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "purple",
                            justifyContent: "center",
                            width: 60,
                            height: "100%",
                            borderRadius: 10
                        }}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontSize: 12,
                                fontWeight: "semibold",
                            }}
                        >
                            1 de 3
                        </Text>
                    </View>
                </View>

                <View
                style={{
                    marginTop: 20,
                    paddingLeft: 10,
                    paddingRight:  10,
                    display:  "flex",
                    flexDirection: "column",
                    gap: 10


                }}
                >
                    {AcompanhamentoData.map((acompanhameto) => (
                        <View
                            key={acompanhameto.id}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                height: 50,
                                borderWidth: 1,
                                alignItems:  "center",


                            }}
                        >
                            <View
                             style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 10
                             }}
                             >
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: "black",
                                        fontWeight: "semibold",
                                    }}
                                >
                                    {acompanhameto.titulo}
                                </Text>
                                <View>
                                    <Text>
                                        *  {`R$ ${acompanhameto.preco?.toFixed(2)}`}
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <Text>
                                    {acompanhameto.quantidade}
                                </Text>
                            </View>

                        </View>
                    ))}
                </View>



            </ScrollView>
        </SafeAreaView>
    )
}