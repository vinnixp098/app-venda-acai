import React from 'react';
import { NativeRouter, Route, Routes, useNavigate } from 'react-router-native';
import { FirstView } from '../views/FirstView';
import { HomeView } from '../views/HomeView';
import { BarNavigation } from '../components/BarNavigation';
import { CardView } from '../views/CardView';
import { ProfileView } from '../views/ProfileView';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setNavBar } from '../redux/reducers/AppReducer';
import { ProdutoView } from '../views/ProdutoView';

export const AppRoutes = () => {
    const navBar = useSelector((state: RootState) => state.app.navBar);
    const router = useSelector((state: RootState) => state.app.router);

    console.log("router:  ", router);


    return (
        <NativeRouter>
            <Routes>
                <Route path="/" element={<FirstView />} />
                <Route path="/HomeView" element={<HomeView />} />
                <Route path="/CardView" element={<CardView />} />
                <Route path="/ProfileView" element={<ProfileView />} />
                <Route path="/ProdutoView" element={<ProdutoView/>}/>
            </Routes>
            {navBar && <BarNavigation/>}
        </NativeRouter>
    );
}