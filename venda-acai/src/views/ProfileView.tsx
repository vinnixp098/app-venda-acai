import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"; 

import { RootStackParamList } from "../app/types/types";
import { useNavigation } from "@react-navigation/native";
import React from 'react';

type ProfileViewNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProfileView'>;

export function ProfileView(){
    const navigation = useNavigation<ProfileViewNavigationProp>();
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
            <Text onPress={()=>{
                navigation.navigate("HomeView");
            }}>ProfileView</Text>
        </View>
    )
}