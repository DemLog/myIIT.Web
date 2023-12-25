import React, { useEffect } from "react";
import { MainLayoutProps } from "./MainLayout.types";
import classes from "./MainLayout.module.css";

import { Box, ScrollArea } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import { FooterLinksBlock, Header, ProfileCard } from "@components/Main";
import { Container } from "@components/UI";
import {
  NavigationDesktop,
  NavigationMobile,
  NavigationTablet,
} from "../Navigation";

import { observer } from "mobx-react";
import { Outlet, useNavigate } from "react-router-dom";
import { useStores } from "@core/hooks";
import apiService, { apiServiceWs } from "@core/services/apiService";
import { IUserProfile } from "@models/user/IUserProfile";
import { toast } from "react-toastify";

import { IResponseNotification } from "@models/notification/IResponseNotification";
import { LoaderScreen } from "@components/Other/Loader/LoaderScreen";

const MainLayoutComponent: React.FC<MainLayoutProps> = (
  props: MainLayoutProps
) => {
  const matchesPC = useMediaQuery("(min-width: 1024px)");
  const matchesMobile = useMediaQuery("(max-width: 579px)");

  const navigate = useNavigate();
  const { userStore } = useStores();
  const [visible, {open, close}] = useDisclosure(true);

  useEffect(() => {
    const loadingData = async () => {
      if (!userStore.getSession()) {
        navigate("/login");
      }

      if (!userStore.getUser()) {
        const data = await apiService({
          method: "GET",
          url: "profile.get",
          token: userStore.getSession()?.token,
        });
        if (data?.response_code === 200) {
          console.log(data.data)
          userStore.setUser(data.data as IUserProfile);
          close();
          // toast.success("Вход успешно выполнен!");
        }
      }
    };

    loadingData();
  }, [navigate, userStore]);

  return (
    <Box className={classes.main_container}>
      <LoaderScreen visible={visible}/>
      <Header />
      <Box className={classes.main_block}>
        <Container>
          <Box className={classes.main_content}>
            <Box
              className={classes.main_side}
              my={matchesMobile ? 0 : "lg"}
              px="xs"
              pb={matchesPC ? 58 : matchesMobile ? 136 : 120}
            >
              {matchesPC && (
                <Box className={classes.left_side_block}>
                  <Box className={classes.left_side_main}>
                    <ProfileCard />
                    <NavigationDesktop />
                  </Box>
                  <Box className={classes.left_side_footer}>
                    {/* <FooterLinksBlock /> */}
                  </Box>
                </Box>
              )}
              <Box
                className={classes.right_side_block}
                mb="52px"
                pl={matchesPC ? 26 : 0}
                mt={matchesMobile ? "sm" : 0}
              >
                <Box
                  className={classes.right_side_main}
                  p={matchesMobile ? 0 : "md"}
                  py={matchesMobile ? "xs" : "xs"}
                >
                  <ScrollArea h="100%" w="100%" type="never">
                    <Box className={classes.right_side_content}>
                      <Outlet />
                    </Box>
                  </ScrollArea>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      {!matchesPC && <NavigationMobile />}
    </Box>
  );
};

export const MainLayout = observer(MainLayoutComponent);
