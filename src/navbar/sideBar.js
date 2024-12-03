import React from 'react'
import './sideBar.css'
import logo from '../assets/navbar/logo.png'
import like from '../assets/navbar/Like.png'
import cart from '../assets/navbar/cart.png'
import { useNavigate } from 'react-router-dom'
import location from '../assets/home/banner/location.png'
import arrow from '../assets/home/banner/arrow-right.png'
import search from '../assets/home/banner/search-normal.png'

const SideBar = (props) => {
  const navigate = useNavigate()
  const handleNavigation = (item) =>{
    props.setsidebarOpen(!(props.sidebarOpen))
    props.setNavitem(item)
    console.log(item)
    if(item === "Setup My Business"){
      return navigate(`/saloonwebsite-demo/setupBusiness`)
    }if(item === "About Us"){
      return
    }
    navigate(`/saloonwebsite-demo/${item}`)
  }
  return (
    <div className="sidebar-container">
      <div className= {props.sidebarOpen ? "mobile-view visible" : "mobile-view"}  >
        <span className='logo-items'>
          <span>
                <img src={logo} alt="" />
                <div>
                  
                <img src={like} alt="" />
                <img src={cart} alt="" />
                </div>
          </span>
          <span>
                <div className="dropdown">
                    <span>
                        <img src={location} alt="" />
                        <p>57, Ramanar street...</p>
                    </span>
                    <img src={arrow} alt="" />
                </div>
                <div className="line"></div>
                <span  className="search">
                    <img src={search} alt="" />
                <input type="text" placeholder='Search for any services, etc...' />
                </span>
            </span>
         <div className="mobile-navbar-items">
            {
              props.navItems.map(item => (
                <p  className={props.selectedItem === item ? "active" : ""} key={item} onClick={()=>handleNavigation(item)} >{item}</p>
              ))
            }
          </div>
        </span>
    <div className="mobile-buttons-area">
    <button>Login / Sign up</button>
    </div>
  </div>
    </div>
  )
}

export default SideBar