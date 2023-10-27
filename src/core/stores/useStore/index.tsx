import {createContext, ReactElement} from "react";

import {RootStore} from "@stores/rootStore";
import {StoreComponentType} from "@core/types/store";

export const StoreContext = createContext<RootStore>({} as RootStore);

export const StoreProvider: StoreComponentType = ({
    children,
    store
}): ReactElement => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);