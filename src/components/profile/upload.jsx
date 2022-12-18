import {Button, Card, Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import request from "../../utils/request";

function Upload(){
    let file;
    const checkFileFormat = (name) => {
        let suffix = name.substr(name.lastIndexOf('.') + 1).toLowerCase();
        let file_format = ['pdf','doc','docx'];
        //看看这个后缀存不存在于file_format数组当中
        return file_format.includes(suffix);

    }
    const selectFile = (e) =>{
        console.log(e.target.files)
        file = e.target.files[0]
    }
    const uploadFile = ()=>{
        if (!file){
            alert("请选择文件！")
            return;
        }
        if(!checkFileFormat(file.name)){
            alert("请选择正确格式的文件")
            return;
        }
        const formData = new FormData();
        formData.append("uploadFile",file);
        formData.append("token",localStorage.getItem("token"))
        request.post("/upload", formData,{
            'Content-type' : 'multipart/form-data'
        }).then(res=>{
            if (res.data.msg==="上传成功"&&res.data.success){
                alert("上传成功")
            }
            else{
                alert(res.data.msg)
            }
            console.log(res)
        })
    }
    return(
        <>
            <div style={{textAlign:"center"}}>
                <Card style={{ width: '40rem' , margin:"25vh auto"}}>
                    <Card.Body>
                        <Card.Title>请上传您的简历</Card.Title>
                        <Card.Text>
                            支持DOC、DOCX、PDF格式，文件大小在8MB以内
                        </Card.Text>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control type="file" onChange={selectFile}/>
                        </Form.Group>
                        <Button variant="primary px-2 pt-2 my-2" onClick={uploadFile}>立即上传</Button>
                        <br/>
                        <NavLink to={'/profile/create'}>
                            <Button variant="outline-primary">没有简历？<i>在线填写</i></Button>
                        </NavLink>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
export default Upload