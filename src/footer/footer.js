import React from 'react'
import './footer.css'
import logo from '../assets/navbar/logo.png'

const Footer = () => {
    const footerContant1 = ["About Us","Explore","Business Page","Support Center"]
    const footerContant2 = ["Terms of use","Privacy Policy","Cancellation and Reschedule","Cookie Policy"]
    const footerContant3 = ["info@slaylewks.com"]

  return (
    <div className="footer-section">
       <div className="footer-container">
       <div className="footer-logo">
           <img src={logo} alt="" />
           <p>Lorem ipsum dolor sit amet consectetur. Convallis risus justo turpis. Aliquet varius sed egestas non.</p>
        </div>
        <div className="footer-content">
            <span>
                <h3>Company</h3>
                {
                    footerContant1.map(item => (
                        <p>{item}</p>
                    ))
                }
            </span>
            <span>
                <h3>Company</h3>
                {
                    footerContant2.map(item => (
                        <p>{item}</p>
                    ))
                }
            </span>
            <span>
                <h3>Company</h3>
                {
                    footerContant3.map(item => (
                        <p>{item}</p>
                    ))
                }
            </span>
        </div>
       </div>
       <div className="line"></div>
       <div className="footer-credits">
       © 2023 All Rights Reserved by Slaylewks India Pte. Ltd.
       </div>
    </div>
  )
}

export default Footer