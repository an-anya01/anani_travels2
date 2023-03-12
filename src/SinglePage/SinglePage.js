import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Sdata from "../Components/Destinations/Sdata"
import EmptyFile from "../Common/Empty/EmptyFile"
import { useParams } from "react-router-dom"
import HeadTitle from "../Common/HeadTitle/HeadTitle"
import "./singlepage.css"

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])

  return (
    <>
      <HeadTitle />

      {item ? (
        <section className='single-page top'>
          <div className='container'>
            <Link to='/destinations' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>


            <article className='content flex'>
              <div className='main-content'>
                <img src={item.image} alt='' />
                <h1>What is the {item.title} City ?</h1>
                <p>{item.desc}</p>
              </div>
             
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  )
}

export default SinglePage
