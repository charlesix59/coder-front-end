import {Button, Form} from "react-bootstrap";
import {useState} from "react";

function Education({data,setData}){
    const modifyData = (text)=>{
        let temp = JSON.parse(JSON.stringify(data))
        temp[temp.length-1] = text;
        setData(temp)
    }
    const addData = ()=>{
        let temp = JSON.parse(JSON.stringify(data))
        temp.push("")
        setData(temp)
    }
    const deleteData = (index) =>{
        let temp = JSON.parse(JSON.stringify(data))
        temp.pop()
        setData(temp)
    }
    const [collage,setCollage] = useState("")
    const [school,setSchool] = useState("")
    const [major,setMajor] = useState("")
    const [degree,setDegree] = useState("")
    const save = () =>{
        let temp = {};
        temp.collage = collage
        temp.school = school
        temp.major = major
        temp.degree = degree
        modifyData(temp)
    }
    return(
        <>
            {
                data.map((edu,key)=>{
                    return(
                        <div key={key} style={{marginBottom:"1rem"}}>
                            <Form.Control
                                placeholder={"学校"}
                                onChange={(e)=>{setCollage(e.target.value)}}
                            ></Form.Control>
                            <Form.Control
                                placeholder={"学院"}
                                onChange={(e)=>{setSchool(e.target.value)}}
                            ></Form.Control>
                            <Form.Control
                                placeholder={"专业"}
                                onChange={(e)=>{setMajor(e.target.value)}}
                            ></Form.Control>
                            <Form.Select
                                placeholder={"学位"}
                                onChange={(e)=>{setDegree(e.target.value)}}
                            >
                                <option>选择学位</option>
                                <option>专科</option>
                                <option>本科</option>
                                <option>硕士</option>
                                <option>博士</option>
                            </Form.Select>
                        </div>
                    )
                })
            }
            <Button variant={"primary"} onClick={save}>保存</Button>
            <Button variant={"info"} onClick={addData}>添加</Button>
            <Button variant={"danger"} onClick={deleteData}>删除</Button>
        </>
    )
}
export default Education