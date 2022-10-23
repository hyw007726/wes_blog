import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { NavLink } from "react-router-dom";
export default function Header(){
    return (<div className="Header">
        <div className="profile">
            <div id="profileImgBox">
            <img id="profileImg" src={process.env.PUBLIC_URL+"/profile.jpg"} alt="profile_photo" />
            <div className="iconGroup" style={{"display":"flex"}} >
              <a href={"https://www.linkedin.com/in/wesley-han-yawei/"}><LinkedInIcon  style={{"color":"#0072b1"}} /></a>
            <a href={"https://github.com/hyw007726"}><GitHubIcon style={{"color":"black"}}/></a>
            <a href={"mailto:hanya@tcd.ie"}><EmailIcon style={{"color":"silver"}}/></a>
            
            </div>

            </div>
            <div id="brief">
                <ul>
                    <li>Two-year experience frontend developer</li>
                    <br />
                    <li>CS student at Trinity College Dublin</li>
                    </ul>
                   <NavLink  to="cv"
            style={({ isActive }) =>
            isActive ? {color:"purple","float":"right"} : {color:"blue","float":"right"}
          }>View CV</NavLink>
            </div>
        </div>
        <div className="banner"><div className="title">Wesley's Tech Blog </div><div className='motto'>A little progress each day adds up to great results.</div></div>
       
        <div onClick={()=>alert("To be done")} id="admin">Admin Login</div>
    </div>)
}