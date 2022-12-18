import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router";
import {useState} from "react";
import request from "../../../utils/request";
import {Link} from "react-router-dom";
import {Vertify} from "@alex_xu/react-slider-vertify";

function HrLogin(){
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [verified,setVerified] = useState(false)
    const login = ()=>{
        if (!verified){
            alert("请先通过人机验证")
            return
        }
        request.put(
            "/hr/login",
            {
                "email":email,
                "password":password
            }
        ).then(res=>{
            // console.log(res)
            if(res.data.success){
                localStorage.setItem("token",res.data.token)
                localStorage.setItem("identify","hr")
                console.log(localStorage.getItem("token"))
                setTimeout(()=>{
                    alert("登陆成功")
                    navigate("/home")
                },1000)
            }
            else{
                alert("账号或密码错误")
            }
        })
    }
    return(
        <>
            <main className="form-signin">
                <Button variant={"primary"} onClick={()=>{navigate(`/login`)}}>我要找工作</Button>
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>邮箱</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
                        <Form.Text className="text-muted">
                            你的邮箱将被严格保密
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>密码</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="记住账号" />
                    </Form.Group>
                    <Form.Label>人机验证：</Form.Label>
                    <Vertify
                        width={320}
                        height={160}
                        onSuccess={() => setVerified(true)}
                        onFail={() => setVerified(false)}
                    />
                    <Button variant="primary" onClick={login}>
                        提交
                    </Button>
                    <Link to={"/register/hr"} style={{padding:"0 1rem"}}>没有账号？点击注册</Link>
                </div>
            </main>
        </>
    )
}
export default HrLogin