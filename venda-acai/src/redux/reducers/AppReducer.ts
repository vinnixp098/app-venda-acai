import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Produto } from "../../app/interfaces/ProdutoInterface";

interface AppState {
  navBar: boolean;
  router: string;
  produto: Produto

}

const initialState: AppState = {
  navBar: false,
  router: '/',
  produto: {
    id: 0,
    descricao: "",
    preco: 0,
    quantidade: 0,
    titulo: "",
    url: undefined
  }
};

const authSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setNavBar(state, action: PayloadAction<boolean>) {
      state.navBar = action.payload;
    },
    setRouter(state, action: PayloadAction<string>) {
      state.router = action.payload;
    },
    resetRouter(state) {
      state.router = '/'
    },
    setProduto(state, action: PayloadAction<Produto>) {
      state.produto = action.payload;
    },
    resetProduto(state) {
      state.produto = {
        id: 0,
        descricao: "",
        preco: 0,
        quantidade: 0,
        titulo: "",
        url: undefined
      }
    }
  },
});

export const { setNavBar, setRouter, resetRouter,  setProduto, resetProduto } = authSlice.actions;



export default authSlice.reducer;