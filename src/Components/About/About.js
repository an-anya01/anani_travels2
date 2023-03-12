import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"

const About = () => {
  return (
    <>
      <HeadTitle />

      <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <br/><br/><br/>
            <h1>
              It's all about <span>travel</span>
            </h1>
            <p>We provide travellers with one of the widest selections of accommodation on the net, including both independent and major chain hotels as well as self-catering in over hundreds of thousands properties worldwide. The company offers a one-stop shopping source for hotel pricing, amenities and availability.</p>
            
          </div>
          <div className='row image'>
            <img src='/images/feature-img-1.jpg' alt='' />
            <div className='control-btn'>
              <button className='prev'>
                <i className='fas fa-play'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
