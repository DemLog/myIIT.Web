import React from "react";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";

import {LoginPage} from "@pages/LoginPage/LoginPage";
import {MainLayout} from "@components/Main/MainLayout/MainLayout";
import {DashboardPage} from "@pages/Dashboard";
import {NotFoundPage} from "@pages/NotFound";
import {ProfilePage} from "@pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/dashboard" />
            },
            {
                path: "/dashboard",
                element: <DashboardPage />
            },
            {
                path: "/profile",
                element: <ProfilePage />
            },
            {
                path: "*",
                element: <NotFoundPage />
            }
        ]
    },
    {
        path: "/login",
        element: <LoginPage />
    }
]);

export const RoutesMain: React.FC = () => {
    return (
        <RouterProvider router={router}/>
    );
};