import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import request from "../../utils/request";

function ModifyData(){
    const [gender,setGender] = useState("male")
    const [birthday,setBirthday] = useState()
    const saveChange = () => {
        request.post("/user/modify/data", {
            "id":localStorage.getItem("token"),
            "gender": gender === "male",
            "birthday": birthday
        }).then (res =>{
            console.log(res);
            if(res.data.success){
                alert("修改成功")
            }
        })
    }

    return(
        <div className="form-signin">
            <Form.Label>选择性别</Form.Label>
            <Form.Select onChange={(e)=>{setGender(e.target.value)}}>
                <option value="female">女</option>
                <option value="male">男</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>生日</Form.Label>
                <Form.Control onChange={(e)=>{setBirthday(e.target.value)}} type="date" placeholder="更改生日" />
            </Form.Group>
            <Button onClick={saveChange}>保存</Button>
        </div>
    )
}
export default ModifyData