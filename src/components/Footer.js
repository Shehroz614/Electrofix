import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <h2 className="FooterTitle">ElectroFix</h2>
          <p>I develop websites and web and mobile apps using react and react
                native. I develop websites and web and mobile apps using react and react
                native. </p>
        </div>
        <div>
          <h3>Office</h3>
          <p>Jail Road, Gulberg,<br/>near Meehmood Plaza. <br/>Islamabad</p>
          <p>Electrofix@hotmail.com</p>
          
          <p>+923494977777</p>
        </div>
        <div>
          <h3>Links</h3>
          <div style={{display:"flex",flexDirection:"column", padding:"0"}}>
        <a href="/">Scope</a>
        <a href="/">Services</a>
        <a href="/">Testimonials</a>
        <a href="/">About&nbsp;Us</a>
        <a href="/">Contact</a>
        </div>
        </div>
        <div>
          <h3>Newsletter</h3>
          
          <div className="input">
            <MailOutlineIcon  sx={{padding:"0", margin:"0", fontSize:"18px"}} />
            <input type="email" placeholder="Enter your email id"/>
            <ArrowForwardIcon   sx={{padding:"0", margin:"0", fontSize:"18px"}} />
            </div>

          <div  style={{display:"flex",gap:"20%", marginTop:"10%"}}> <MailIcon/> <TwitterIcon/> <FacebookIcon/> <InstagramIcon/>  </div>
          
        </div>
      </div>
    </>
  );
}

export default Footer;
