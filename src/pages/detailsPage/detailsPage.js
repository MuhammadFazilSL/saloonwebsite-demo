import React, { useState } from 'react'
import './detailsPage.css'
import Navbar from '../../navbar/navbar'
import rightArrow from '../../assets/home/banner/arrow-right.png'
import Rattings from '../../utils/rattings/rattings'
import call from '../../assets/explore/detailsPage/call.png'
import map from '../../assets/explore/detailsPage/map.png'
import share from '../../assets/explore/detailsPage/share.png'
import sms from '../../assets/explore/detailsPage/sms.png'
import search from '../../assets/home/banner/search-normal.png'
import timer from '../../assets/explore/detailsPage/timer.png'
import closeIcon from '../../assets/explore/detailsPage/close-square.png'
import chairsBarbershop from '../../assets/explore/detailsPage/chairs-barbershop.png'
import Heart from '../../assets/explore/detailsPage/Heart.png'
import image110 from '../../assets/explore/detailsPage/image-110.png'
import image111 from '../../assets/explore/detailsPage/image-111.png'
import filter from '../../assets/explore/Filter.png'
import maleStudent from '../../assets/explore/detailsPage/male-student-1.png'
import trash from '../../assets/explore/detailsPage/trash.png'

const DetailsPage = () => {
    const [selectedButton, setselectedButton] = useState("Services")
    const buttons = ["Services","Review","Gallery","Details"]
    const serviceCards = [
        {
            service: "Hair Cut1",
            genderIcon: maleStudent,
            timerIcon: timer,
            gender: "Male",
            timing: "15 Minutes",
            content: "Lorem ipsum dolor consectetur. Justo fames pretium placerat donec",
            rate: "₹200",
            oldRate: "240",
            off: "(30% off)",
            button: "Add"
        },
        {
            service: "Hair Cut2",
            genderIcon: maleStudent,
            gender: "Male",
            timerIcon: timer,
            timing: "15 Minutes",
            content: "Lorem ipsum dolor consectetur. Justo fames pretium placerat donec",
            rate: "₹200",
            oldRate: "240",
            off: "(30% off)",
            button: "Add"
        },
        {
            service: "Hair Cut3",
            genderIcon: maleStudent,
            gender: "Male",
            timerIcon: timer,
            timing: "15 Minutes",
            content: "Lorem ipsum dolor consectetur. Justo fames pretium placerat donec",
            rate: "₹200",
            oldRate: "240",
            off: "(30% off)",
            button: "Add"
        },
        {
            service: "Hair Cut4",
            genderIcon: maleStudent,
            gender: "Male",
            timerIcon: timer,
            timing: "15 Minutes",
            content: "Lorem ipsum dolor consectetur. Justo fames pretium placerat donec",
            rate: "₹200",
            oldRate: "240",
            off: "(30% off)",
            button: "Add"
        },
        {
            service: "Hair Cut5",
            genderIcon: maleStudent,
            timerIcon: timer,
            gender: "Male",
            timing: "15 Minutes",
            content: "Lorem ipsum dolor consectetur. Justo fames pretium placerat donec",
            rate: "₹200",
            oldRate: "240",
            off: "(30% off)",
            button: "Add"
        },
        {
            service: "Hair Cut6",
            genderIcon: maleStudent,
            timerIcon: timer,
            gender: "Male",
            timing: "15 Minutes",
            content: "Lorem ipsum dolor consectetur. Justo fames pretium placerat donec",
            rate: "₹200",
            oldRate: "240",
            off: "(30% off)",
            button: "Add"
        },
    ]
    const [addedServices, setaddedServices] = useState([
        {
            service: "Hair Cut",
            genderIcon: maleStudent,
            timerIcon: timer,
            gender: "Male",
            timing: "15 Minutes",
            content: "Lorem ipsum dolor consectetur. Justo fames pretium placerat donec",
            rate: "₹200",
            off: "(30% off)",
            button: "Add"
        }
    ])
    let total = 0
    addedServices.forEach(item => {
        total = Number(total) + Number((item.rate).split("₹")[1])
    })
    const addServices = (item) =>{
        console.log("hkjhkhk",item)
        setaddedServices(oldArray => [...oldArray,item])
    }
    const removeItem = (index) =>{
        addedServices.splice(index,1)
        setaddedServices(()=>[...addedServices])

    }
    console.log(addedServices)
  return (
    <>
      <Navbar />
    <div className="detailsPage-container">
        <span className="detailsPage-path">
            <p>Home</p>
            <img src={rightArrow} alt="" />
            <p>Chennai</p>
            <img src={rightArrow} alt="" />
            <p>Naturals Kodambakkam</p>
        </span>
        <div className="heading-icons">
            <div className="headings-section">
                <h2>Naturals Kodambakkam</h2>
                <span  className="headings-addess">
                    <p>No. 7,Main Road, Kodambakkam, Chennai - 600 012</p>
                    <p>Open</p>
                    <p>Open</p>
                </span>
                <Rattings ratings={"4.3"} reviews={"4.3 (432 Reviews)"}/>
            </div>
            <div className="icons-section">
                <img src={call} alt="" />
                <img src={sms} alt="" />
                <img src={map} alt="" />
                <img src={share} alt="" />
                <img src={Heart} alt="" />
            </div>
        </div>
        <div className="images-area">
            <img src={chairsBarbershop} alt="" />
            <span>
                <img src={image110} alt="" />
                <img src={image111} alt="" />
                <button>See all images</button>
            </span>
        </div>
        <div className="services-billings">
            <span className="service-area">
                <div className="service-buttons">
                    {
                        buttons.map(item => (
                            <p className={item === selectedButton ? "active-button" : ""} onClick={()=>setselectedButton(item)}>{item}</p>
                        ))
                    }
                </div>
                <span  className="service-contents">
                <h2>{selectedButton}</h2>
                 <div  className="inputs-buttons">
                 <span>
                    <img src={search} alt="" />
                   <input type="text" placeholder='Search any service...' />
                   <img src={closeIcon} alt="" />
                   </span>
                   <button className='filter-btn'>
                        <img src={filter} alt="" />
                        Filter
                    </button>
                 </div>
                {
                    serviceCards.map(item => (
                        <div className="serviceCards">
                            <span>
                                <h2>{item.service}</h2>
                                <span>
                                    <img src={item.genderIcon} alt="" />
                                    <p>{item.gender}</p>
                                    <div className="dot"></div>
                                    <img src={item.timerIcon} alt="" />
                                    <p>{item.timing}</p>
                                </span>
                                <p>{item.content}</p>
                            </span>
                            <span>
                                <p>{item.rate} <span>{item.oldRate}</span> <span>{item.off}</span> </p>
                                <button onClick={()=>addServices(item)} >Add</button>
                            </span>
                        </div>
                    ))
                }
                
                </span>
            </span>
            <span className="billing-area">
                <h2>Naturals Kodambakkam</h2>
                {
                    addedServices.map((item,index) => (
                        <div className="addedServices-cards">
                          <span>
                          <h2>{item.service}</h2>
                                <span>
                                    <img src={item.genderIcon} alt="" />
                                    <p>{item.gender}</p>
                                    <div className="dot"></div>
                                    <img src={item.timerIcon} alt="" />
                                    <p>{item.timing}</p>
                                </span>
                          </span>
                                <img src={trash} alt="" onClick={()=>removeItem(index)} />
                                <p>{item.rate}</p>
                        </div>
                    ))
                }
                <div className="line"></div>
                <span className="total">
                    <p>Total</p>
                    <p>₹{total}</p>
                </span>
                <button className="view-cart">View cart</button>
                <p className="billing-area-p">Or</p>
                <button className="clear-button">Clear</button>
            </span>
        </div>
    </div>
    </>
  )
}

export default DetailsPage