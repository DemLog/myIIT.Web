import {FC, Fragment, useEffect, useRef} from "react";
import logo from "../../../assets/images/myiit-beta-logo.png";
import {
    Box,
    Button,
    createStyles,
    Image,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title
} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
    desktopLoginForm: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '320px',
    },
    logoBox: {
        textAlign: 'center',
        img: {
            maxWidth: '80%',
            margin: 'auto'
        }
    },
    logoAnimation: {
        transform: 'translateY(100%)',
        animation: 'slide-up 1s 2500ms ease forwards',
    },
    loginFormInputs: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
    },
    loginFormInputsAnimation: {
        opacity: 0,
        animation: 'fade-in 1s 3s ease forwards',
    },
}));

const LoginForm: FC = () => {
    const {classes} = useStyles();
    const matches = useMediaQuery('(max-width: 720px)');

    const logoRef = useRef<HTMLDivElement | null>(null);
    const inputsRef = useRef<HTMLDivElement | null>(null);

    const displayFormLogo = () => {
        return (
            <Box className={classes.logoBox} ref={logoRef}>
                <Image src={logo} alt="Логотип"/>
            </Box>
        );
    };

    const displayFormInputs = () => {
        return (
            <Paper className={classes.loginFormInputs} p="md" radius="md" ref={inputsRef}>
                <Title align="center" order={2} mb="sm">Авторизация</Title>
                <TextInput placeholder="Логин Moodle" mb="sm"/>
                <PasswordInput placeholder="Пароль" mb="lg"/>
                <Button variant="gradient" type="submit" gradient={{from: 'indigo', to: 'cyan'}} fullWidth>
                    <Text fw={700} fz="md">Войти</Text>
                </Button>
            </Paper>
        );
    };

    const displayLoginForm = () => {
        return (<Fragment>
            {displayFormLogo()}
            {displayFormInputs()}
        </Fragment>);
    }

    useEffect(() => {
        if (matches) {
            logoRef.current?.classList.add(classes.logoAnimation);
            inputsRef.current?.classList.add(classes.loginFormInputsAnimation);
        } else {
            logoRef.current?.classList.remove(classes.logoAnimation);
            inputsRef.current?.classList.remove(classes.loginFormInputsAnimation);
        }
    }, [matches]);

    return matches ? displayLoginForm() :
        <Box className={classes.desktopLoginForm}>
            {displayLoginForm()}
        </Box>
};

export default LoginForm;