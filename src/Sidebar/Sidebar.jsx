import ArticleList from "./ArticleList"
import SideBorder from "./SideBorder"
import React from 'react';
export default function Sidebar(props){
    const [top,setTop]=React.useState("")
    window.addEventListener('scroll',(e)=>{
        // console.log(window.scrollY,window.innerHeight)
        if(window.scrollY<window.innerHeight/5){
            setTop(window.innerHeight/5-window.scrollY+'px')
        }
        
    })
    if(props.clp.collapsed){
        return (<div  className="SideBorderCollapsed" style={{"top":top}}><SideBorder  clp={props.clp} /></div>)
    }else{
        return (<div className="Sidebar" style={{"top":top}}>
        <ArticleList className="ArticleList" articleList={props.articleList}/>
        <SideBorder  clp={props.clp} />
        </div>)
    }

}