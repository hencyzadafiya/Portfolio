import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import { imgConfig } from '../images/image';

const About = () => {
  return (
  <>
    <div className='apage'>

      <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className='h6  text-center about'> HOME <FaAngleRight/> ABOUT US <FaAngleRight/>  </div>
              <p className='h2 head1 text-center'>About Us</p>
            </div>
        </div>
      </div>


<div class="container pt-5 pb-5 mt-5">
    <div class="row">
        <div class="col-lg-6 col-md-12">
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <div class="box px-5 py-5 mb-4 text-center">
                        <div class="price fs-3">5,000</div>
                        <p>Happy Clients</p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="box px-5 py-5 mb-4 text-center">
                        <div class="price fs-3">1,200</div>
                        <p>Projects Done</p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="box px-5 py-5 text-center">
                        <div class="price fs-3">500</div>
                        <p>Cups of Coffee</p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="box px-5 py-5 text-center">
                        <div class="price fs-3">587</div>
                        <p>Working Hours</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-12">
            <div>
                <h6 class="line">ABOUT ME</h6>
                <h3 class="me mt-3">A UI/UX Designer & Web Developer Based in Philippines</h3>
                <p class="par mt-3">Far far away, behind the word mountains, 
                far from the countries Vokalia and Consonantia,
                there live the blind texts.</p>

                <div class="d-flex">
                    <span>
                        <p class="name">Name:</p>
                        <p class="name">Date of birth:</p>
                        <p class="name">Address:</p>   
                    </span>
                    <span>
                        <p class="dtl">Clyde Nowitzki</p>
                        <p class="dtl">January 01, 1990</p>
                        <p class="dtl">San Francisco CA <br></br> 97987 USA</p>
                    </span>

                    <span className='mx-4'>
                        <p class="name">Zip code:</p>
                        <p class="name">Phone:</p>
                        <p class="name">Email:</p>
                    </span>

                    <span>
                        <p class="dtl">1000</p>
                        <p class="dtl">+1-2234-5678-9-0</p>
                        <p class="dtl">cydenowitzki@gmail.com</p>
                    </span>

                </div>

                <div class="btn btn-primary py-3 px-4 mt-4">Download CV</div>
            </div>
        </div>
    </div>
</div>



      <div className='container pt-5 mb-5'>
        <div className="row">
              <h6 className='line text-center'>SKILL</h6>
              <p className='h2 head1 text-center'>My Skill</p>

            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='mt-5'>
                <div className='d-flex mb-2'>
                  <span className='adobe'>ADOBE PHOTOSHOP</span>
                </div>
                <div class="progress">
                     <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                </div>
              </div>

              <div className='mt-4'>
                <div className='d-flex '>
                  <span className='adobe'>JAVASCRIPT</span>
                </div>
                <div class="progress">
                     <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                </div>
              </div>

              <div className='mt-4 mb-5'>
                <div className='d-flex mb-2'>
                  <span className='adobe'>WORDPRESS</span>
              
                </div>
                <div class="progress">
                     <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                </div>
              </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='mt-5'>
                <div className='d-flex mb-2'>
                  <span className='adobe'>FIGMA</span>
                  
                </div>
                <div class="progress">
                     <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                </div>
              </div>

              <div className='mt-4'>
                <div className='d-flex '>
                  <span className='adobe'>HTML5</span>
                </div>
                <div class="progress">
                     <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                </div>
              </div>

              <div className='mt-4 mb-5'>
                <div className='d-flex mb-2'>
                  <span className='adobe'>ADOBE XD</span>
                 
                </div>
                <div class="progress">
                     <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
              </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='mt-5'>
                <div className='d-flex mb-2'>
                  <span className='adobe'>ADOBE ILLUSTRATOR</span>
                  
                </div>
                <div class="progress">
                     <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                </div>
              </div>

              <div className='mt-4'>
                <div className='d-flex '>
                  <span className='adobe'>CSS3</span>
                  
                </div>
                <div class="progress">
                     <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                </div>
              </div>

              <div className='mt-4 mb-5'>
                <div className='d-flex mb-2'>
                  <span className='adobe'>SEO</span>
                 
                </div>
                <div class="progress">
                     <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
              </div>
          </div>
          
        </div>
      </div>

      <div className='container'>
          <div className='mt-5'>
              <h6 className='line text-center mt-5'>TESTIMONIAL</h6>
              <p className='h2 head1 text-center'>Happy Guests</p>
          </div>

          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12 p-5 mt-5'>
                <div className='d-flex box py-4 px-4'>
                  <div>
                      <div><img src={imgConfig?.img3} alt="sry" className='img1' height={'80px'} width={'100%'}/></div>
                      {/* <div className='comma fs-5 text-light d-flex align-items-center p-1'>< FaQuoteLeft/></div> */}
                  </div>
                  <div className='px-2 pt-3'>
                      <div className='h6'>Roger Scott</div>
                      <h6 className='line1 '>MARKETING MANAGER</h6>
                  </div>
                </div>
                <p className='par box px-4 pb-4'>Far far away, behind the word mountains,
                   far from the countries Vokalia and Consonantia,
                   there live the blind texts.</p>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-12 p-5 mt-5'>
                <div className='d-flex box py-4 px-4'>
                  <div>
                      <div><img src={imgConfig?.img4} alt="sry" className='img1' height={'80px'} width={'100%'}/></div>
                      {/* <div className='comma1 fs-5 text-light d-flex align-items-center p-1'>< FaQuoteLeft/></div> */}
                  </div>
                  <div className='px-2 pt-3'>
                      <div className='h6'>Roger Scott</div>
                      <h6 className='line1 '>MARKETING MANAGER</h6>
                  </div>
                </div>
                <p className='par box px-4 pb-4'>Far far away, behind the word mountains,
                   far from the countries Vokalia and Consonantia,
                   there live the blind texts.</p>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-12 p-5 mt-5'>
                <div className='d-flex box py-4 px-4'>
                  <div>
                      <div><img src={imgConfig?.img5} alt="sry" className='img1' height={'80px'} width={'100%'}/></div>
                      {/* <div className='comma2 fs-5 text-light d-flex align-items-center p-1'>< FaQuoteLeft/></div> */}
                  </div>
                  <div className='px-2 pt-3'>
                      <div className='h6'>Roger Scott</div>
                      <h6 className='line1 '>MARKETING MANAGER</h6>
                  </div>
                </div>
                <p className='par box px-4 pb-4'>Far far away, behind the word mountains,
                   far from the countries Vokalia and Consonantia,
                   there live the blind texts.</p>
            </div>
          </div>
      </div>
    </div>
     

  </>
  
  )
}

export default About
