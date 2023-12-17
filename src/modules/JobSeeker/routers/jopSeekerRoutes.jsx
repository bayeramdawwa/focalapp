
import MainProfile1 from "../pages/mainProfile/MainProfile1";
import InformationForm from "../components/InformationForm/InformationForm";
import Boos from "../components/BOOS/Boss";
import AllComponets from "../components/AllComponets/AllComponets";
import Blog1 from "../components/Myblog/Blog1/Blog1";
import Blog2 from "../components/Myblog/Blog2/Blog2";
import Login from "../pages/Login/Login";

export const jopSeekerRoutes = [
  {
    path: "jopseekerprofile",
    element: <MainProfile1 />,
    children: [
      {
      path: "information",
      element: <InformationForm />,
    },
    {
      path: "resum",
      element: <AllComponets />,
      
    },
    {
      path: "blog",
      element: <Boos />,
      children:[
        
            {
                path: "",
                element: <Blog1 />,
              },  
            {
                path: "myblog",
                element: <Blog2 />,
              },  
        
      ]
      
    },
     
     ],
  },
  {
    path :"jopseekerlogin",
    element: <Login />,
  }
];
