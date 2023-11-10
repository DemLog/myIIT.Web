import React from "react";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";

import {LoginPage} from "@pages/Login";
import {MainLayout} from "@components/Main/MainLayout";
import {DashboardPage} from "@pages/Dashboard";

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
                path: "dashboard",
                element: <DashboardPage />
            }
        ]
    },
    {
        path: "/Login",
        element: <LoginPage />
    }
]);

export const RoutesMain: React.FC = () => {
    return (
        <RouterProvider router={router}/>
    );
};