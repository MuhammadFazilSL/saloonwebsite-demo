import React from 'react'
import './worksCards.css'
import scissors from '../../assets/home/explore/scissors.png'


const WorksCards = () => {
    const cardsDetails1 = [
        {
            icon: scissors,
            heading: "Online Appointments",
            content: "Select your preferred time slot and book appointments online with just a tap or two."
        },
        {
            icon: scissors,
            heading: "Zero Waiting Time",
            content: "No more waiting in the queues. Turn up to the venue at your selected time and enjoy."
        },
    ]
    const cardsDetails2 = [
        {
            icon: scissors,
            heading: "Find Salons and Spas",
            content: "Discover the widest selection of salons, parlours and spas in and around your area."
        },
        {
            icon: scissors,
            heading: "Compare Prices",
            content: "Evaluate different outlets, their services and prices and pick the one that fits your needs."
        }
    ]
  return (
    <div className="works-cards">
                    <span>
                      {
                            cardsDetails1.map(item => (
                                <span>
                                    <img src={item.icon} alt="" />
                                    <h2>{item.heading}</h2>
                                    <p>{item.content}</p>
                                </span>
                            ))
                        }
                    </span>
                    <span>
                      {
                            cardsDetails2.map(item => (
                                <span>
                                    <img src={item.icon} alt="" />
                                    <h2>{item.heading}</h2>
                                    <p>{item.content}</p>
                                </span>
                            ))
                        }
                    </span>
                </div>
  )
}

export default WorksCards