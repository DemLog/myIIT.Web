import React from "react";
import {DashboardWidgetServicesProps} from "./props";
import classes from "./DashboardWidgetServices.module.css";

import {Box} from "@mantine/core";

import {ServicesBlockGrid} from "@components/Main/ServicesBlock/ServicesBlockGrid";

export const DashboardWidgetServices: React.FC<DashboardWidgetServicesProps> = (props: DashboardWidgetServicesProps) => {
    return (
        <Box className={classes.main_container} py="xs">
            <Box className={classes.content}>
                <ServicesBlockGrid/>
            </Box>
        </Box>
    );
};