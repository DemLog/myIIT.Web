import React from "react";
import { ModalProps } from "./Modal.types";
import classes from "./Modal.module.css";

import { ActionIcon, Box, Divider, Image, Group, Modal as MModal } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { Text, Button } from "@components/UI";
import { ModalMobile } from "./ModalMobile";

import { ReactSVG } from 'react-svg';
import closeIcon from "@assets/images/icons/close-icon.svg";


export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    const { withCloseButton = true } = props;
    const shouldRenderHeader = props.title || withCloseButton;

    return (
        matchesMobile ? <ModalMobile {...props} /> : <MModal
            classNames={{ overlay: classes.modal_overlay }}
            opened={props.opened}
            onClose={props.onClose}
            withCloseButton={false}
            padding={0}
            radius="lg"
            centered
            overlayProps={{
                blur: 4
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
            <Box className={classes.content_block} py="xs" px="md">
                {props.children}
            </Box>
            {props.buttons && (
                <Group className={classes.buttons_block} py="xs" px="md" justify="flex-end" gap="xs">
                    {props.buttons.map((value) => (
                        <Button size="small" {...value} />
                    ))}
                </Group>
            )}
        </MModal>
    );
}