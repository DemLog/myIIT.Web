import React, { FC } from 'react';

import { RoutesMain } from "@routes/main";

import { RootStore } from "@stores/rootStore";
import { StoreProvider } from "@stores/useStore";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const globalStore = new RootStore();

const App: FC = () => {
    return (
        <StoreProvider store={globalStore}>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <RoutesMain />
        </StoreProvider>
    );
}

export default App;
