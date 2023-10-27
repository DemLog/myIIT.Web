import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {LoginPage} from "@pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: null
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