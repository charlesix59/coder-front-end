import {Card, Col, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import request from "../../utils/request";
import {useNavigate} from "react-router";

function HotJob(){
    const [jobs,setJobs] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        request.get("/job/get/all").then(res=>{
            console.log(res.data.data)
            setJobs(res.data.data)
        })
        return()=>{}
    },[])
    const toJob = (id)=>{
        navigate(`/job?id=${id}`)
    }
    // const vars=[
    //     "good",
    //     "nice",
    //     "alpha",
    //     "beta",
    //     "charlie",
    //     "duff",
    //     "Edward",
    //     "Friday",
    //     "George"
    // ]
    return(
        <div style={{textAlign:"center"}}>
            <h2 className="px-2 pt-2 my-2">热招职位</h2>
            <hr/>
            <Row>
                {jobs.map((job)=>(
                    <Col xs={4} className="px-1 pt-1 my-1" key={job.id}>
                        <Card>
                            <Card.Body>
                                <Card.Title onClick={()=>toJob(job.id)}>{job.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{job.company.name}</Card.Subtitle>
                                <Card.Text>
                                    {job.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
export default HotJob