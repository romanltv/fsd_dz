import { createBrowserRouter } from "react-router";
import { Layout } from "../layout";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [{
            index: true,
            element: <h1>home</h1>,
        }]

    }
])
