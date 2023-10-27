import {Box, createStyles, Group, Image, Text, Title} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import {Fragment} from "react";

const useStyles = createStyles((theme) => ({
    contentBlock: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center'
    },
    appInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    downloadButton: {
        transition: 'box-shadow 0.3s ease',
        border: theme.colorScheme === 'dark' ? '2px solid rgba(255,255,255,0.5)' : '2px solid rgba(0,0,0,0.5)',
        borderRadius: '10px',
        ":hover": {
            boxShadow: theme.colorScheme === 'dark' ? '2px 0px 15px 0px rgba(255,255,255,0.28)' : '2px 0px 15px 0px rgba(0,0,0,0.28)'
        }
    }
}));

const LoginAppInfo = () => {
    const {classes} = useStyles();
    const matches = useMediaQuery('(max-width: 720px)');

    return matches ? <Fragment/> :
        (<Box className={classes.contentBlock}>
            <Box className={classes.appInfo}>
                <Title ta="center">Скачайте мобильное приложение myIIT</Title>
                <Box w={650}>
                    <Text mb="xl" ta="center">
                        Весь функционал экосистемы "myIIT" в твоем кармане!
                        Всегда оставайся на связи с любимым факультетом
                    </Text>
                </Box>
                <Group mb="md">
                    <Image width={200} radius="lg" mr={-45}
                           src="https://sun13-1.userapi.com/znUVrn03HYl3Iw0O_m-N5ht2kMtmcFb8I3HBiQ/hciP6yRUk08.png"
                           alt="Скриншот 1" fit="cover" withPlaceholder/>
                    <Image width={210} radius="lg"
                           src="https://sun13-2.userapi.com/aS-mwyJ1zs_AXbaKWFwCScf5WAosUQbHpDYEbQ/CP23n993AyY.png"
                           alt="Скриншот 2" fit="cover" withPlaceholder/>
                </Group>
                <Group spacing={60}>
                    <Box className={classes.downloadButton} component="a" href="https://apps.apple.com/us/app/myiit/id1234567890" target="_blank">
                        <Image width={120} height={37} radius="md"
                               src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                               alt="App Store"/>
                    </Box>
                    <Box className={classes.downloadButton} component="a" href="https://play.google.com/store/apps/details?id=com.myiit.app"
                         target="_blank">
                        <Image width={120} height={37} radius="md"
                               src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0"
                               alt="Google Play"/>
                    </Box>
                </Group>
            </Box>
        </Box>)
        ;
};

export default LoginAppInfo;