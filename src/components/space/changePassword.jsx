import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import request from "../../utils/request";

function ChangePassword(){
    const [oldPwd,setOldPwd] = useState("")
    const [newPwd,setNewPwd] = useState("")
    let changePwd = ()=>{
        request.put("/user/modify/password",
            {
                "id":localStorage.getItem("token"),
                // "id":"eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njg4NzE4ODIsInVzZXJJZCI6MSwiaWF0IjoxNjY4ODY5Mjg5LCJqdGkiOiJ0b2tlbklkIn0.oQrvexs1N2YacWRx-hkY-ACOPRcTd5yF2AITjQFxuvc",
                "oldPassword":oldPwd,
                "newPassword":newPwd
        }).then(
            res=>{
                console.log(res)
            }
        )
    }
    return(
        <div className="form-signin">
                <Form.Group className="mb-3" controlId="formOldPassword">
                    <Form.Label>旧密码：</Form.Label>
                    <Form.Control onChange={(e)=>{setOldPwd(e.target.value)}} type="password" placeholder="输入之前的密码" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNewPassword">
                    <Form.Label>新密码：</Form.Label>
                    <Form.Control onChange={(e)=>{setNewPwd(e.target.value)}} type="password" placeholder="输入新密码" />
                </Form.Group>
            <Button onClick={changePwd}>保存</Button>
        </div>
    )
}
export default ChangePassword