import {Button, Container, createStyles, Group, Text} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
    footerMobile: {
        alignItems: 'center',
        opacity: 0,
        animation: 'fade-in 1s 3s ease forwards',
    },
    footerDesktop: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    footerLink: {
        ":hover": {
            textDecoration: 'underline'
        }
    }
}));

const LoginFooter = () => {
    const {classes} = useStyles();
    const matches = useMediaQuery('(max-width: 720px)');

    const displayDesktopFooter = () => {
        return (
            <Container className={classes.footerDesktop} size="xl" mt={30}>
                <Text>Создано командой <Text component="span" fw={700}>JSOL</Text></Text>
                <Group>
                    <Text className={classes.footerLink} c="blue" component="a" href="#">Регламент</Text>
                    <Text className={classes.footerLink} c="blue" component="a" href="#">О программе</Text>
                </Group>
            </Container>
        );
    };

    const displayMobileFooter = () => {
        return (
            <Group className={classes.footerMobile} spacing={0} grow>
                <Button variant="default" radius={0} fullWidth>Регламент</Button>
                <Button variant="default" radius={0} fullWidth>О приложении</Button>
            </Group>
        );
    };

    return matches ? displayMobileFooter() : displayDesktopFooter();
};

export default LoginFooter;