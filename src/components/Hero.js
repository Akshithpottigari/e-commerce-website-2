import React from 'react'

function Hero() {
  return (
    <div className="hero-container">
        <div className="hero-left">
            <img className="hero-left-lamp-image" src={require('../images/image 32.png')}></img>
        </div>
        <div className="hero-centre">
            <span>Best Furniture For Your Castle....</span>
            <h1>New Furniture Collection Trends in 2020</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
in phasellus non in justo.
            </p>
            <button className="hero-centre-button" type="button">Shop Now</button>
        </div>
        <div className="hero-right">
            <img className="hero-right-sofa-image" src={require('../images/sofa promotional header.png')}></img>
        </div>
    </div>
  )
}

export default Hero