import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux"
import {Provider} from "react-redux"
import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const initialState = {
    dataBase: [],

}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                dataBase: [
                    ...state.dataBase,
                    {
                        text: action.payload,
                        id: Date.now(),
                        checkedField: action.value
                    }]
            }
        case "DELETE_ITEM":
            return{
                ...state,
                dataBase: state.dataBase.filter((item) => item.id !== action.payload)
            }
        default:
            return state
    }
}
const store = createStore(reducer)
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyles/>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
