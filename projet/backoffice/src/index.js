import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { DarkModeContextProvider } from "./context/darkModeContext";
import store from "./ContextApi/store/ReduxStore.js"
import {BrowserRouter, Routes , Route} from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    
    <React.StrictMode>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </React.StrictMode>
  
  </Provider>,
  document.getElementById("root")
);
