import {Button, Form} from "react-bootstrap";
import request from "../../utils/request";
import {useState} from "react";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {Vertify} from "@alex_xu/react-slider-vertify";

function Login(e){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const [verified,setVerified] = useState(false)
    const login = ()=>{
        if (!verified){
            alert("请先通过人机验证")
            return
        }
        request.put(
            "/user/login",
            {
                "email":email,
                "password":password
            }
        ).then(res=>{
            if(res.data.success){
                localStorage.setItem("token",res.data.token)
                localStorage.setItem("identify","user")
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
    const toHrLogin= () =>{
        navigate(`/login/hr`);
    }
    return(
        <>
            <main className="form-signin">
                <Button variant={"success"} onClick={toHrLogin}>我要招人</Button>
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
                    <Link to={"/register"} style={{padding:"0 1rem"}}>没有账号？点击注册</Link>
                </div>
            </main>
        </>
    )
}
export default Login