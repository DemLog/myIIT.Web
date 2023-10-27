import {Container, createStyles, Group, Header, Title, Image} from "@mantine/core";
import logoHeader from "../../../assets/images/logo_header.jpg";
import {useMediaQuery} from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
    header: {
        padding: '10px 20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        boxSizing: 'unset',
        borderBottom: 'none'
    },
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0
    }
}));

const LoginHeader = () => {
    const {classes} = useStyles();
    const matches = useMediaQuery('(max-width: 720px)');

    return matches ? null : (
        <Header className={classes.header} height="30px">
            <Container size="xl" className={classes.inner}>
                <Group spacing="xs">
                    <Image
                        src={logoHeader}
                        alt="Логотип"
                        width={35}
                        radius="sm"
                    />
                    <Title variant="gradient" order={2} gradient={{from: 'indigo', to: 'cyan', deg: 45}}>myIIT</Title>
                </Group>
            </Container>
        </Header>
    );
};

export default LoginHeader;