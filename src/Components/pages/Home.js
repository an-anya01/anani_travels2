import React from "react"
import "../../App.css"
import Hero from "../HomeSection/Hero"
import HomeAbout from "../HomeSection/HomeAbout"
import MostPopular from "../HomeSection/popular/MostPopular"
import DestinationHome from "../HomeSection/Destina/DestinationHome"
import Features from "../HomeSection/Features/features"
import Works from "../HomeSection/Works/Works"


const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <MostPopular />
      <DestinationHome />
      <Features />
      <Works />
    </>
  )
}

export default Home
