import React from 'react'
import "./JoinMe.css"
import { FaGithub, FaTwitter, FaGlobe, FaLinkedin } from "react-icons/fa";
function JoinMe() {
  return (
    <>
      <div class="btn_wrap">
        <span>Join Me</span>
        <div class="contains">
          <i class="linkedin"><a href='https://www.linkedin.com/in/shivam-katare/'><FaLinkedin className='comp-icons' /></a></i>
          <i class="showwcase"><a href='https://www.showwcase.com/shivam-katare'><FaGlobe className='comp-icons' /></a></i>
          <i class="twitter"><a href='https://twitter.com/Shivamkatare_27'><FaTwitter className='comp-icons' /></a></i>
          <i class="github"><a href='https://github.com/Shivam-Katare'><FaGithub className='comp-icons' /></a></i>
        </div>
      </div>
    </>
  )
}

export default JoinMe
