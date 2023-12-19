import { businessroutes } from "../modules/BusinessOwner/routers/route";
import Home  from "../pages/Home/Home";
import PageJobLogin  from "../pages/PageJobLogin/PageJobLogin";
import Register  from "../pages/Register/Register";
import { jopSeekerRoutes } from "../modules/JobSeeker/routers/jopSeekerRoutes";
import App from "./../App";
import { Gestroutes } from '../modules/Guest/routers/Gestroutes'

export const routes = [
  {
    path: "/focalapp/",
    element: <App />,
    children: [
      ...businessroutes,
      ...jopSeekerRoutes,
      ...Gestroutes,
      {
        path: "/focalapp/",
        element: <Home />,
      },
      {
        path: "/focalapp/login",
        element: <PageJobLogin />,
        
      },
      {
        path: "/focalapp/register",
        element: <Register />,
        
      },

    ],
  },
];
