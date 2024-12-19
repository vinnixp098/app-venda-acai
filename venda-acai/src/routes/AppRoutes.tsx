import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { FirstView } from '../views/FirstView';
import { HomeView } from '../views/HomeView';
import { CardView } from '../views/CardView';
import { ProfileView } from '../views/ProfileView';
import { ProdutoView } from '../views/ProdutoView';
import { RootStackParamList } from '../app/types/types';

const Stack = createStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstView">
        <Stack.Screen 
          name="FirstView" 
          component={FirstView} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="HomeView" 
          component={HomeView} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="CardView" 
          component={CardView} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ProfileView" 
          component={ProfileView} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ProdutoView" 
          component={ProdutoView} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
