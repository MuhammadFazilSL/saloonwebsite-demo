import React from 'react'
import './rattings.css'
import star from '../../assets/explore/star.png'
import halfStar from '../../assets/explore/half-star.png'
import emptyStar from '../../assets/explore/star-gray.png'

const Rattings = (props) => {
    const renderStars = (rating) => {
        const totalStars = 5;
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 >= 0.5;
        const emptyStars = totalStars - fullStars - (halfStars ? 1 : 0);
    console.log(fullStars,halfStars,emptyStars)
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
          stars.push( <img src={star} alt="" />);
        }
        if (halfStars) {
          stars.push( <img src={halfStar} alt="" />);
        }
        for (let i = 0; i < emptyStars; i++) {
          stars.push(<img src={emptyStar} alt="" />);
        }
    
        return stars;
      };
  return (
    <span className='ratings'>
        <span className='stars'>
          {
              renderStars( props.item ? (props.item).ratings : props.ratings )
          }
        </span>
        <p>{(( props.item ? (props.item).reviews : props.reviews).split("("))[0]} <span>({(( props.item ? (props.item).reviews : props.reviews ).split("("))[1]}</span> </p>
    </span>
  )
}

export default Rattings