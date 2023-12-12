import React, {Fragment, useEffect} from "react";
import {NotFoundPageProps} from "./props";
import classes from "./NotFoundPage.module.css";

import {Box, Image, Text} from "@mantine/core";
import {useDisclosure, useDocumentTitle} from "@mantine/hooks";

import rickImage from "@assets/images/rick_art.png";
import pepegaImage from "@assets/images/pepega_cry.png";
import motherWImage from "@assets/images/mother_whore.png";

import {observer} from "mobx-react";
import {useStores} from "@core/hooks";

const NotFoundPageComponent: React.FC<NotFoundPageProps> = (props: NotFoundPageProps) => {
    const imagesNotFound = [rickImage, pepegaImage, motherWImage];
    const randomImage = imagesNotFound[Math.floor(Math.random()*imagesNotFound.length)];

    const {navigationStore} = useStores();

    const [loaderVisible, {open: loaderToggle}] = useDisclosure(false);

    useDocumentTitle("Не найдено - myIIT");

    useEffect(() => {
        navigationStore.setNamePage("Не найдено");
        setTimeout(() => loaderToggle(), 100);
    }, []);

    return (
        <Box className={classes.main_container}>
            {loaderVisible && <Fragment>
                <Image w={300} fit="contain" src={randomImage}/>
                <Text size="xl" fw="500" ta="center">Упс, а нет такой страницы!</Text>
            </Fragment>}
        </Box>
    );
};

export const NotFoundPage = observer(NotFoundPageComponent);