import {forwardRef} from "react";
import classes from "./MyIITLoader.module.css";

import cx from 'clsx';

import myIITIcon from "@assets/images/icons/myIIT-logo-icon.png";

import {Box, Image, MantineLoaderComponent} from "@mantine/core";

export const MyIITLoader: MantineLoaderComponent = forwardRef(({className, ...others}, ref) => (
    <Box component="span" className={cx(classes.loader, className)} {...others} ref={ref}>
        <Image src={myIITIcon}/>
    </Box>
))