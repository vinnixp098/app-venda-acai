import { AppRoutes } from './src/routes/AppRoutes';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <AppRoutes />
      </PersistGate>
    </Provider>
  );
}