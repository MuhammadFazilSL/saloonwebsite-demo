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
            <svg xmlns="http://www.w3.org/2000/svg" className='headings-section-icon' width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.05 14.95L9.2 16.8C8.81 17.19 8.19 17.19 7.79 16.81C7.68 16.7 7.57 16.6 7.46 16.49C6.43 15.45 5.5 14.36 4.67 13.22C3.85 12.08 3.19 10.94 2.71 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C10.83 13.32 10.94 13.42 11.04 13.52C11.44 13.91 11.45 14.55 11.05 14.95Z" fill="#120400"/>
                <path d="M21.9701 18.33C21.9701 18.61 21.9201 18.9 21.8201 19.18C21.7901 19.26 21.7601 19.34 21.7201 19.42C21.5501 19.78 21.3301 20.12 21.0401 20.44C20.5501 20.98 20.0101 21.37 19.4001 21.62C19.3901 21.62 19.3801 21.63 19.3701 21.63C18.7801 21.87 18.1401 22 17.4501 22C16.4301 22 15.3401 21.76 14.1901 21.27C13.0401 20.78 11.8901 20.12 10.7501 19.29C10.3601 19 9.9701 18.71 9.6001 18.4L12.8701 15.13C13.1501 15.34 13.4001 15.5 13.6101 15.61C13.6601 15.63 13.7201 15.66 13.7901 15.69C13.8701 15.72 13.9501 15.73 14.0401 15.73C14.2101 15.73 14.3401 15.67 14.4501 15.56L15.2101 14.81C15.4601 14.56 15.7001 14.37 15.9301 14.25C16.1601 14.11 16.3901 14.04 16.6401 14.04C16.8301 14.04 17.0301 14.08 17.2501 14.17C17.4701 14.26 17.7001 14.39 17.9501 14.56L21.2601 16.91C21.5201 17.09 21.7001 17.3 21.8101 17.55C21.9101 17.8 21.9701 18.05 21.9701 18.33Z" fill="#120400"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className='headings-section-icon' width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z" fill="#120400"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className='headings-section-icon' width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7.63004 3.57C7.80942 3.47216 8.00004 3.62268 8.00004 3.82701V17.3828C8.00004 17.6061 7.84762 17.7949 7.65024 17.8992C7.64347 17.9027 7.63673 17.9063 7.63004 17.91L5.28004 19.25C3.64004 20.19 2.29004 19.41 2.29004 17.51V7.78C2.29004 7.15 2.74004 6.37 3.30004 6.05L7.63004 3.57Z" fill="#120400"/>
            <path d="M14.7219 6.10227C14.8922 6.18663 15 6.36026 15 6.55034V19.7035C15 20.072 14.615 20.3139 14.283 20.1539L10.033 18.1063C9.85998 18.023 9.75 17.8479 9.75 17.6559V4.44558C9.75 4.07472 10.1396 3.83293 10.4719 3.99751L14.7219 6.10227Z" fill="#120400"/>
            <path d="M22 6.49V16.22C22 16.85 21.55 17.63 20.99 17.95L17.4986 19.951C17.1653 20.142 16.75 19.9013 16.75 19.5171V6.33032C16.75 6.15081 16.8462 5.98507 17.0021 5.89608L19.01 4.75C20.65 3.81 22 4.59 22 6.49Z" fill="#120400"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className='headings-section-icon' width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20.3601 12.73C19.9901 12.73 19.6801 12.45 19.6401 12.08C19.4001 9.88 18.2201 7.9 16.4001 6.64C16.0701 6.41 15.9901 5.96 16.2201 5.63C16.4501 5.3 16.9001 5.22 17.2301 5.45C19.4001 6.96 20.8001 9.32 21.0901 11.93C21.1301 12.33 20.8401 12.69 20.4401 12.73C20.4101 12.73 20.3901 12.73 20.3601 12.73Z" fill="#120400"/>
            <path d="M3.7398 12.78C3.7198 12.78 3.6898 12.78 3.6698 12.78C3.2698 12.74 2.9798 12.38 3.0198 11.98C3.2898 9.37 4.6698 7.01 6.8198 5.49C7.1398 5.26 7.5998 5.34 7.8298 5.66C8.0598 5.99 7.9798 6.44 7.6598 6.67C5.8598 7.95 4.6898 9.93 4.4698 12.12C4.4298 12.5 4.1098 12.78 3.7398 12.78Z" fill="#120400"/>
            <path d="M15.9901 21.1C14.7601 21.69 13.4401 21.99 12.0601 21.99C10.6201 21.99 9.2501 21.67 7.9701 21.02C7.6101 20.85 7.4701 20.41 7.6501 20.05C7.8201 19.69 8.2601 19.55 8.6201 19.72C9.2501 20.04 9.9201 20.26 10.6001 20.39C11.5201 20.57 12.4601 20.58 13.3801 20.42C14.0601 20.3 14.7301 20.09 15.3501 19.79C15.7201 19.62 16.1601 19.76 16.3201 20.13C16.5001 20.49 16.3601 20.93 15.9901 21.1Z" fill="#120400"/>
            <path d="M12.05 2.01C10.5 2.01 9.22998 3.27 9.22998 4.83C9.22998 6.39 10.49 7.65 12.05 7.65C13.61 7.65 14.87 6.39 14.87 4.83C14.87 3.27 13.61 2.01 12.05 2.01Z" fill="#120400"/>
            <path d="M5.04998 13.87C3.49998 13.87 2.22998 15.13 2.22998 16.69C2.22998 18.25 3.48998 19.51 5.04998 19.51C6.60998 19.51 7.86998 18.25 7.86998 16.69C7.86998 15.13 6.59998 13.87 5.04998 13.87Z" fill="#120400"/>
            <path d="M18.9499 13.87C17.3999 13.87 16.1299 15.13 16.1299 16.69C16.1299 18.25 17.3899 19.51 18.9499 19.51C20.5099 19.51 21.7699 18.25 21.7699 16.69C21.7699 15.13 20.5099 13.87 18.9499 13.87Z" fill="#120400"/>
            </svg>
            <svg className='headings-section-icon'
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            >
            <mask
                id="mask0_1_1364"
                style={{ maskType: 'luminance' }} // React uses camelCase for style keys
                maskUnits="userSpaceOnUse"
                x="2"
                y="2"
                width="21"
                height="21"
            >
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 2.9999H22.4725V22.5009H2V2.9999Z"
                fill="white"
                />
            </mask>
            <g mask="url(#mask0_1_1364)">
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.82347 12.123C5.22547 16.485 10.7645 20.012 12.2365 20.885C13.7135 20.003 19.2925 16.437 20.6495 12.127C21.5405 9.341 20.7135 5.812 17.4275 4.753C15.8355 4.242 13.9785 4.553 12.6965 5.545C12.4285 5.751 12.0565 5.755 11.7865 5.551C10.4285 4.53 8.65447 4.231 7.03747 4.753C3.75647 5.811 2.93247 9.34 3.82347 12.123ZM12.2375 22.501C12.1135 22.501 11.9905 22.471 11.8785 22.41C11.5655 22.239 4.19247 18.175 2.39547 12.581C2.39447 12.581 2.39447 12.58 2.39447 12.58C1.26647 9.058 2.52247 4.632 6.57747 3.325C8.48147 2.709 10.5565 2.98 12.2345 4.039C13.8605 3.011 16.0205 2.727 17.8865 3.325C21.9455 4.634 23.2055 9.059 22.0785 12.58C20.3395 18.11 12.9125 22.235 12.5975 22.408C12.4855 22.47 12.3615 22.501 12.2375 22.501Z"
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