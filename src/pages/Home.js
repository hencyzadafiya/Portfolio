import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { imgConfig } from '../images/image';
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {
  return (
    <>
    <div className='container d-flex justify-content-center '>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12 mt-5 pt-5'>
          <h5 className='line'>UI/UX DESIGNER & DEVELOPER</h5>
          <h1 className='head'>I'm John Schmidt</h1>

          <button className='btn text-light px-2 py-2'>MORE ABOUT ME <FaArrowRight/></button>
          <button className='btn1 px-2 py-2 mx-5 py-2 mt-5'>HIRE ME <FaArrowRight/></button>

        </div>
      


      <div className='col-lg-6 col-md-12 col-sm-12 '>
        <Carousel className='part2 pt-5 pb-5 px-5'>
          <Carousel.Item>
            <img src={imgConfig?.User} alt='sry' className='img-fluid ' />
          </Carousel.Item>
          
          <Carousel.Item>
          <img src={imgConfig?.About} alt="sry"  className='img-fluid ' />
          </Carousel.Item>
        
      </Carousel>
      </div>


      </div>
    </div>
    </>
  )
}

export default Home
