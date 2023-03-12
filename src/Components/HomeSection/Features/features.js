import React from "react"
import "./features.css"

const Features = () => {
  return (
    <>
      <section className='features top'>
        <div className='container flex_space'>
          <div className='row'>
            <h1>Wow! Checkout our Features</h1>
            <ul>
              <li>&#10003; Find nearby hotel in your network with templete</li>
              <li>&#10003; Get paperless confirmation</li>
              <li>&#10003; Make changes whenever, wherever</li>
              <li>&#10003; 24/7 customer service in more than 40 languages</li>
              <li>&#10003; No booking or credit card fees</li>
              <li>&#10003; No booking or credit card fees</li>
              <li>&#10003; Add your own reviews and photos</li>
            </ul>
           
          </div>
          <div className='row row2'>
            <img src='/images/gallery-2.jpg' alt='' className='image' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
