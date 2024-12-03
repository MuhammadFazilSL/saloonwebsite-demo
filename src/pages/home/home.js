import React from 'react'
import './home.css'
import personImg from '../../assets/person-img.png'
import location from '../../assets/home/banner/location.png'
import arrow from '../../assets/home/banner/arrow-right.png'
import search from '../../assets/home/banner/search-normal.png'
import Cards from '../../utils/cards/cards'
import offerImage1 from '../../assets/home/explore/offer-image1.png'
import offerImage2 from '../../assets/home/explore/offer-image2.png'
import FeatureCards from '../../utils/featureCards/featureCards'
import worksImg1 from '../../assets/home/works-img1.png'
import WorksCards from '../../utils/worksCards/worksCards'  
import appImgbg from '../../assets/home/app-imgbg.png'
import playstoreImg from '../../assets/home/playstore-img.png'
import appstoreImg from '../../assets/home/appstore-img.png'
import phonesImg from '../../assets/home/phones-img.png'
import testBgimg1 from '../../assets/home/testimonial/test-bgimg1.png'
import testBgimg2 from '../../assets/home/testimonial/test-bgimg2.png'
import OurSocialmedia from '../../utils/ourSocialmedia/ourSocialmedia'

const Home = () => {
  return (
    <div className='home-container'>
        <div className="banner-section">
            <span className='content'>
                <h2>Discover & Book local</h2>
                <h3>Beauty Salons</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Sit lectus vitae aenean egestas in ut velit turpis justo. Fermentum dignissim massa vitae ut condimentum.</p>
                <span>
                    <div className="dropdown">
                        <span>
                            <img src={location} alt="" />
                            <p>Location</p>
                        </span>
                        <img src={arrow} alt="" />
                    </div>
                    <div className="line"></div>
                    <span  className="search">
                        <img src={search} alt="" />
                    <input type="text" placeholder='Search for any services, etc...' />
                    </span>
                </span>
            </span>
            <span className="image">
                <img src={personImg} alt="" />
            </span>
        </div>
        <div className="explore-section">
            <span className='explore-services'>
                <h2>Explore <span>Services</span></h2>
               <Cards />
            </span>
            <span  className='best-offers'>
                <h2>Best <span>Offers</span></h2>
                <div className="offer-cards">
                    <img src={offerImage1} alt="" />
                    <img src={offerImage2} alt="" />
                    <img src={offerImage1} alt="" />
                    <img src={offerImage2} alt="" />
                </div>
            </span>
        </div>
        <div className="ourFeatures-section">
            <h2>Our <span>Features</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur. Vitae pellentesque quisque nam arcu volutpat mauris. Pellentesque nisi nibh rhoncus sapien turpis adipiscing orci sem feugiat.</p>
            <FeatureCards parentComponent={"ourFeatures"} />
        </div>
        <div className="working-section">
            <span className='img-area'>
                <span>
                    <h3>Lorem ipsum dolor</h3>
                    <h3>How it <span>Works</span></h3>
                </span>
                <img src={worksImg1} alt="" />
            </span>
            <span className='cards-area'>
                <p>Lorem ipsum dolor sit amet consectetur. Vitae pellentesque quisque nam arcu volutpat mauris. Pellentesque nisi nibh rhoncus adipiscing orci sem feugiat.</p>
               <WorksCards />
            </span>
        </div>
        <div className="app-section">
            <div className="bg-container">
                <span className='content-area'>
                    <div>
                        <h2>Lorem ipsum dolor sit amet risus consectetur</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Convallis risus justo turpis in cras. Aliquet varius sed egestas non. Venenatis turpis pretium massa sit egestas venenatis neque. Semper aliquam nibh ut et pellentesque.</p>
                        <span className='buttons'>
                            <img src={playstoreImg} alt="" />
                            <img src={appstoreImg} alt="" />
                        </span>
                    </div>
                    <img src={phonesImg} alt="" />
                </span>
                <span  className='image-area'>
                    <img src={appImgbg} alt="" />
                </span>
            </div>
        </div>
        <div className="testimonial-section">
            <img src={testBgimg1} alt="" />
            <div className="testimonial-content">
                <span>
                    <h2>Testimonial</h2>
                    <h6>Lorem ipsum dolor sit amet consectetur. Convallis risus justo turpis in cras.</h6>
                    <p>Lorem ipsum dolor sit amet consectetur. Aliquet neque consequat eget eget iaculis sit varius metus platea. Neque turpis imperdiet pharetra augue egestas suspendisse in ac eget. Sagittis suspendisse congue facilisis nunc donec mattis nunc turpis. Vel aliquet feugiat lacus tincidunt et. Amet semper interdum dolor viverra. Laoreet orci pulvinar vel ligula vehicula neque nibh integer. Enim tristique sed eu ut et congue. Faucibus dui lacus neque at. </p>
                    <span>
                        <div>
                            <p>Jenny Wilson</p>
                            <p>Director, AGS</p>
                        </div>
                        <div>
                            <img src={arrow} alt="" />
                            <img src={arrow} alt="" />
                        </div>
                    </span>
                </span>
                <div>
                    <span className='img-bg-box'></span>
                <img src={worksImg1} alt="" />
                </div>
            </div>
            <img src={testBgimg2} alt="" />
        </div>
        <OurSocialmedia />
    </div>
  )
}

export default Home