import React from 'react'
import './featureCards.css'
import scissors from '../../assets/home/explore/scissors.png'

const FeatureCards = (props) => {
    console.log(props)
    const cardsDetails = [
        {
            icon: scissors,
            heading: props.parentComponent === "partnerships" ? "Online Appointments"  :  "Accept online bookings",
            content:   props.parentComponent === "partnerships" ? "Lorem ipsum dolor sit amet consectetur. Consectetur rutrum tincidunt egestas in morbi facilisi imperdiet magna. Donec facilisis ut lacus etiam massa tristique diam tortor ac."  :"Lorem ipsum dolor sit amet consectetur. Commodo et at quis cras turpis. In nec amet vitae adipiscing maecenas et."
        },
        {
            icon: scissors,
            heading:  props.parentComponent === "partnerships" ? "Online Appointments"  :  "Notifications via SMS/Email",
            content:   props.parentComponent === "partnerships" ? "Lorem ipsum dolor sit amet consectetur. Consectetur rutrum tincidunt egestas in morbi facilisi imperdiet magna. Donec facilisis ut lacus etiam massa tristique diam tortor ac."  :"Lorem ipsum dolor sit amet consectetur. Commodo et at quis cras turpis. In nec amet vitae adipiscing maecenas et."
        },
        {
            icon: scissors,
            heading:  props.parentComponent === "partnerships" ? "Online Appointments"  :  "Client & Admin App",
            content:   props.parentComponent === "partnerships" ? "Lorem ipsum dolor sit amet consectetur. Consectetur rutrum tincidunt egestas in morbi facilisi imperdiet magna. Donec facilisis ut lacus etiam massa tristique diam tortor ac."  :"Lorem ipsum dolor sit amet consectetur. Commodo et at quis cras turpis. In nec amet vitae adipiscing maecenas et."
        },
        {
            icon: scissors,
            heading:  props.parentComponent === "partnerships" ? "Online Appointments"  :  "Accept Payments",
            content:   props.parentComponent === "partnerships" ? "Lorem ipsum dolor sit amet consectetur. Consectetur rutrum tincidunt egestas in morbi facilisi imperdiet magna. Donec facilisis ut lacus etiam massa tristique diam tortor ac."  :"Lorem ipsum dolor sit amet consectetur. Commodo et at quis cras turpis. In nec amet vitae adipiscing maecenas et."
        },
        {
            icon: scissors,
            heading: props.parentComponent === "partnerships" ? "Online Appointments"  :   "Integration & API",
            content:   props.parentComponent === "partnerships" ? "Lorem ipsum dolor sit amet consectetur. Consectetur rutrum tincidunt egestas in morbi facilisi imperdiet magna. Donec facilisis ut lacus etiam massa tristique diam tortor ac."  :"Lorem ipsum dolor sit amet consectetur. Commodo et at quis cras turpis. In nec amet vitae adipiscing maecenas et."
        },
        {
            icon: scissors,
            heading:  props.parentComponent === "partnerships" ? "Online Appointments"  :  "Custom features",
            content:   props.parentComponent === "partnerships" ? "Lorem ipsum dolor sit amet consectetur. Consectetur rutrum tincidunt egestas in morbi facilisi imperdiet magna. Donec facilisis ut lacus etiam massa tristique diam tortor ac."  :"Lorem ipsum dolor sit amet consectetur. Commodo et at quis cras turpis. In nec amet vitae adipiscing maecenas et."
        },
    ]
    
    const cardsDetails2 = [
        {
            icon: scissors,
            heading:"Free Trial",
            content: "Lorem ipsum dolor sit amet consectetur. Consectetur rutrum tincidunt egestas in morbi facilisi imperdiet magna."
        },
        {
            icon: scissors,
            heading:"Amazing Live Chat Support",
            content: "Lorem ipsum dolor sit amet consectetur. Consectetur rutrum tincidunt egestas in morbi facilisi imperdiet magna."
        },
        {
            icon: scissors,
            heading:"Admin App",
            content: "Lorem ipsum dolor sit amet consectetur. Consectetur rutrum tincidunt egestas in morbi facilisi imperdiet magna."
        },
        {
            icon: scissors,
            heading:"Assistance",
            content: "Lorem ipsum dolor sit amet consectetur. Consectetur rutrum tincidunt egestas in morbi facilisi imperdiet magna."
        },
        {
            icon: scissors,
            heading:"NO commission",
            content: "Lorem ipsum dolor sit amet consectetur. Consectetur rutrum tincidunt egestas in morbi facilisi imperdiet magna."
        },
        {
            icon: scissors,
            heading:"Join Our Happy Clients",
            content: "Lorem ipsum dolor sit amet consectetur. Consectetur rutrum tincidunt egestas in morbi facilisi imperdiet magna."
        },
    ]
  return (
    <div className="feature-cards">
    {
      ( props.parentComponent === "beauty salon" ?  cardsDetails2 : cardsDetails ).map((item,index) => (
            <span className={props.parentComponent === "partnerships"  ? "partnerships" : props.parentComponent === "beauty salon" ? index === 1 ? "beauty-salon active" : "beauty-salon" : ""}>
                <img src={item.icon} alt="" />
                <h2>{item.heading}</h2>
                <p>{item.content}</p>
            </span>
        ))
    }
</div>
  )
}

export default FeatureCards