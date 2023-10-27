import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import reportWebVitals from './reportWebVitals';

import {MantineProvider} from "@mantine/core";
import {CommonStyles} from "./styles";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <MantineProvider withNormalizeCSS withGlobalStyles theme={CommonStyles}>
            <App/>
        </MantineProvider>
    </React.StrictMode>
);

reportWebVitals();
