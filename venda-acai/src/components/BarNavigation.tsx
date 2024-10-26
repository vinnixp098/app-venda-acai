import { Text, TouchableOpacity, View } from "react-native";
import { useNavigate } from "react-router-native";
import { ImageComponent } from "./ImageComponent";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setRouter } from "../redux/reducers/AppReducer";


export function BarNavigation() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const router = useSelector((state: RootState) => state.app.router);

	return (
		<View
			style={{
				height: 60,
				width: '100%',
				backgroundColor: 'purple',
				borderTopColor: 'gray',
				borderTopWidth: 1,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				paddingLeft: 100,
				paddingRight: 100
			}}
		>
			<TouchableOpacity onPress={() => {
				dispatch(setRouter("/HomeView"));
				navigate("/HomeView")

			}}
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: router == "/HomeView" ? "white" : "purple",
					width:  60,
					height: 50,
					borderRadius: 20,


				}}
			>
				<Icon name="home" size={22} color={router == "/HomeView" ? "purple" : "white"} />
				<Text
					style={{
						fontSize: 10,
						fontWeight: 600,
						color: router == "/HomeView" ? "purple" : "white",
					}}
				>
					Início
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {
				dispatch(setRouter("/CardView"));
				navigate("/CardView")

			}}
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: router == "/CardView" ? "white" : "purple",
					width:  60,
					height: 50,
					borderRadius: 20,
				}}
			>
				<Icon name="shopping-bag" size={22} color={router == "/CardView" ? "purple" : "white"} />
				<Text
					style={{
						fontSize: 10,
						fontWeight: 600,
						color: router == '/CardView' ? 'black' : 'white'
					}}
				>
					Sacola
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {
				dispatch(setRouter("/ProfileView"));
				navigate("/ProfileView")

			}}
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: router == "/ProfileView" ? "white" : "purple",
					width:  60,
					height: 50,
					borderRadius: 20,
				}}
			>
				<Icon name="user" size={22} color={router == "/ProfileView" ? "purple" : "white"} />

				<Text
					style={{
						fontSize: 10,
						fontWeight: 600,
						color: router == '/ProfileView' ? 'purple' : 'white'
					}}
				>
					Perfil
				</Text>
			</TouchableOpacity>
		</View>
	);
}
