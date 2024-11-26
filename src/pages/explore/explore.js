import React, { useState } from 'react'
import './explore.css'
import Navbar from '../../navbar/navbar'
import filter from '../../assets/explore/Filter.png'
import map from '../../assets/explore/map.png'
import ExploreCards from '../../utils/exploreCards/exploreCards'
import mapImage from '../../assets/explore/map-image.png'
import cancelIcon from '../../assets/explore/cancel.png'

const Explore = () => {
  const [showMap, setshowMap] = useState(true)
  const handleMap = () =>{
    setshowMap(!showMap)
  }
  return (
    <div className="explore-container">
      <Navbar />
      <div className={showMap ? "explore-map-container wt-map" : "explore-map-container"}  >
        <div className={showMap ? "explore-section wt-map" : "explore-section"}>
        <span>
          <button className='filter-btn'>
            <img src={filter} alt="" />
            Filter
          </button>
          {
            showMap ? 
            
          <button className='map-btn' onClick={()=>handleMap()}>
          <img src={cancelIcon} alt="" />
          Hide map
        </button>
        :
        
        <button className='map-btn' onClick={()=>handleMap()}>
        <img src={map} alt="" />
        Show map
      </button>
          }
        </span>
        <h2>6k+ Venues Within Map Area</h2>
        <ExploreCards showMap={showMap}/>
        </div>
        {
          showMap ? 
          <img src={mapImage} alt="" /> :
          <></>
        }
      </div>
    </div>
  )
}

export default Explore