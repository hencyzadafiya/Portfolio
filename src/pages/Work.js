import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { imgConfig } from '../images/image';

const Work = () => {
  return (
    <>
    <div className='apage pb-5'>
        <div className='container-fluid'>
          <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12'>
                <div className='h6  text-center about'> HOME <FaAngleRight/> WORK <FaAngleRight/>  </div>
                <p className='h2 head1 text-center'>Portfolio</p>
              </div>
          </div>
        </div>

        <div className='container mt-5 pt-5'>
            <div className='row'>

                <div className='col-md-4'>
                    {/* <div className='lyr'>
                        <h4 className='text-light pt-5 mt-5 text-center'>Branding & Illustration <br/>Design</h4>
                        <h6 className='text-light text-center mt-4'>WEB DESIGN</h6>
                    </div> */}
                    <div className='work' style={{height:'320px' , width:'100%' , overflow:'hidden'}}>
                        <img src={imgConfig?.img6} alt="src"  className='block-20 d-flex align-items-center' />
                    </div>
                    
                </div>

                <div className='col-md-4'>
                    <div  style={{height:'320px' , width:'100%' , overflow:'hidden'}}>
                        <img src={imgConfig?.img7} alt="src" className='block-20 d-flex align-items-center'/>
                    </div>
                    {/* <div className='lyr'>
                        <h4 className='text-light pt-5 mt-5 text-center'>Branding & Illustration <br/>Design</h4>
                        <h6 className='text-light text-center mt-4'>WEB DESIGN</h6>
                    </div> */}
                </div>

                <div className='col-md-4'>
                    <div  style={{height:'320px' , width:'100%' , overflow:'hidden'}}>
                        <img src={imgConfig?.img8} alt="src" className='block-20 d-flex align-items-center'/>
                    </div>
                    {/* <div className='lyr'>
                        <h4 className='text-light pt-5 mt-5 text-center'>Branding & Illustration <br/>Design</h4>
                        <h6 className='text-light text-center mt-4'>WEB DESIGN</h6>
                    </div> */}
                </div>
            </div>




            <div className='row'>
                <div className='col-md-4'>
                    <div  className='work'  style={{height:'320px' , width:'100%' , overflow:'hidden'}}>
                        <img src={imgConfig?.img9} alt="src" className='block-20 d-flex align-items-center'/>
                    </div>
                    {/* <div className='lyr'>
                        <h4 className='text-light pt-5 mt-5 text-center'>Branding & Illustration <br/>Design</h4>
                        <h6 className='text-light text-center mt-4'>WEB DESIGN</h6>
                    </div> */}
                </div>

                <div className='col-md-4'>
                    <div  style={{height:'320px' , width:'100%' , overflow:'hidden'}}>
                        <img src={imgConfig?.img10} alt="src" className='block-20 d-flex align-items-center'/>
                    </div>
                    {/* <div className='lyr'>
                        <h4 className='text-light pt-5 mt-5 text-center'>Branding & Illustration <br/>Design</h4>
                        <h6 className='text-light text-center mt-4'>WEB DESIGN</h6>
                    </div> */}
                </div>

                <div className='col-md-4'>
                    <div  style={{height:'320px' , width:'100%' , overflow:'hidden'}}>
                        <img src={imgConfig?.img11} alt="src" className='block-20 d-flex align-items-center'/>
                    </div>
                    {/* <div className='lyr'>
                        <h4 className='text-light pt-5 mt-5 text-center'>Branding & Illustration <br/>Design</h4>
                        <h6 className='text-light text-center mt-4'>WEB DESIGN</h6>
                    </div> */}
                </div>
            </div>


            <div className='row'>
                <div className='col-md-4'>
                    <div  style={{height:'320px' , width:'100%' , overflow:'hidden'}}  className='work'>
                        <img src={imgConfig?.im1} alt="src" className='block-20 d-flex align-items-center'/>
                    </div>
                    {/* <div className='lyr'>
                        <h4 className='text-light pt-5 mt-5 text-center'>Branding & Illustration <br/>Design</h4>
                        <h6 className='text-light text-center mt-4'>WEB DESIGN</h6>
                    </div> */}
                </div>

                <div className='col-md-4'>
                    <div  className='work'  style={{height:'320px' , width:'100%' , overflow:'hidden'}}>
                        <img src={imgConfig?.im2} alt="src" className='block-20 d-flex align-items-center'/>
                    </div>
                    {/* <div className='lyr'>
                        <h4 className='text-light pt-5 mt-5 text-center'>Branding & Illustration <br/>Design</h4>
                        <h6 className='text-light text-center mt-4'>WEB DESIGN</h6>
                    </div> */}
                </div>

                <div className='col-md-4'>
                    <div  style={{height:'320px' , width:'100%' , overflow:'hidden'}}>
                        <img src={imgConfig?.im3} alt="src" className='block-20 d-flex align-items-center'/>
                    </div>
                    {/* <div className='lyr'>
                        <h4 className='text-light pt-5 mt-5 text-center'>Branding & Illustration <br/>Design</h4>
                        <h6 className='text-light text-center mt-4'>WEB DESIGN</h6>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Work
