import React, { useState } from 'react'
import './navbar.css'
import logo from '../assets/navbar/logo.png'
import like from '../assets/navbar/Like.png'
import cart from '../assets/navbar/cart.png'
import location from '../assets/home/banner/location.png'
import arrow from '../assets/home/banner/arrow-right.png'
import search from '../assets/home/banner/search-normal.png'
import { useNavigate } from 'react-router-dom';
import SideBar from './sideBar'


const Navbar = (props) => {
  const navigate = useNavigate();
  const handleItems = (item) =>{
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
    <>
   
    <div  className={props.navItems ? "navbar-container" : "navbar-container change-bg"}>
        <nav className="navbar">
            <img src={logo} alt="" />
            {
                props.navItems ? 
                <div className="navbar-items">
                {
                  props.navItems.map(item => (
                    <p onClick={()=>handleItems(item) } className={props.selectedItem === item ? "active" : ""} key={item} >{item}</p>
                  ))
                }
              </div>
                :
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
            }
        
            <div className="buttons">
                <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  style={{ display: 'block', margin: 'auto' }} 
  className='heart-icon'
>
  <mask
    id="mask0_118_389"
    style={{ maskType: 'luminance' }} // Use camelCase for React style properties
    maskUnits="userSpaceOnUse"
    x="2"
    y="2"
    width="21"
    height="21"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 2.99989H22.4725V22.5009H2V2.99989Z"
      fill="white"
    />
  </mask>
  <g mask="url(#mask0_118_389)">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.82371 12.123C5.22571 16.485 10.7647 20.012 12.2367 20.885C13.7137 20.003 19.2927 16.437 20.6497 12.127C21.5407 9.341 20.7137 5.812 17.4277 4.753C15.8357 4.242 13.9787 4.553 12.6967 5.545C12.4287 5.751 12.0567 5.755 11.7867 5.551C10.4287 4.53 8.65471 4.231 7.03771 4.753C3.75671 5.811 2.93271 9.34 3.82371 12.123ZM12.2377 22.501C12.1137 22.501 11.9907 22.471 11.8787 22.41C11.5657 22.239 4.19271 18.175 2.39571 12.581C2.39471 12.581 2.39471 12.58 2.39471 12.58C1.26671 9.058 2.52271 4.632 6.57771 3.325C8.48171 2.709 10.5567 2.98 12.2347 4.039C13.8607 3.011 16.0207 2.727 17.8867 3.325C21.9457 4.634 23.2057 9.059 22.0787 12.58C20.3397 18.11 12.9127 22.235 12.5977 22.408C12.4857 22.47 12.3617 22.501 12.2377 22.501Z"
      fill="#555150"
    />
  </g>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M18.1537 10.6249C17.7667 10.6249 17.4387 10.3279 17.4067 9.9359C17.3407 9.1139 16.7907 8.4199 16.0077 8.1669C15.6127 8.0389 15.3967 7.6159 15.5237 7.2229C15.6527 6.8289 16.0717 6.6149 16.4677 6.7389C17.8307 7.1799 18.7857 8.3869 18.9027 9.8139C18.9357 10.2269 18.6287 10.5889 18.2157 10.6219C18.1947 10.6239 18.1747 10.6249 18.1537 10.6249Z"
    fill="#555150"
  />
                </svg>
                <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  className='heart-icon'
>
  <path
    d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
    stroke="#555150"
    strokeWidth="1.5"
    strokeMiterlimit="10"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
    stroke="#555150"
    strokeWidth="1.5"
    strokeMiterlimit="10"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
    stroke="#555150"
    strokeWidth="1.5"
    strokeMiterlimit="10"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M9 8H21"
    stroke="#555150"
    strokeWidth="1.5"
    strokeMiterlimit="10"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

                <button>Login / Sign up</button>
            </div>
            
            <div className={props.sidebarOpen ? "navbar-baricon active" : "navbar-baricon"} onClick={()=>props.setsidebarOpen(!(props.sidebarOpen))}>
              <span></span>
              <span></span>
            </div>
        </nav>
    </div>
    </>
  )
}

export default Navbar