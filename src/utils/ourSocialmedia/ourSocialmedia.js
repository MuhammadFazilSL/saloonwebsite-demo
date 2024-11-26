import React from 'react'
import './ourSocialmedia.css'
import img1 from '../../assets/home/socialmedia/img1.png'
import img2 from '../../assets/home/socialmedia/img2.png'
import img3 from '../../assets/home/socialmedia/img3.png'
import img4 from '../../assets/home/socialmedia/img4.png'
import img5 from '../../assets/home/socialmedia/img5.png'

const OurSocialmedia = () => {
  return (
    <div className="socialMedia-section">
        <p>Our <span>Social Media</span></p>
      <span className="socialMedia-images-container">
      <div className="socialMedia-images">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
        </div>
      </span>
    </div>
  )
}

export default OurSocialmedia