import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import request from "../../utils/request";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {Vertify} from "@alex_xu/react-slider-vertify";

function Register(){
    const navigate = useNavigate()
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [verified,setVerified] = useState(false)
    const register = ()=>{
        if (!verified){
            alert("请先通过人机验证")
            return
        }
        if(password!==confirmPassword){
            alert("两次输入的密码不一致")
            return
        }
        request.post("/user/register",{
            "email":email,
            "name":name,
            "phone":phone,
            "password":password
        }).then(res=>{
            console.log(res);
            if(res.data.success){
                alert("注册成功")
                navigate("/Login")
            }
        })
    }
    return(
        <>
            <main className="form-signin">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email"
                                      onChange={(e)=>{setEmail(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Control type="text" placeholder="用户名"
                                      onChange={(e)=>{setName(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Control type="phone" placeholder="手机号"
                                      onChange={(e)=>{setPhone(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password"
                                      onChange={(e)=>{setPassword(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Repeat password"
                                      onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                    </Form.Group>
                    <Form.Label>人机验证：</Form.Label>
                    <Vertify
                        width={320}
                        height={160}
                        onSuccess={() => setVerified(true)}
                        onFail={() => setVerified(false)}
                    />
                    <Button variant="primary" type="submit" onClick={register}>
                        提交
                    </Button>
                    <Link to={"/login"} style={{padding:"0 1rem"}}>已有账号？点击登录</Link>
            </main>
        </>
    )
}
export default Register