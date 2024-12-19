import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"; 

import { RootStackParamList } from "../app/types/types";
import React = require("react");

type CardViewNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CardView'>;

export function CardView() {
    const navigation = useNavigation<CardViewNavigationProp>(); 

    return (
        <View
            style={{
                flex: 1,
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text
                onPress={() => {
                    navigation.navigate("HomeView");
                }}
            >
                CardView
            </Text>
        </View>
    );
}
