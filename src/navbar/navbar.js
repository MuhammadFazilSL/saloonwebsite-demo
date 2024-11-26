import React from 'react'
import './navbar.css'
import logo from '../assets/navbar/logo.png'
import like from '../assets/navbar/Like.png'
import cart from '../assets/navbar/cart.png'
import location from '../assets/home/banner/location.png'
import arrow from '../assets/home/banner/arrow-right.png'
import search from '../assets/home/banner/search-normal.png'
import { useNavigate } from 'react-router-dom';


const Navbar = (props) => {
  const navigate = useNavigate();
  const handleItems = (item) =>{
    props.setNavitem(item)
    console.log(item)
    if(item === "Setup My Business"){
      return navigate(`/setupBusiness`)
    }
    navigate(`/${item}`)
  }
  return (
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
                <img src={like} alt="" />
                <img src={cart} alt="" />
                <button>Login / Sign up</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar