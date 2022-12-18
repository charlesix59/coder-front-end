import {Badge, Button} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import request from "../../utils/request";

function Job(){
    const [searchParams] = useSearchParams();
    const [job,setJob] = useState({
        "name":"后端工程师",
        "tag":"后端开发",
        "company":{
            "name":"阿里巴巴",
            "legalPerson":"马云"
        }
    })
    const id = searchParams.get("id");
    const submitApplication = ()=>{
        request.post("/user/apply",{
            "userId":localStorage.getItem("token"),
            "jobId":id
        }).then(res=>{
            console.log(res)
            if(res.data.success){
                alert("投递成功")
            }
        })
    }
    useEffect(()=>{
        request.post("/job/get/one",{"id":id}).then(res=>{
            console.log(res.data.data)
            setJob(res.data.data)
        })
        return()=>{}
    },[id])

    return(
        <>
            <div className="px-1 pt-1 my-1 text-center">
                <h1 className="display-4 fw-bold">{job.name}</h1>
                <Button variant="primary" onClick={submitApplication}>递交申请</Button>
                <br/>
                <hr/>
            </div>
            <h2>职位描述</h2>
            <h5>
                <Badge bg="secondary" style={{marginRight:"1rem"}}>{job.tag}</Badge>
            </h5>
            <p>
                {job.description}
            </p>
            <h2>公司介绍</h2>
            <div>
                公司名称：{job.company.name||""}<br/>
                法人：{job.company.legalPerson||""}
            </div>
        </>

    )
}
export default Job