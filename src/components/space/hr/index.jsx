import {NavLink} from "react-router-dom";
import {Outlet, useNavigate} from "react-router";
import {Nav} from "react-bootstrap";

function HrSpace() {
    const navigate = useNavigate();
    const quitLogin = () =>{
        localStorage.clear();
        navigate("/login")
    }
    return (
        <div style={{display:"flex",flexWrap:"nowrap"}}>
            <div className="d-flex flex-column flex-shrink-0 p-3" style={{width: "280px"}}>
                <span className="fs-4">Sidebar</span>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li>
                        <NavLink to={"/hrSpace/change"} className="nav-link">
                            修改密码
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/hrSpace/modify"} className="nav-link">
                            编辑个人信息
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/hrSpace/apply"} className="nav-link">
                            查看申请
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/hrSpace/addJob"} className="nav-link">
                            添加工作
                        </NavLink>
                    </li>
                    <li>
                        <Nav.Link onClick={quitLogin}>退出登录</Nav.Link>
                    </li>
                </ul>
                <hr/>
            </div>
            <div className="d-flex flex-column flex-shrink-0 col-8">
                <Outlet/>
            </div>
        </div>
    )
}

export default HrSpace