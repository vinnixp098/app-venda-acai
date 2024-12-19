import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setNavBar } from '../redux/reducers/AppReducer';
import { View } from 'react-native';
import { ImageComponent } from '../components/ImageComponent';
import { RootStackParamList } from '../app/types/types';
import React = require('react');

type HomeViewNavigationProp = StackNavigationProp<RootStackParamList, 'HomeView'>;

export function FirstView() {
  const navigation = useNavigation<HomeViewNavigationProp>(); // Tipando a navegação
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavBar(false));

    const timer = setTimeout(() => {
      navigation.navigate('HomeView');
      dispatch(setNavBar(true));
    }, 5000);

    return () => clearTimeout(timer); // Limpeza do timer
  }, [dispatch, navigation]);

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A001AB',
      }}
    >
      <ImageComponent
        img={require('../../assets/images/logo_acai.png')}
        width={90}
        height={90}
      />
    </View>
  );
}
