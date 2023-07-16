import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromChildren,
  // Route,
} from "react-router-dom";

// Pages
import Welcome from "./Pages/Welcome/Welcome";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn.js/SignIn";  
import Dashboard from "./Pages/Dashboard/Dashboard";
import History from "./Pages/History/History";
import Send from "./Pages/Send/Send";
import Me from "./Pages/Me/Me";
import SetAmount from "./Layout/SetAmount/SetAmount";
import Successful from "./Layout/Successful/Successful";
import TopUp from "./Pages/TopUp/TopUp";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>
  },
  {
    path: "/signUp",
    element: <SignUp/>
  },
  {
    path: "/signIn",
    element: <SignIn/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/history",
    element: <History/>
  },
  {
    path: "/send",
    element: <Send/>,
  },
  {
    path: "/me",
    element: <Me/>
  },
  {
    path: "/setamount",
    element: <SetAmount/>
  },
  {
    path: "/successful",
    element: <Successful/>
  },
  {
    path: "/topup",
    element: <TopUp/>
  }
  // createRoutesFromChildren(
  //   <Route path="/" element={<Welcome/>}>
  //     <Route path="/" element={<Welcome/>} />
  //     <Route path="/signUp" element={<SignUp/>} />
  //     <Route path="/signIn" element={<SignIn/>} />
  //     <Route path="/dashboard" element={<Dashboard/>} />
  //     <Route path="/history" element={<History/>} />
  //     <Route path="/send" element={<Send/>}>

  //     </Route>
  //     <Route path="/me" element={<Me/>} />
  //   </Route>
  // )
]);


function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
