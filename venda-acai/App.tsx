import { View } from 'react-native';
import { AppRoutes } from './src/routes/AppRoutes';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View
          style={{
            flex: 1,
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AppRoutes />
        </View>
      </PersistGate>
    </Provider>


  );
}