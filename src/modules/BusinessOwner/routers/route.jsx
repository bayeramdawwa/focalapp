
import MyPage from "../pages/Mypage";
import Posts from "../components/Posts"
import Blogs from "../components/Blogs"
import Information from "../components/Information"
import StepperLogin from "../pages/StepperLogin"
import JobMain from '../pages/JobMain'
import AddJob from '../pages/AddJob'
import ConfirmPayment from '../pages/ConfirmPayment'
import WithdrawalMoney from '../pages/WithdrawalMoney'
import ManageJob from '../pages/ManageJob'

export const businessroutes = [
  {
    path: "businessownerprofile",
    element: <MyPage />,
    children: [
      {
      path: "posts",
      element: <Posts />,
    },
    {
      path: "blogs",
      element: <Blogs />,
      
    },
    {
      path: "information",
      element: <Information/>,
      
    },
    
     ],
  },

  {
    path: "businesslogin",
      element: <StepperLogin/>, 
  },
  {
    path: "jobmain",
    element: <JobMain/>, 
  },
  {
    path: "addjob",
    element: <AddJob/>, 
  },
  {
    path: "confirmpayment",
    element: <ConfirmPayment/>, 
  },
  {
    path: "withdrawalmoney",
    element: <WithdrawalMoney/>, 
  },
  {
    path: "managejob",
    element: <ManageJob/>, 
  }
];
