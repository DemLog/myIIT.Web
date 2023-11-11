import React from "react";
import {NotFoundPageProps} from "./props";
import classes from "./NotFoundPage.module.css";

import {Box, Image, Text} from "@mantine/core";

import rickImage from "@assets/images/rick_art.png";
import pepegaImage from "@assets/images/pepega_cry.png";
import motherWImage from "@assets/images/mother_whore.png";

export const NotFoundPage: React.FC<NotFoundPageProps> = (props: NotFoundPageProps) => {
    const imagesNotFound = [rickImage, pepegaImage, motherWImage];
    const randomImage = imagesNotFound[Math.floor(Math.random()*imagesNotFound.length)];

    return (
        <Box className={classes.main_container}>
            <Image w={300} fit="contain" src={randomImage}/>
            <Text size="xl" fw="500" ta="center">Упс, а нет такой страницы! Или разрабы дол*****...</Text>
        </Box>
    );
};