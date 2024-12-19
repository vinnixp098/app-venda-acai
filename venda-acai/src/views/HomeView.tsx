import { SetStateAction, useState } from "react";
import { SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { InputComponent } from "../components/InputComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from "react-redux";
import { setNavBar, setProduto } from "../redux/reducers/AppReducer";
import { ProdutosData } from "../app/data/ProdutosData";
import { AcaiData } from "../app/data/AcaiData";
import { ImageComponent } from "../components/ImageComponent";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../app/types/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React = require("react");

export function HomeView() {
	type HomeViewNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeView'>;
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedButton, setSelectedButton] = useState<string>("Tudo");

	const [filteredProducts, setFilteredProducts] = useState(ProdutosData);
	const [filteredAcai, setFilteredAcai] = useState(AcaiData);

	const navigation = useNavigation<HomeViewNavigationProp>();
	const dispatch = useDispatch();

	const handleSearch = () => {
		const filtered = ProdutosData.filter(produto =>
			produto.titulo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			produto.descricao?.toLowerCase().includes(searchTerm.toLowerCase())
		);

		const filteredAcai = AcaiData.filter(produto =>
			produto.titulo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			produto.descricao?.toLowerCase().includes(searchTerm.toLowerCase())
		);

		if (selectedButton == "Tudo") {
			setFilteredProducts(filtered);
		} else if (selectedButton == "Açaí") {
			setFilteredAcai(filteredAcai);
		} else {
			setFilteredProducts(filtered);
		}

	};

	return (
		<SafeAreaView
			style={{
				flex: 1,
				width: "100%",
				flexDirection: "column",
				backgroundColor: "#F6F6F6"
			}}
		>
			<View
				style={{
					width: "100%",
					flexDirection: "column",
					justifyContent: "center",
					height: 220,
					backgroundColor: '#A001AB',
					borderBottomLeftRadius: 40,
					borderBottomRightRadius: 40
				}}
			>
				<View
					style={{
						width: "100%",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						height: 60,
						paddingLeft: 20,
						paddingRight: 20
					}}
				>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: 10
						}}
					>
						<Icon name="person" size={30} color={"white"} onPress={() => {
							navigation.navigate("ProfileView")
						}} />
						<Text
							style={{
								width: 180,
								fontSize: 12,
								color: "white",

							}}
						>
							Faça o login e aproveite as promoções
						</Text>
					</View>
					<TouchableOpacity
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-end"
						}}
						onPress={() => {
							// navigate("/CardView")
						}}
					>
						{/* <View style={{
							width: 16,
							height: 16,
							borderRadius: 50,
							backgroundColor: 'white',
							display: 'flex',
							alignItems: "center",
							justifyContent: "center"
						}}>
							<Text
								style={{
									fontSize: 10
								}}
							>
								1
							</Text>
						</View> */}
						<ImageComponent
							img={require('../../assets/images/logo_acai.png')}
							width={55}
							height={55}
						/>
						{/* <Icon name="shopping-bag" size={26} color={"white"} /> */}
					</TouchableOpacity>
				</View>
				<View style={{
					flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "center", paddingLeft: 20,
					paddingRight: 20,
				}}>
					<InputComponent
						placeholder='Buscar'
						label="Digite algo:"
						value={searchTerm}
						placeholderColor="gray"
						onChangeText={(text: SetStateAction<string>) => setSearchTerm(text)}
						style={{
							width: 260,
							height: 50,
							backgroundColor: "white",
							borderBottomLeftRadius: 10,
							borderTopLeftRadius: 10,
							borderColor: "none",
						}}
					/>
					<ButtonComponent
						style={{
							width: 70,
							height: 50,
							borderTopRightRadius: 10,
							borderBottomRightRadius: 10,
							backgroundColor: 'white',
							alignItems: "center",
							justifyContent: "center",
						}}
						onPress={handleSearch}
					>
						<Icon name="search" size={22} color="#A001AB" />
					</ButtonComponent>
				</View>

			</View>
			<View
				style={{
					width: "100%",
					padding: 20,
					// height: "100%"

				}}
			>
				<View
					style={{
						width: "100%",
						display: "flex",
						flexDirection: "row",
						gap: 20,
					}}
				>

					<TouchableOpacity
						onPress={() => setSelectedButton("Tudo")}
						style={{
							width: 100,
							height: 50,
							borderRadius: 10,
							backgroundColor: selectedButton === "Tudo" ? "#A001AB" : "white",
							alignItems: "center",
							justifyContent: "center",
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 2 },
							shadowOpacity: 0.3,
							shadowRadius: 4,
							elevation: 5,
						}}
					>
						<Text
							style={{
								fontSize: 16,
								color: selectedButton === "Tudo" ? "white" : "#6A6A6A",
							}}
						>
							Tudo
						</Text>
					</TouchableOpacity>


					<TouchableOpacity
						onPress={() => setSelectedButton("Açaí")}
						style={{
							width: 100,
							height: 50,
							borderRadius: 10,
							backgroundColor: selectedButton === "Açaí" ? "#A001AB" : "white",
							alignItems: "center",
							justifyContent: "center",
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 2 },
							shadowOpacity: 0.3,
							shadowRadius: 4,
							elevation: 5,
						}}
					>
						<Text
							style={{
								fontSize: 16,
								color: selectedButton === "Açaí" ? "white" : "#6A6A6A",
							}}
						>
							Açaí
						</Text>
					</TouchableOpacity>


					<TouchableOpacity
						onPress={() => setSelectedButton("Combos")}
						style={{
							width: 100,
							height: 50,
							borderRadius: 10,
							backgroundColor: selectedButton === "Combos" ? "#A001AB" : "white",
							alignItems: "center",
							justifyContent: "center",
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 2 },
							shadowOpacity: 0.3,
							shadowRadius: 4,
							elevation: 5,
						}}
					>
						<Text
							style={{
								fontSize: 16,
								color: selectedButton === "Combos" ? "white" : "#6A6A6A",
							}}
						>
							Combos
						</Text>
					</TouchableOpacity>
				</View>

			</View>


			<ScrollView
				style={{
					paddingLeft: 20,
					paddingRight: 20,

				}}
				showsVerticalScrollIndicator={false}
			>
				<ScrollView style={{ marginTop: 10 }} showsVerticalScrollIndicator={false}>
					{selectedButton == "Tudo" && filteredProducts.map((produto) => (
						<TouchableOpacity
							key={produto.id} // Certifique-se de que `id` é único para cada produto
							onPress={() => {
								dispatch(setProduto(produto));
								navigation.navigate("ProdutoView");
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									height: 120,
									shadowColor: "#000",
									shadowOffset: { width: 0, height: 2 },
									shadowOpacity: 0.3,
									shadowRadius: 4,
									borderRadius: 10,

									// elevation: 10,
									marginBottom: 12,
									overflow: 'hidden',
									backgroundColor: '#fff',
									// backgroundColor: "red"
								}}
							>
								<View
									style={{
										width: "30%",
										// height: "70%",
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Image
										source={produto.url}
										style={{
											width: "80%",
											height: "80%",
											borderRadius: 10,

											resizeMode: 'stretch',
										}}
									/>
								</View>

								<View
									style={{
										flex: 1, // ocupa o restante do espaço
										padding: 10,
										// backgroundColor: "red",
										justifyContent: 'space-around',
									}}
								>
									<Text
										style={{
											fontSize: 16,
											color: '#6A6A6A',
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
											// backgroundColor: "blue",
											width: "100%",
											textAlign: 'justify',

											// marginBottom: 6,
										}}
										numberOfLines={2} // garante que a descrição não quebre o layout
									>
										{produto.descricao || "Sem descrição"}
									</Text>
									<View
										style={{
											display: 'flex',
											flexDirection: 'row',
											alignItems: "flex-end",
											gap: 10

										}}
									>
										<Text
											style={{
												fontSize: 14,
												color: 'green',
												fontWeight: '600',
												display: "flex",
												gap: 10
											}}
										>
											{`R$ ${produto.preco?.toFixed(2)}`}
										</Text>
										<Text
											style={{
												fontSize: 12,
												color: 'gray',
												textDecorationStyle: "dashed",
												textDecorationLine: "line-through",
												textDecorationColor: "gray",
												fontWeight: '600',
												display: "flex",
												gap: 10
											}}
										>
											{`R$ ${produto.precoAntigo}`}
										</Text>
									</View>

								</View>
							</View>
						</TouchableOpacity>
					))}
				</ScrollView>
			</ScrollView>
		</SafeAreaView>
	);
}

