import {Button} from "react-bootstrap";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import {useRef} from "react";
import GenerateBody from "./generateBody";
function Create(){
    const jspdf = new jsPDF("p", 'pt', 'a4')
    const pdfBody = useRef(null);
    const createPdf=()=>{
        const body = pdfBody.current
        console.log(body)
        html2canvas(body, {
            dpi: 288
        }).then(canvas=>{
            const contentWidth = canvas.width
            const contentHeight = canvas.height

            //一页pdf显示html页面生成的canvas高度;
            const pageHeight = (contentWidth / 595.28) * 841.89
            //未生成pdf的html页面高度
            let leftHeight = contentHeight
            //页面偏移
            let position = 0
            //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
            const imgWidth = 595.28
            const imgHeight = (592.28 / contentWidth) * contentHeight

            const pageData = canvas.toDataURL('image/jpeg', 1.0)
            if (leftHeight < pageHeight) {
                jspdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
                // 为下一条数据添加空白页
            } else {
                while (leftHeight > 0) {
                    jspdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                    leftHeight -= pageHeight
                    position -= 841.89
                    //避免添加空白页
                    if (leftHeight > 0) {
                        jspdf.addPage()
                    }
                }
            }
            jspdf.save("简历.pdf")
        })
    }
    return(
        <>
            <GenerateBody ref={pdfBody}/>
            <Button onClick={createPdf}>生成简历</Button>
        </>
    )
}
export default Create