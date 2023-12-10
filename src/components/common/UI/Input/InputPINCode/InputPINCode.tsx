import React, { useRef, useState, useEffect } from "react";
import { InputPINCodeProps } from "./InputPINCode.types";
import classes from "./InputPINCode.module.css";

import { Box } from "@mantine/core";
import { getStyleSize } from "@styles/core/helpers";

export const InputPINCode: React.FC<InputPINCodeProps> = (props: InputPINCodeProps) => {
    const { size = "medium" } = props;

    const [pins, setPins] = useState(["", "", "", ""]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    useEffect(() => {
        const newPins = props.value.split("");
        const paddedPins = new Array(4).fill("").map((_, index) => newPins[index] || "");
        setPins(paddedPins);
    }, [props.value]);

    const handleInputChange = (index: number, value: string) => {
        const newPins = [...pins];
    
        if (value === "" || /^\d+$/.test(value)) {
            newPins[index] = value;
            setPins(newPins);
    
            if (index < inputRefs.length - 1 && value !== "") {
                setCurrentIndex(index + 1);
                inputRefs[index + 1].current?.focus();
            }
        } else {
            newPins[index] = "";
            setPins(newPins);
        }
    
        props.onChange(newPins.join(""));
    };
    const handleBackspace = (index: number) => {
        if (index > 0 && index === currentIndex && pins[index] === "") {
            const newPins = [...pins];
            newPins[index - 1] = "";
            setPins(newPins);
            setCurrentIndex(index - 1);
            inputRefs[index - 1].current?.focus();

            props.onChange(newPins.join(""));
        }
    };

    return (
        <Box className={classes.root} h={getStyleSize(size)} onClick={() => inputRefs[currentIndex].current?.focus()}>
            {pins.map((pin, index) => (
                <Box key={index} className={classes.field_item}>
                    {pin !== "" ? (
                        <Box className={classes.filled_circle} />
                    ) : (
                        <Box className={classes.empty_circle} />
                    )}
                    <input
                        className={classes.input}
                        ref={inputRefs[index]}
                        data-autofocus
                        type="text"
                        inputMode="numeric"
                        value={pin}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        onKeyDown={(e) => e.key === "Backspace" && handleBackspace(index)}
                        maxLength={1}
                    />
                </Box>
            ))}
        </Box>
    );
};
