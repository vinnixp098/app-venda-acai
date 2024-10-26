import { useEffect } from "react";
import { Text, View } from "react-native";
import { useNavigate } from "react-router-native";
import { ImageComponent } from "../components/ImageComponent";
import { useDispatch } from "react-redux";
import { setNavBar, setRouter } from "../redux/reducers/AppReducer";

export function FirstView() {
    const navigate = useNavigate();
    const dispatch  = useDispatch();

    dispatch(setNavBar(false));

    useEffect(() => {
        const timer = setTimeout(() => {
            setRouter("/HomeView");
            navigate('/HomeView');
            dispatch(setNavBar(true));
        }, 5000);
    }, [])

    return (
        <View
            style={{
                flex: 1,
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: 'purple'
            }}
        >
            <ImageComponent
                img={require('../../assets/images/logo_acai.png')}
                width={90}
                height={90} 
            />
        </View>
    )
}