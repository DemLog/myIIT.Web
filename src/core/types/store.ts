import React, {ReactNode} from "react";

import {RootStore} from "@stores/rootStore";

export type StoreComponentType = React.FC<{ store: RootStore; children: ReactNode }>;