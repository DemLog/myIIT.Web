import {useContext} from "react";

import {RootStore} from "@stores/rootStore";
import {StoreContext} from "@stores/useStore";

export const useStores = (): RootStore => useContext(StoreContext);