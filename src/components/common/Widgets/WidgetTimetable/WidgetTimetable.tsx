import React from "react";
import classes from "./WidgetTimetable.module.css";

import { Widget, Text } from "@components/UI";
import { Box, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import whore from "@assets/images/mother_whore.png";
import { getStyleColor } from "@styles/core/helpers/getStyleColor";

export const WidgetTimetable: React.FC = () => {
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    return (
        <Widget
            title="Расписание"
            rightSection={<Text size="medium" weight="light" color={getStyleColor(matchesMobile ? "text-primary" : "white")}>Вт, 20 ноября</Text>}
            variant="dark"
            backgroundColor={matchesMobile ? "white" : "linear-gradient(180deg, rgba(206,84,84,0.51) 0%, rgba(159,228,46,0.56) 100%)"}
        >
            <Box className={classes.content}>
                <Image src={whore} />
            </Box>
        </Widget>
    )
}