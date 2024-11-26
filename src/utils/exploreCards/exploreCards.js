import React, { useState } from 'react'
import './exploreCards.css'
import barbershopImg from '../../assets/explore/barbershop-img.png'
import location from '../../assets/explore/location.png'
import direction from '../../assets/explore/direct-right.png'
import ticketIcon from '../../assets/explore/ticket-discount.png'
import arrowIcon from '../../assets/explore/Arrow - Left.png'
import heartIcon from '../../assets/explore/Heart.png'
import heartIconfilled from '../../assets/explore/Heart-filled.png'
import { useNavigate } from 'react-router-dom'
import Rattings from '../rattings/rattings'


const ExploreCards = (props) => {
    const [marked, setmarked] = useState(false)
    const navigate = useNavigate();
    const cardDetails = [
        {
            image: barbershopImg,
            heading: "Naturals Kodambakkam",
            address: "No. 7,Main Road, Kodambakkam...",
            ratings: 2.5,
            reviews: "4.3 (432 Reviews)",
            distance: "0.5km",
            content: props.showMap ? "Lorem ipsum dolor sit amet consectetur. Turpis egestas risus nec consequat non..." : "Lorem ipsum dolor sit amet consectetur. Facilisis enim quis velit morbi aliquam augue gravida sollicitudin. Augue..." 
        },
        {
            image: barbershopImg,
            heading: "Naturals Kodambakkam",
            address: "No. 7,Main Road, Kodambakkam...",
            ratings: 2,
            reviews: "4.3 (432 Reviews)",
            distance: "0.5km",
            content: props.showMap ? "Lorem ipsum dolor sit amet consectetur. Turpis egestas risus nec consequat non..." : "Lorem ipsum dolor sit amet consectetur. Facilisis enim quis velit morbi aliquam augue gravida sollicitudin. Augue..." 
        },
        {
            image: barbershopImg,
            heading: "Naturals Kodambakkam",
            address: "No. 7,Main Road, Kodambakkam...",
            ratings: 4.5,
            reviews: "4.3 (432 Reviews)",
            distance: "0.5km",
            content: props.showMap ? "Lorem ipsum dolor sit amet consectetur. Turpis egestas risus nec consequat non..." : "Lorem ipsum dolor sit amet consectetur. Facilisis enim quis velit morbi aliquam augue gravida sollicitudin. Augue..." 
        },
        {
            image: barbershopImg,
            heading: "Naturals Kodambakkam",
            address: "No. 7,Main Road, Kodambakkam...",
            ratings: 4,
            reviews: "4.3 (432 Reviews)",
            distance: "0.5km",
            content: props.showMap ? "Lorem ipsum dolor sit amet consectetur. Turpis egestas risus nec consequat non..." : "Lorem ipsum dolor sit amet consectetur. Facilisis enim quis velit morbi aliquam augue gravida sollicitudin. Augue..." 
        },
        {
            image: barbershopImg,
            heading: "Naturals Kodambakkam",
            address: "No. 7,Main Road, Kodambakkam...",
            ratings: 5,
            reviews: "4.3 (432 Reviews)",
            distance: "0.5km",
            content: props.showMap ? "Lorem ipsum dolor sit amet consectetur. Turpis egestas risus nec consequat non..." : "Lorem ipsum dolor sit amet consectetur. Facilisis enim quis velit morbi aliquam augue gravida sollicitudin. Augue..." 
        },
    ]
    console.log(((cardDetails[0].reviews).split("("))[0])
  
  
  return (
    <div className="exploreCards-section">
        {
            cardDetails.map((item,index) =>(
                <span className={props.showMap ? "exploreCard wt-map" : "exploreCard"} > 
                    <img src={item.image} alt="" className="exploreCards-image" />
                    <span className="exploreCards-content" onClick={()=>navigate("/explore/45121254512")}>
                        <h3>{item.heading}</h3>
                        <p>{item.address}</p>
                        <span>
                            <img src={location} alt="" />
                            <p>Show on map</p>
                        </span>
                        <div className='ratings-direction'>
                          <Rattings item={item} />
                            <span className='direction'>
                                <img src={direction} alt="" />
                                <p>{item.distance}</p>
                            </span>
                        </div>
                        <span>
                            <img src={ticketIcon} alt="" />
                            <p>{item.content}</p>
                            <img src={arrowIcon} alt="" />
                        </span>
                       
                    </span>
                    <div className='image-area' onClick={()=>setmarked(index)}>
                            {
                              index === marked ?
                                 <img src={heartIconfilled} alt="" />
                                :
                                 <img src={heartIcon} alt="" />
                            }
                        </div>
                </span>
            ))
        }
       
    </div>
  )
}

export default ExploreCards