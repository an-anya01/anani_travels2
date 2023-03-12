import React from "react"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <br/>
          <h4>About Us</h4>
          <br/><br/>
          <h1>
            We are <span>India's Largest</span> Booking Network.
          </h1>
          <p>Providing range of choice for hotels, flights, trains, bus and cars for travelers. Our core value differentiator is the most trusted user experience, be it in terms of quickest search and booking, fastest payments, settlement or refund processes.</p>
          <p>Through Anani-stays, our customers enjoy standardised stay experience at certified hotel properties. Anani Travels is the number one choice for new India on the move.</p>
        </div>
        <div className='row image'>
          <img src='/images/about-img-1.jpg' alt='' />
        </div>
      </div>
    </>
  )
}

export default AboutCard
