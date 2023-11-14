import React from "react";
import {NamePageBlockProps} from "./props";
import classes from "./NamePageBlock.module.css";

import {Box, Image, Title} from "@mantine/core";

export const NamePageBlock: React.FC<NamePageBlockProps> = (props: NamePageBlockProps) => {

    return (
        <Box className={classes.main_container} py={5} pl="lg">
            {props.icon &&
                <Box className={classes.icon_box} mr="xs">
                    <Image className={classes.icon} src={props.icon}/>
                </Box>
            }
            <Box className={classes.title_box}>
                <Title fw={600} c="#545454">{props.title}</Title>
            </Box>
        </Box>
    )
};