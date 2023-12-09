import React from "react";
import { ModalMobileProps } from "./ModalMobile.types";
import classes from "./ModalMobile.module.css";

import { ActionIcon, Box, Divider, Image, Group, ScrollArea, Modal as MModal } from "@mantine/core";
import { Text, Button } from "@components/UI";

import { ReactSVG } from 'react-svg';
import closeIcon from "@assets/images/icons/close-icon.svg";

export const ModalMobile: React.FC<ModalMobileProps> = (props: ModalMobileProps) => {
    const { withCloseButton = true } = props;
    const shouldRenderHeader = props.title || withCloseButton;

    return (
        <MModal
            classNames={{
                overlay: classes.modal_overlay,
                inner: classes.modal_inner,
                content: classes.modal_content,
                body: classes.modal_body
            }}
            opened={props.opened}
            onClose={props.onClose}
            withCloseButton={false}
            padding={0}
            overlayProps={{
                blur: 4
            }}
            transitionProps={{
                transition: "slide-up",
                duration: 220,
                 timingFunction: 'linear'
            }}
        >
            {shouldRenderHeader && (
                <Box className={classes.header_block}>
                    <Group className={classes.title_block} py="xs" px="md" justify="space-between">
                        <Text size="large" weight="regular">{props.title}</Text>
                        {withCloseButton && (
                            <ActionIcon variant="transparent" onClick={props.onClose}>
                                <ReactSVG className={classes.header_close} src={closeIcon} />
                            </ActionIcon>
                        )}
                    </Group>
                    <Divider />
                </Box>
            )}
            <ScrollArea.Autosize className={classes.content_block} type="never" mah={300} py="xs" px="md">
                {props.children}
            </ScrollArea.Autosize>
            {props.buttons && (
                <Group className={classes.buttons_block} py="xs" px="md" justify="center" gap="xs">
                    {props.buttons.map((value) => (
                        <Button size="medium" width="48%" {...value} />
                    ))}
                </Group>
            )}
        </MModal>
    );
}