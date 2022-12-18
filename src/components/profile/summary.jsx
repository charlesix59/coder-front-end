import React from "react";
import {Button, Form, InputGroup} from "react-bootstrap";
function Summary({data,setData}){
    const modifyData = (text,key)=>{
        let temp = JSON.parse(JSON.stringify(data))
        temp[key]=text
        setData(temp)
    }
    const addData = ()=>{
        let temp = JSON.parse(JSON.stringify(data))
        temp.push("")
        setData(temp)
    }
    const deleteData = (index) =>{
        let temp = JSON.parse(JSON.stringify(data))
        temp.splice(index,1)
        setData(temp)
    }
    return(
        <>
            {
                data.map((s,key)=>{
                    return(
                        <InputGroup key={key}>
                            <Form.Control
                                as={"textarea"}
                                rows={1}
                                onChange={(e)=>{modifyData(e.target.value,key)}}
                            ></Form.Control>
                            <Button variant={"info"} onClick={addData}>新增</Button>
                            <Button variant={"danger"} onClick={()=>deleteData(key)}>删除</Button>
                        </InputGroup>
                    )
                })
            }
        </>
    )
}
export default Summary