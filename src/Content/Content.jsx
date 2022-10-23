import { useLoaderData,useOutletContext } from "react-router-dom";
import React from 'react';
// import { PDFReader } from 'reactjs-pdf-reader';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import ReactMarkdown from 'react-markdown';
import Footer from "../Footer/Footer";

export default function Content(){
  var [md, setMd]=React.useState("Loading...")
  
  const props=useOutletContext()
  const params=useLoaderData()
  let art=params.article
  React.useEffect(()=>{
    if(art=="cv"){
      return
    }
    fetch(`articles/${art}.md`).then(res=>{
        return res.text()
      }).then(data=>{
        setMd(data)
      })
    })
  // var cv=<PDFReader scale="1.2" url="/~hanya/wes_blog/Han Yawei's CV.pdf"/>
  var cv =  <div className="pdf"><Document externalLinkRel="_blank" externalLinkTarge="_blank" file={process.env.PUBLIC_URL+"/Han Yawei's CV.pdf"}>
  <Page pageNumber={1} scale={1.5} />
</Document>
</div> 
  const defaultContent=(
  <div>
    <h1 style={{"width":"100%","textAlign":"center"}}>{art}</h1>
    <br></br>
    <ReactMarkdown children={md}></ReactMarkdown>
    <br></br>
    <br/>
    <br/>
<h5>Date created: 2022-10-5</h5>
<h5>Last modified: 2022-10-5 13:34</h5></div>

)
  // console.log(params)

    return (<div className="Content" style={props.collapsed?{marginLeft:"4vw",width:"92vw"}:{marginLeft:"21vw"}}>
       { art=="cv"?cv:defaultContent}
<div className='table' style={props.collapsed?{marginLeft:"-10vw"}:{}}>

<Footer></Footer>

</div>
    </div>)
}