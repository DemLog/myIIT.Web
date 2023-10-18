import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {MantineProvider, MantineThemeOverride, PaperStylesParams} from "@mantine/core";

const globalStyleComponents: MantineThemeOverride = {
    globalStyles: (theme) => ({
        body: {
            backgroundColor: theme.colorScheme === 'light' ? "#F7F7F7" : "#141414",
            overflowY: "hidden"
        },
    }),
    components: {
        Paper: {
            styles: (theme, params: PaperStylesParams, {variant}) => ({
                root: {
                    backgroundColor: theme.colorScheme === 'light' ? "#FFF" : "#222"
                }
            })
        }
    }
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <MantineProvider withNormalizeCSS withGlobalStyles theme={{colorScheme: "light", ...globalStyleComponents}}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </MantineProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
