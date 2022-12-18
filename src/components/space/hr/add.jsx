import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import request from "../../../utils/request";

function AddJob(e){
    const firstCategories = [
        "后端开发",
        "移动开发测试",
        "运维/技术支持",
        "数据",
        "项目管理",
        "硬件开发",
        "前端开发",
        "通信",
        "电子/半导体",
        "高端技术职位人工智能销售技术支持",
        "其他技术职位"
    ]
    const secondCategories =
        {
            "后端开发": [
                "C++",
                "Java",
                "PHP",
                "c",
                "C#",
                ".NET",
                "Hadoop",
                "Python",
                "Delphi",
                "VB",
                "Perl",
                "Ruby",
                "Node.js",
                "Golang",
                "Erlang",
                "语音/视频/图形开发",
                "数据采集",
                "全栈工程师",
                "GIS工程师",
                "后端开发"
            ],
            "移动开发": [
                "技术美术",
                "Android",
                "ios",
                "Flash开发",
                "JavaScript",
                "U3D",
                "Cocos",
                "UE4",
                "移动开发"
            ],
            "测试": [
                "测试工程师",
                "自动化测试",
                "功能测试",
                "性能测试",
                "测试开发",
                "移动端测试",
                "游戏测试",
                "硬件测试",
                "软件测试",
                "渗透测试"
            ],
            "运维/技术支持": [
                "运维工程师",
                "运维开发工程师",
                "网络工程师",
                "系统工程师",
                "IT技术支持",
                "系统管理员",
                "网络安全",
                "系统安全",
                "DBA"
            ],
            "数据": [
                "数据",
                "ETL工程师",
                "数据仓库",
                "数据开发",
                "数据挖掘",
                "数据分析师",
                "数据架构师"
            ],
            "项目管理": [
                "项目经理/主管",
                "项目助理",
                "项目专员",
                "实施顾问",
                "实施工程师",
                "需求分析工程师",
                "硬件项目经理"
            ],
            "硬件开发": [
                "光学工程师",
                "硬件工程师",
                "嵌入式",
                "自动化",
                "单片机",
                "电路设计",
                "驱动开发系统集成",
                "FPGA开发",
                "DSP开发",
                "ARM开发",
                "PCB工艺",
                "射频工程师"
            ],
            "前端开发": [
                "前端开发工程师",
                "Flash开发"
            ],
            "通信": [
                "通信技术工程师",
                "通信研发工程师",
                "数据通信工程师",
                "移动通信工程师",
                "电信网络工程师",
                "电信交换工程师",
                "有线传输工程师",
                "无线/射频通信工程师",
                "通信电源工程师",
                "通信标准化工程师",
                "通信项目专员",
                "通信项目经理",
                "核心网工程师",
                "通信测试工程师",
                "通信设备工程师",
                "光通信工程师",
                "光传输工程师",
                "光网络工程师"
            ],
            "电子/半导体": [
                "电气工程师",
                "电气设计工程师",
                "电子工程师",
                "集成电路IC设计",
                "FAE",
                "IC验证工程师"
            ],
            "高端技术职位人工智能销售技术支持": [
                "高端技术职位",
                "技术经理",
                "技术总监",
                "测试经理架构师",
                "CTO",
                "运维总监",
                "技术合伙人"
            ],
            "其他技术职位": [
                "其他技术职位"
            ]
        }
    const education = [
        "初中及以下",
        "中专/中技",
        "高中",
        "大专",
        "本科",
        "硕士",
        "博士"
    ]
    const experience = [
        "在校生",
        "应届生",
        "经验不限",
        "1年以内",
        "1-3年",
        "3-5年",
        "5-10年",
        "10年以上"
    ]
    const scale = [
        9,
        99,
        499,
        999,
        9999,
        99999
    ]
    const categoriesList = firstCategories.map((categories, key) => (
        <option key={key} value={categories}>{categories}</option>
    ))
    const eduList = education.map((text, key) => (
        <option key={key} value={text}>{text}</option>
    ))
    const expList = experience.map((text, key) => (
        <option key={key} value={text}>{text}</option>
    ))
    const scaleList = scale.map((text, key) => (
        <option key={key} value={text}>{(text + 1) / 10}-{text}</option>
    ))
    let [secondC,setSecondC] = useState(["请先选择顶级"])
    let selectFirstCategories=(e) =>{
        const fistC = e.target.value
        setFirstCategory(fistC)
        setSecondC(secondCategories[fistC])
    }
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [recruitNumber,setRecruitNumber] = useState();
    const [experienceRequirement,setExperienceRequirement] = useState("")
    const [educationRequirement,setEducationRequirement] = useState("")
    const [firstCategory,setFirstCategory] = useState()
    const [secondCategory,setSecondCategory] = useState()
    const addNewJob=()=>{
        request.post("/hr/add/job",{
            "token":localStorage.getItem("token"),
            "name":name,
            "description":description,
            "recruitNumber":recruitNumber,
            "experienceRequirement":experienceRequirement,
            "educationRequirement":educationRequirement,
            "firstCategory":firstCategory,
            "secondCategory":secondCategory,
            "tag":"无"
        }).then(res=>{
            console.log(res);
            if(res.data.success){
                alert("修改成功")
            }
        })
    }
    return(
        <div>
            <Form.Control placeholder={"职位名称"} className="px-1 pt-1 my-1"
                onChange={(e)=>{setName(e.target.value)}}/>

            <Form.Control as="textarea" rows={3} placeholder={"职位描述"} className="px-1 pt-1 my-1"
                          onChange={(e)=>{setDescription(e.target.value)}}/>

            <Form.Select  htmlSize={1} className="px-1 pt-1 my-1" onChange={selectFirstCategories}>
                <option>顶级职位分类</option>
                {categoriesList}
            </Form.Select>

            <Form.Select htmlSize={1} className="px-1 pt-1 my-1"
                         onChange={(e)=>{setSecondCategory(e.target.value);}}>
                <option>次级职业分类</option>
                {secondC.map((text,key)=>(
                    <option key={key} value={text}>{text}</option>)
                )}
            </Form.Select>

            <Form.Select htmlSize={1} className="px-1 pt-1 my-1"
                         onChange={(e)=>{setEducationRequirement(e.target.value);}}>
                <option>学历要求</option>
                {eduList}
            </Form.Select>

            <Form.Select htmlSize={1} className="px-1 pt-1 my-1"
                         onChange={(e)=>{setExperienceRequirement(e.target.value);}}>
                <option>工作经验</option>
                {expList}
            </Form.Select>

            <Form.Select htmlSize={1} className="px-1 pt-1 my-1"
                         onChange={(e)=>{setRecruitNumber(e.target.value);}}>
                <option>招募人数</option>
                {scaleList}
            </Form.Select>
            <Button variant={"primary"} onClick={addNewJob}>保存</Button>
        </div>
    )
}
export default AddJob