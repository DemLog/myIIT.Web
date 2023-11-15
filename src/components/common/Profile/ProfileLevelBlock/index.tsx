import React, { useRef, useEffect } from "react";
import { ProfileLevelBlockProps } from "./props";
import classes from "./ProfileLevelBlock.module.css";
// @ts-ignore
import Progress from 'gradient-ring-progress';
import { Box, Text } from "@mantine/core";

export const ProfileLevelBlock: React.FC<ProfileLevelBlockProps> = (props: ProfileLevelBlockProps) => {
    const ringProgressRef = useRef<HTMLDivElement | null>(null);
    const ringProgressInstanceRef = useRef<Progress | null>(null);

    useEffect(() => {
        if (ringProgressRef.current && !ringProgressInstanceRef.current) {
            const ringProgress = new Progress({
                dom: ringProgressRef.current,
                outerRadius: 80,
                innerRadius: 70,
                color: [['rgba(85,100,236,1)', 0], ['rgba(0,224,255,1)', 1]],
                duration: 2100,
                value: 0.5,
                fontColor: "white"
            });
            ringProgress.init();
            ringProgressInstanceRef.current = ringProgress;
        }

        return () => {
            if (ringProgressInstanceRef.current) {
            }
        };
    }, []);

    return (
        <Box className={classes.main_container} px="lg">
            <Box className={classes.header} pt="xs">
                <Text c="#222222" fw={500} size="xl">Ваш уровень</Text>
            </Box>
            <Box className={classes.content} pt="xs" px="xs">
                <Box className={classes.level_block}>
                    <Box className={classes.level_number}>
                        <Text fw={500} c="#676767" size="100px">4</Text>
                    </Box>
                    <Box ref={ringProgressRef} style={{ height: "180px", width: "180px" }} />
                    <Box className={classes.level_xp_block} mt={-4}>
                        <Text c="#6D6D6D">250/500 xp</Text>
                    </Box>
                </Box>
                <Box className={classes.text_block} mt="lg" pb="xl">
                    <Text fw={500} size="lg">Вы на 2 месте!</Text>
                    <Text fw={100} size="xs" ta="center" mt={-5}>Выполняйте задания, чтобы повысить уровень</Text>
                </Box>
            </Box>
        </Box>
    );
};
