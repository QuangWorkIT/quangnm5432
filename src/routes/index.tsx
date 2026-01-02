import ExperiencePage from "@/pages/ExperiencePage";
import Home from "@/pages/Home";
import ProjectPage from "@/pages/ProjectPage";

import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
    { index: true, element: <Home /> },
    { path: "/experience", element: <ExperiencePage /> },
    { path: "/project", element: <ProjectPage /> },
])

export default router