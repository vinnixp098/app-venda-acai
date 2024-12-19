import { Button, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Icon from 'react-native-vector-icons/FontAwesome';
import { setNavBar } from "../redux/reducers/AppReducer";
import { AcompanhamentoData } from "../app/data/AcompanhamentoData";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"; 

import { RootStackParamList } from "../app/types/types";
import { useNavigation } from "@react-navigation/native";
import React = require("react");

type ProdutoViewNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProdutoView'>;


export function ProdutoView() {
	const navigaion = useNavigation<ProdutoViewNavigationProp>();
	// const dispatch = useDispatch();

	const produto = useSelector((state: RootState) => state.app.produto);
	return (
		<SafeAreaView
			style={{
				// flex: 1,
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				gap: 30,
				// justifyContent: "space-between"
			}}
		>
			<View
				style={{
					// flex: 1,
					width: "100%",
					height: 400,
					display: "flex",
					flexDirection: "column",
					backgroundColor: 'red',
					gap: 20
				}}
			>
				<View
					style={{
						width: "100%",
						// height: 80	,
						flexDirection: "row",
						marginTop: 30,
						// backgroundColor: "red",
						// justifyContent: "flex-start",
						gap: 20,
						alignItems: "center",

						// borderRadius: 10
					}}
				>
					<TouchableOpacity
						style={{
							// position: "absolute",
							// zIndex: 1000,
							marginLeft: 20,
							width: 60,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							borderRadius: 10,
							height: 40,
							backgroundColor: 'purple',
							// marginTop: 20,
						}}
						onPress={() => { navigaion.navigate("HomeView") }}
					>
						<Icon name="chevron-left" size={20} color="white" />
					</TouchableOpacity>
					<Text


					>
						{produto.descricao}
					</Text>
				</View>
				<View
					style={{
						width: "100%",
						height: 260,
						// backgroundColor: "blue",
						alignItems: "center",
					}}
				>
					<Image
						source={produto.url}
						style={{
							width: "90%",
							height: "100%",
							resizeMode: 'cover',
							borderRadius: 10
							// zIndex:  -10

						}}
					/>
				</View>
			</View>

			<ScrollView
				style={{
					width: "100%",
					// backgroundColor: "red",
					// height: "100%",
					flex: 1,
					// padding: 20,
					display: 'flex',
					// justifyContent: 'space-between',

					flexDirection: 'column',
					// paddingBottom: 20,
					paddingTop: 20,

					paddingRight: 20,
					gap: 10
				}}
			>
				<View
					style={{
						paddingLeft: 20,

					}}
				>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 'bold',
							color: 'black',

						}}
					>
						{produto.titulo}
					</Text>
					<Text
						style={{
							fontSize: 14,
							fontWeight: '400',
							color: '#666',

						}}
					>
						{produto.descricao}
					</Text>
					<View>
						<Text>
							Escolha até 3 acompanhamentos.
						</Text>
						<View>
							<Text>1/3</Text> 
						</View>
					</View>
				</View>

				<ScrollView
					style={{
						display: "flex",
						flexDirection: "column",
						// marginBottom: 20
						paddingLeft: 20,
						paddingRight: 20

					}}
					contentContainerStyle={{
						paddingVertical: 10, // Espaçamento no topo e na base
					}}
					showsVerticalScrollIndicator={false}
				>
					{AcompanhamentoData.map((item) => (
						<View
							key={item.id}
							style={{
								marginBottom: 20, // Espaçamento entre cada item
								display: "flex",
								flexDirection: "row",
								backgroundColor: "#f0f0f0",
								height: 50,
								borderRadius: 10,
								padding: 10,
								paddingLeft: 10,
								paddingRight: 10,
								alignItems: "center",


								justifyContent: "space-between",


							}}
						>
							<Text style={{ fontSize: 16, color: 'black' }}>{item.titulo}</Text>
							<Text>
								{item.quantidade}
							</Text>
						</View>
					))}
				</ScrollView>
				<View
					style={{
						backgroundColor: 'red',
						height: 100

					}}
				>
					<Text>

						total
					</Text>
				</View>

			</ScrollView>
		</SafeAreaView>
	)
}