import FindProjectUI from "../pages/FindProjectUI/FindProjectUI";
import FindEmployeeUI from "../pages/FindEmployeeUI/FindEmployeeUI";
import CompanyProfileScreenUI from "../pages/CompanyProfileScreenUI/CompanyProfileScreenUI";  
import CompaniesSliderUI from "../pages/CompaniesSliderUI/CompaniesSliderUI";
import Job from "../pages/JobFilter/Job";
import EmployeeFilter from "../pages/EmployeeFilter/EmployeeFilter";
import JobMainScreenAsCompnyProfileInformayion from "../components/JobMainScreenAsCompnyProfileInformayion/JobMainScreenAsCompnyProfileInformayion";
import Home from "../pages/loginandregester/Home";
import Page2 from "../pages/loginandregester/Page2";
import Page3 from "../pages/loginandregester/Page3";
import Blog from '../components/Blog/Blog';
import Cards from "../components/cards/Cards";
import Saved from '../components/Saved/Saved';
import CompanySideInfo from '../components/Company/Company';

export const Gestroutes = [
    {
        path: "findprojects",
        element: <FindProjectUI />,
        
      },
      {
        path: "findemployees",
        element: <FindEmployeeUI />, 
      },
      {
        path: "companyprofile",
        element: <CompanyProfileScreenUI />, 
        
      },
      {
        path: "companyslider",
        element: <CompaniesSliderUI />, 
        
      },
      {
        path: "jobfilter",
        element: <Job />, 
        
      },
      {
        path: "employeefilter",
        element: <EmployeeFilter />, 
        
      },
      {
        path: "jobscreen",
        element: <JobMainScreenAsCompnyProfileInformayion />, 
        
      },
      {
        path: "registerblogers",
        element: <Home />, 
        
      },
      {
        path: "loginblogers",
        element: <Page2 />, 
        
      },
      {
        path: "intrestedblogers",
        element: <Page3 />, 
        
      },
      {
        path: "blog",
        element: <Blog />, 
        
      },
      {
        path: "card",
        element: <Cards />, 
        
      },
      {
        path: "blogsave",
        element: <Saved />, 
        
      },
      {
        path: "company",
        element: <CompanySideInfo />, 
        
      },

];