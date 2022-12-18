import {Navigate, Outlet} from "react-router";

function Profile(){
    return(
        <>
            {!localStorage.getItem("token")?<Navigate to={"/login"}/>:""}
            <Outlet/>
        </>
    )
}
export default Profile