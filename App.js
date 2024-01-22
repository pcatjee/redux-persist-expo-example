import { View, Text } from "react-native";
import React from "react";
import Home from "./src/screens/Home";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;
