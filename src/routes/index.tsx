import MainLayout from "@/components/layout/MainLayout";
import ExperiencePage from "@/pages/ExperiencePage";
import Home from "@/pages/Home";
import ProjectPage from "@/pages/ProjectPage";

import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "/experience", element: <ExperiencePage /> },
            { path: "/project", element: <ProjectPage /> }
        ]
    },
])

export default router