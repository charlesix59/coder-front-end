import {useRoutes} from "react-router-dom"
import Home from "./home";
import Query from "./query";
import Profile from "./profile";
import {Navigate} from "react-router";
import Upload from "./profile/upload";
import Create from "./profile/create";
import Login from "./login";
import HrLogin from "./login/hr";
import HrRegister from "./register/hr";
import Register from "./register";
import Space from "./space";
import ChangePassword from "./space/changePassword";
import ModifyData from "./space/modifyData";
import Apply from "./space/apply";
import Job from "./job";
import HrSpace from "./space/hr";
import HrChangePassword from "./space/hr/changePassword";
import HrModifyData from "./space/hr/modifyPersonalData";
import ShowApplication from "./space/hr/application";
import AddJob from "./space/hr/add";

function Element(){
    const element = useRoutes([
        {
            path:"/home",
            element:<Home/>
        },
        {
            path:'/query',
            element:<Query/>
        },
        // {
        //     path: "/profile",
        //     element: <Navigate to="/profile/upload"/>
        // },
        {
            path: '/profile',
            element: <Profile/>,
            children:[
                {
                    path:'upload',
                    element:<Upload/>
                },
                {
                    path: 'create',
                    element: <Create/>
                },
            ]
        },
        {
            path: '/login',
            element: <Login/>,
        },
        {
            path: '/login/hr',
            element: <HrLogin/>,
        },
        {
            path: '/register',
            element: <Register/>,
        },
        {
            path: '/register/hr',
            element: <HrRegister/>,
        },
        {
            path: '/space',
            element: <Space/>,
            children: [
                {
                    path: "change",
                    element: <ChangePassword/>
                },
                {
                    path: "modify",
                    element: <ModifyData/>
                },
                {
                    path: "apply",
                    element: <Apply/>
                }
            ]
        },
        {
            path: '/hrSpace',
            element: <HrSpace/>,
            children: [
                {
                    path: "change",
                    element: <HrChangePassword/>
                },
                {
                    path: "modify",
                    element: <HrModifyData/>
                },
                {
                    path: "apply",
                    element: <ShowApplication/>
                },
                {
                    path: "addJob",
                    element: <AddJob/>
                }
            ]
        },
        {
            path: "/job",
            element: <Job/>
        },
        {
            path: '*',
            element: <Navigate to='/home'/>
        }
    ])
    return(element)
}
export default Element