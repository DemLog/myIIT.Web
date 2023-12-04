import { Box } from "@mantine/core";

import { Card, Container } from "@components/UI";
import { LoginForm } from "@components/Login";

export const LoginPage = () => {
   return(
    <Box>
        <Container>
            <LoginForm />
        </Container>
    </Box>
   )
};