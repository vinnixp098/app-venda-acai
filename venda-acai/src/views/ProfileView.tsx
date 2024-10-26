import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useNavigate } from "react-router-native";

export function ProfileView(){
    const navigate = useNavigate();
    return(
        <View
            style={{
                flex: 1,
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Text>ProfileView</Text>
        </View>
    )
}