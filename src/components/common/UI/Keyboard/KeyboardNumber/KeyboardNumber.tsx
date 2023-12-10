import React from "react";
import { KeyboardNumberElement, KeyboardNumberProps } from "./KeyboardNumber.types";
import classes from "./KeyboardNumber.module.css";

import { ActionIcon, Box, Group, Stack } from "@mantine/core";
import { Text } from "@components/UI/Text";
import { ReactSVG } from "react-svg";

import BackspaceIcon from "@assets/images/icons/w300/backspace.svg";
import DeleteIcon from "@assets/images/icons/w300/delete_forever.svg";

import { getStyleSize } from "@styles/core/helpers";
import { getStyleColor } from "@styles/core/helpers/getStyleColor";

export const KeyboardNumber: React.FC<KeyboardNumberProps> = (props: KeyboardNumberProps) => {
    const { size = "extra-large", spacingCol = "xs", spacingRow = "xs" } = props;

    const keyboardValues: KeyboardNumberElement[][] = [
        [1, 4, 7, 10],
        [2, 5, 8, 0],
        [3, 6, 9, 11],
    ].map((row) =>
        row.map((value) => ({
            index: value,
            value:
                value === 10 ? (
                    <ReactSVG className={classes.icon} src={DeleteIcon} />
                ) : value === 11 ? (
                    <ReactSVG className={classes.icon} src={BackspaceIcon} />
                ) : (
                    <Text size={getStyleSize(size, true)} weight="medium">
                        {value}
                    </Text>
                ),
        }))
    );

    const handleNumberClick = (value: number) => {
        props.onChange(prevState => (prevState.length < 4 ? prevState + value.toString() : prevState));
    };

    const handleActionButtonClick = (value: number) => {
        if (value === 10) {
            props.onChange("");
        } else if (value === 11) {
            props.onChange(prevState => prevState.slice(0, prevState.length - 1));
        }
    };

    return (
        <Box className={classes.root}>
            <Group gap={spacingCol}>
                {keyboardValues.map((column, colIndex) => (
                    <Stack key={colIndex} gap={spacingRow}>
                        {column.map((element) => (
                            <ActionIcon
                                key={element.index}
                                className={classes.button}
                                variant="filled"
                                color={getStyleColor("disabled-light")}
                                size={getStyleSize(size)}
                                radius="xl"
                                onClick={() => {
                                    if (element.index < 10) {
                                        handleNumberClick(element.index);
                                    } else {
                                        handleActionButtonClick(element.index);
                                    }
                                }}
                            >
                                {element.value}
                            </ActionIcon>
                        ))}
                    </Stack>
                ))}
            </Group>
        </Box>
    );
};