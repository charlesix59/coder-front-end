import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import request from "../../../utils/request";

function HrChangePassword(){
    const [oldPwd,setOldPwd] = useState("")
    const [newPwd,setNewPwd] = useState("")
    let changePwd = ()=>{
        request.put("/hr/modify/password",
            {
                "id":localStorage.getItem("token"),
                "oldPassword":oldPwd,
                "newPassword":newPwd
            }).then(
            res=>{
                console.log(res)
                if(res.data.success){
                    alert("修改成功")
                } else {
                    alert("修改失败")
                }
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
export default HrChangePassword