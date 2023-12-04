import myIITLogo from "@assets/images/logo/myIIT-logo.png";

import { Card } from "@components/UI";
import { Box, Image, Title } from "@mantine/core";

import * as LANGS from "./LoginForm.langs";
import { SavePassword } from "@components/Modals/SavePassword";

export const LoginForm = () => {
  return (
    <>
      <Box>
        <Image src={myIITLogo} w={100} />
        <Card w={"100%"}>
          <Title>{LANGS.TITLE}</Title>
        </Card>
      </Box>
      <SavePassword />
    </>
  );
};
