import {Button, Card, Col, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import request from "../../utils/request";
import {useNavigate} from "react-router";

function Apply(){
    const [application,setApplication] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        request.post("/user/get/apply",{"id":localStorage.getItem("token")}).then(res=>{
            console.log(res.data.data)
            setApplication(res.data.data);
        })
        return()=>{}
    },[])
    const variantState = {
        "applying":"primary",
        "pass":"success",
        "refer":"danger"
    }
    const toJob = (id)=>{
        navigate(`/job?id=${id}`)
    }
    return(
        <div>
            {
                application.map((job,key)=>(
                    <Card key={key} style={{marginBottom:"1rem"}}>
                        <Card.Header onClick={()=>{toJob(job.id)}}>{job.jobName}</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col className={"col-9"}>
                                    <Card.Text>
                                        {job.description}
                                    </Card.Text>
                                </Col>
                                <Col>
                                    <Button variant={variantState[job.state]}>进行中</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}
export default Apply