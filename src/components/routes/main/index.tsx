import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: null
    },
    {
        path: "/login",
        element: null
    }
]);

export const RoutesMain: React.FC = () => {
    return (
        <RouterProvider router={router}/>
    );
};