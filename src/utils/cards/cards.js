import React from 'react'
import './cards.css'
import scissors from '../../assets/home/explore/scissors.png'
import nails from '../../assets/home/explore/nails.png'
import henna from '../../assets/home/explore/henna.png'
import spa from '../../assets/home/explore/spa.png'
import cosmetics from '../../assets/home/explore/cosmetics.png'
import facial from '../../assets/home/explore/facial.png'

const Cards = () => {
    const cardsDetails = [
        {
            icon: scissors,
            content: "Hair Cut"
        },
        {
            icon: nails,
            content: "Nails"
        },
        {
            icon: henna,
            content: "Mehandi"
        },
        {
            icon: spa,
            content: "Spa"
        },
        {
            icon: cosmetics,
            content: "Makeup"
        },
        {
            icon: facial,
            content: "Skin"
        },
    ]
  return (
    <div className="explore-cards">
        {
            cardsDetails.map(item => (
                <span>
                    <img src={item.icon} alt="" />
                    <p>{item.content}</p>
                </span>
            ))
        }
    </div>
  )
}

export default Cards