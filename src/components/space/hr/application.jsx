import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import request from "../../../utils/request";
import {Button, Card, Col, Row} from "react-bootstrap";

function ShowApplication(){
    const [application,setApplication] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        request.post("/hr/get/application",{"id":localStorage.getItem("token")}).then(res=>{
            console.log(res)
            setApplication(res.data.data);
        })
        return()=>{}
    },[])
    const acceptApplication = (index) =>{
        const userJob = application[index].application;
        request.post("hr/modify/application",{
            "userId":userJob.userId,
            "jobId":userJob.jobId,
            "lastModifyDate":new Date(),
            "cancel":false,
            "state":"pass"
        }).then(res=>{
            console.log(res)
            if(res.data.success){
                alert("修改成功")
                navigate(0)
            }
        })
    }
    const rejectApplication = (index) =>{
        const userJob = application[index].application;
        request.post("hr/modify/application",{
            "userId":userJob.userId,
            "jobId":userJob.jobId,
            "lastModifyDate":new Date(),
            "cancel":false,
            "state":"reject"
        }).then(res=>{
            console.log(res)
            if(res.data.success){
                alert("修改成功")
                navigate(0)
            }
        })
    }
    const getProfile = (userId)=>{
        request.post("/download",{
            "userId":userId
        }).then(e=>{
            console.log(e)
            if (e.data.success){
                window.open("http://101.43.161.114:8080"+e.data.path,"_blank")
            } else {
                alert("该用户没有上传简历")
            }
        })
    }
    // const toJob = (id)=>{
    //     navigate(`/job?id=${id}`)
    // }
    return(
        <div>
            {
                application.map((application,key)=>(
                    <Card key={key} style={{marginBottom:"1rem"}}>
                        <Card.Header>{application.job.name}</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col className={"col-8"}>
                                    <Button variant={"info"} onClick={()=>{
                                        getProfile(application.application.userId)
                                    }}>查看简历</Button>
                                </Col>
                                <Col>
                                    <Button variant={"success"} onClick={()=>acceptApplication(key)}>接受申请</Button>
                                </Col>
                                <Col>
                                    <Button variant={"danger"} onClick={()=>rejectApplication(key)}>拒绝申请</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}
export default ShowApplication