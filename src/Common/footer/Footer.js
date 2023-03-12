import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>Providing range of choice for hotels, flights, trains, bus and cars for travelers. Our core value differentiator is the most trusted user experience, be it in terms of quickest search and booking, fastest payments, settlement or refund processes.</p>
            <br/>
            <p>Through Anani-stays, our customers enjoy standardised stay experience at certified hotel properties. Anani Travels is the number one choice for new India on the move.</p>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link to='/destinations'>Destinations</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>REVIEWS</h2>
            <ul>
              <li>
                <p>"Style, location, staff, food...can not fault anything"</p>
                <label className="fa-solid fa-location-dot"></label>
                <span>Delhi</span>
              </li>
              <li>
                <p>"Loved our experience, friendly staff, lovely well-maintained facilities"</p>
                <label className='fa-solid fa-location-dot'></label>
                <span>Kerala</span>
              </li>
              <li>
                <p>"Amazing loacation of hotel, close to all sight seeing spots"</p>
                <label className='fa-solid fa-location-dot'></label>
                <span>Rajasthan</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>CONTACT US</h2>
            <p>info@anani.com</p>
            <p>+91 92156 72324</p>
            <div className='icon flex_space'>
              <i className='fab fa-facebook-f icons'></i>
              <i className='fab fa-twitter icons'></i>
              <i className='fab fa-linkedin icons'></i>
              <i className='fab fa-instagram icons'></i>
              <i className='fab fa-pinterest icons'></i>
              <i className='fab fa-youtube icons'></i>
            </div>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2022 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
