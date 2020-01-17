import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import Routes from '../src/routes/Routes'

import store from "./store.js";


function App() {
  return (
    //connects react to redux
    <Provider store={store}>
      <div className="App">
      <Routes />
      </div>
    </Provider>
  );
}

export default App;
