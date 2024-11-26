import React, { useState } from 'react'
import './setupBussiness.css'
import logo from '../../assets/navbar/logo.png'
import bussinessBgimg from '../../assets/setupBussiness/bussiness-bgimg.png'
import scissors from '../../assets/home/explore/scissors.png'
import FeatureCards from '../../utils/featureCards/featureCards'
import phoneImage from '../../assets/setupBussiness/phone-image.png'
import playstoreImg from '../../assets/home/playstore-img.png'
import appstoreImg from '../../assets/home/appstore-img.png'
import appBgimg from '../../assets/setupBussiness/bg-img.png'
import OurSocialmedia from '../../utils/ourSocialmedia/ourSocialmedia'

const SetupBussiness = () => {
    const [activeCard, setactiveCard] = useState(1)
    const [activeCard2, setactiveCard2] = useState(1)
  return (
    <div className="setupBussiness-container">
      <div className="banner-section">
      <h2>Setup your Account in</h2>
        <h2>Just 3 Steps</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Vitae pellentesque quisque nam arcu volutpat mauris. Pellentesque nisi nibh rhoncus sapien turpis adipiscing orci sem feugiat.</p>
        <button>Join for free</button>
        <div className="blur-background"></div>
        <img src={bussinessBgimg} alt="" />
      </div>
      <div className="details-section">
        <span className='details-contents'>
            <h2>The top-rated destination for beauty and wellness</h2>
            <p>Lorem ipsum dolor sit amet consectetur.  </p>
            <p>Vitae pellentesque quisque nam arcu volutpat mauris. </p>
        </span>
        <span className='details-cards'>
            <div>
                <span>
                    <img src={scissors} alt="" />
                    <p>5000+</p>
                    <p>Users</p>
                </span>
                <span>
                    <img src={scissors} alt="" />
                    <p>5000+</p>
                    <p>Stylists and professionals</p>
                </span>
            </div>
            <div>
                <span>
                    <img src={scissors} alt="" />
                    <p>5000+</p>
                    <p>Partner businesses</p>
                </span>
                <span>
                    <img src={scissors} alt="" />
                    <p>5000+</p>
                    <p>Appointments booked</p>
                </span>
            </div>
        </span>
      </div>
      <div className="partnerships-section">
        <h2>Why should you partner with <span>Slaylewks?</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur. Vitae pellentesque quisque nam arcu volutpat mauris. Pellentesque nisi nibh rhoncus sapien turpis adipiscing orci sem feugiat.</p>
        <FeatureCards parentComponent={"partnerships"}/>
      </div>
      <div className="onlineBooking-section">
        <div className="content-area">
            <span  className="content-area-heading">
                <h3><span>Online Booking</span> dolor sit amet consectetur. Aliquet nunc sit.</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Vitae pellentesque quisque nam arcu volutpat mauris. Pellentesque nisi nibh rhoncus adipiscing orci sem feugiat.</p>
            </span>
            <span  className="content-area-cards">
                <div className={activeCard === 1 ? "content-area-card active" : "content-area-card" } onClick={()=>setactiveCard(1)} >
                    <img src={scissors} alt="" />
                    <span>
                        <h4>Online Appointments</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Ac nibh dignissim senectus quam nam. Pretium nunc nec turpis mauris eget donec. Lobortis eget bibendum at ornare.</p>
                    </span>
                </div>
                <div className={activeCard === 2 ? "content-area-card active" : "content-area-card" } onClick={()=>setactiveCard(2)} >
                    <img src={scissors} alt="" />
                    <span>
                        <h4>Online Appointments</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Ac nibh dignissim senectus quam nam. Pretium nunc nec turpis mauris eget donec. Lobortis eget bibendum at ornare.</p>
                    </span>
                </div>
                <div className={activeCard === 3 ? "content-area-card active" : "content-area-card" } onClick={()=>setactiveCard(3)} >
                    <img src={scissors} alt="" />
                    <span>
                        <h4>Online Appointments</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Ac nibh dignissim senectus quam nam. Pretium nunc nec turpis mauris eget donec. Lobortis eget bibendum at ornare.</p>
                    </span>
                </div>
            </span>
        </div>
        <div className="image-area">
            <img src={phoneImage} alt="" />
        </div>
      </div>
      <div className="aboutDashboard-section">
        <div className="image-area">
            <img src={phoneImage} alt="" />
        </div>
        <div className="content-area">
            <span  className="content-area-heading">
                <h3><span>Online Booking</span> dolor sit amet consectetur. Aliquet nunc sit.</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Vitae pellentesque quisque nam arcu volutpat mauris. Pellentesque nisi nibh rhoncus adipiscing orci sem feugiat.</p>
            </span>
            <span  className="content-area-cards">
                <div className={activeCard2 === 1 ? "content-area-card active" : "content-area-card" } onClick={()=>setactiveCard2(1)} >
                    <img src={scissors} alt="" />
                    <span>
                        <h4>Online Appointments</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Ac nibh dignissim senectus quam nam. Pretium nunc nec turpis mauris eget donec. Lobortis eget bibendum at ornare.</p>
                    </span>
                </div>
                <div className={activeCard2 === 2 ? "content-area-card active" : "content-area-card" } onClick={()=>setactiveCard2(2)} >
                    <img src={scissors} alt="" />
                    <span>
                        <h4>Online Appointments</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Ac nibh dignissim senectus quam nam. Pretium nunc nec turpis mauris eget donec. Lobortis eget bibendum at ornare.</p>
                    </span>
                </div>
                <div className={activeCard2 === 3 ? "content-area-card active" : "content-area-card" } onClick={()=>setactiveCard2(3)} >
                    <img src={scissors} alt="" />
                    <span>
                        <h4>Online Appointments</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Ac nibh dignissim senectus quam nam. Pretium nunc nec turpis mauris eget donec. Lobortis eget bibendum at ornare.</p>
                    </span>
                </div>
            </span>
        </div>
      </div>
      <div className="partnerships-section">
        <h2>Why <span>Slaylewks</span> is the best for your beauty salon</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Vitae pellentesque quisque nam arcu volutpat mauris. Pellentesque nisi nibh rhoncus sapien turpis adipiscing orci sem feugiat.</p>
        <FeatureCards parentComponent={"beauty salon"}/>
      </div>
      <div className="appDownload-section">
        <h3>Download <span>the app</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur. Vitae pellentesque quisque nam arcu volutpat mauris. Pellentesque nisi nibh rhoncus sapien turpis adipiscing orci sem feugiat.</p>
        <div className="apps-area">
            <span>
                <span>
                    <img src={logo} alt="" />
                    <p>Business app for professionals</p>
                    <span className='buttons'>
                            <img src={playstoreImg} alt="" />
                            <img src={appstoreImg} alt="" />
                    </span>
                </span>
                <div className="empty-space"></div>
                <img src={appBgimg} alt="" />
            </span>
            <span>
                <span>
                    <img src={logo} alt="" />
                    <p>Business app for professionals</p>
                    <span className='buttons'>
                            <img src={playstoreImg} alt="" />
                            <img src={appstoreImg} alt="" />
                    </span>
                </span>
                <div className="empty-space"></div>
                <img src={appBgimg} alt="" />
            </span>
        </div>
      </div>
      <OurSocialmedia />
    </div>
    
  )
}

export default SetupBussiness