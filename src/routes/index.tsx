import { NavigationLayout } from "components/layout/navigation-layout";
import { CMR } from "pages/CMR";
import { Project } from "pages/project";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const paths = {
    root: '/',
    project: 'project/:projectId',
    projectCMR: 'cmr'
};

export const router = createBrowserRouter([
    {
        path: paths.root,
        element: <NavigationLayout />,
        children: [
            {
                path: paths.root,
                element: <Navigate to={'/project/0/cmr'}/>
            },
            {
                path: paths.project,
                element: <Project />,
                children: [
                    {
                        path: paths.projectCMR,
                        element: <CMR />
                    },
                    {
                        path: '*',
                        element: <div>Страница еще не создана</div>
                    }
                ]
            },

        ]
    }
]);
