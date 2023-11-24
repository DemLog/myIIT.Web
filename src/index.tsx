import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import reportWebVitals from './reportWebVitals';

import {MantineProvider} from "@mantine/core";
import '@mantine/core/styles.layer.css';
import "./styles/css/normalize.css";

import "./styles/css/main.css";
import {CommonStyles} from "./styles";
import {resolver} from "./styles/common";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <MantineProvider theme={CommonStyles} cssVariablesResolver={resolver}>
            <App/>
        </MantineProvider>
    </React.StrictMode>
);

reportWebVitals();
