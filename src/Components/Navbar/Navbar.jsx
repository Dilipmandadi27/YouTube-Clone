import React from 'react'
import "./Navbar.css"
import { FaBars } from "react-icons/fa6";
import logo from "../../assets/logo1.jpeg"
import mic from "../../assets/mic.png"
import upload from "../../assets/upload.png"
import notify from "../../assets/notification.png"
import userpf from "../../assets/p3.png"
import search from "../../assets/search.png"


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo-area">
           <button icon={<FaBars />}></button>
            <div className="logo">
              <img src={logo} alt="youme-logo" /><span>YoUme</span>
            </div>
        </div>

        <div className="mid-section">
            <div className="search-area" >
            <input type="text" name="search" placeholder='Search' />
            <img src={search} alt="search" />
            </div>
            <div className='mic'>
            <img  src={mic} alt="voice-assistance" />
            </div>
        </div>

        <div className="user-area">
            <img src={upload} alt="upload-img" />
            <img src={notify} alt="notifications" />
            <img className='dp' src={userpf} alt="displaypic" />
        </div>
    
    </nav>
  )
}

export default Navbar
