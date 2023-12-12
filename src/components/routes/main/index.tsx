import React from "react";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";

import { MainLayout } from "@components/Main";
import {LoginPage} from "@pages/LoginPage";
import {DashboardPage} from "@pages/DashboardPage";
import {NotFoundPage} from "@pages/NotFound";
import {ProfilePage} from "@pages/ProfilePage";
import { TimetablePage } from "@pages/TimetablePage";

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
                path: "/timetable",
                element: <TimetablePage />
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