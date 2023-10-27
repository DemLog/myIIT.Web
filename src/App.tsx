import React, {FC} from 'react';

import {RoutesMain} from "@routes/main";

import {RootStore} from "@stores/rootStore";
import {StoreProvider} from "@stores/useStore";

const globalStore = new RootStore();

const App: FC = () => {
    return (
        <StoreProvider store={globalStore}>
            <RoutesMain/>
        </StoreProvider>
    );
}

export default App;
