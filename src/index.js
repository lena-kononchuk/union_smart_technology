import React from 'react';
import "./styles/core.scss";
import App from './App';
import {createRoot} from "react-dom/client";
import {Router} from "react-router-dom";



// ReactDOM.render(<App />, document.getElementById('root'));

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
        <App />
);
