import React, {useEffect, useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import Summary from "./summary";
import Education from "./education";

const GenerateBody = React.forwardRef((props,ref)=>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [workPlace,setWorkPlace] = useState("")
    const [job,setJob] = useState("")
    const [summary,setSummary] = useState([""]);
    const [education,setEducation] = useState([{
        "degree":"",
        "collage":"",
        "school":"",
        "major":""
    }]);
    const [project,setProject] = useState([""])
    useEffect(()=>{console.log(project)},[project])
    return(
        <Row>
            <Col>
                <h3>个人信息</h3>
                <Form.Control
                    placeholder={"真实姓名"}
                    onChange={(e)=>{setName(e.target.value)}}
                ></Form.Control>
                <Form.Control
                    placeholder={"常用邮箱"}
                    onChange={(e)=>{setEmail(e.target.value)}}
                ></Form.Control>
                <Form.Control
                    placeholder={"常用手机号"}
                    onChange={(e)=>{setPhone(e.target.value)}}
                ></Form.Control>
                <Form.Control
                    placeholder={"意向工作地点"}
                    onChange={(e)=>{setWorkPlace(e.target.value)}}
                ></Form.Control>
                <Form.Control
                    placeholder={"意向岗位"}
                    onChange={(e)=>{setJob(e.target.value)}}
                ></Form.Control>
                <h3>个人总结</h3>
                <Summary data={summary} setData={setSummary}/>
                <h3>教育经历</h3>
                <Education data={education} setData={setEducation}/>
                <Summary data={project} setData={setProject}/>
            </Col>
            <Col ref={ref}>
                <div style={{textAlign:"center"}}>
                    <h1>{name}</h1>
                    <p>{email} | {phone}</p>
                    <p>{workPlace} | {job}</p>
                </div>
                <div>
                    <h5 style={{fontWeight:"bold"}}>个人总结</h5>
                    <hr/>
                    <ul>
                        {
                            summary.map((text,key)=>{
                                return(
                                    <li key={key}>{text}</li>
                                )
                            })
                        }
                    </ul>
                    <h5 style={{fontWeight:"bold"}}>教育经历</h5>
                    <hr/>
                    <ul>
                        {
                            education.map((edu,key)=>{
                                return(
                                    <div>
                                        <p style={{fontWeight:"bold",fontSize:"1.2rem"}}>{edu.collage}</p>
                                        <p>{edu.major} {edu.school} {edu.degree}</p>
                                    </div>
                                )
                            })
                        }
                    </ul>
                    <h5 style={{fontWeight:"bold"}}>项目经验</h5>
                    <ol>
                        {
                            project.map((text,key)=>{
                                return(
                                    <li key={key}>{text}</li>
                                )
                            })
                        }
                    </ol>
                </div>
            </Col>
        </Row>
    )
})
export default GenerateBody