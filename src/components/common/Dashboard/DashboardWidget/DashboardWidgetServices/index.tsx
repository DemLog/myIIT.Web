import React, {useState} from "react";
import {DashboardWidgetServicesProps} from "./props";
import classes from "./DashboardWidgetServices.module.css";

import {Box} from "@mantine/core";

import {useStores} from "@core/hooks";
import {observer} from "mobx-react";
import {ServicesBlockGrid} from "@components/Main/ServicesBlock/ServicesBlockGrid";

const DashboardWidgetServicesComponent: React.FC<DashboardWidgetServicesProps> = (props: DashboardWidgetServicesProps) => {
    const {navigationStore} = useStores();
    const [activeLink, setActiveLink] = useState(navigationStore.getActive());

    return (
        <Box className={classes.main_container} py="xs">
            <Box className={classes.content}>
                <ServicesBlockGrid setActive={setActiveLink} />
            </Box>
        </Box>
    );
};

export const DashboardWidgetServices = observer(DashboardWidgetServicesComponent);