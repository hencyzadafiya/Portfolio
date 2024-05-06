import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { AiFillAlert } from "react-icons/ai";
import { PiMonitorPlayBold } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { IoCheckmarkSharp } from "react-icons/io5";

const Services = () => {
  return (
    <>
      <div className='apage pb-5'>
        <div className='container-fluid'>
          <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12'>
                <div className='h6  text-center about'> HOME <FaAngleRight/> SERVICES <FaAngleRight/>  </div>
                <p className='h2 head1 text-center'>What I Do?</p>
              </div>
          </div>
        </div>

      <div className='container mt-5 pt-5'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 hvr text-center mb-4'>
              <div className='box1 pb-5 px-5 '>
                  <p className='icn1'>< AiFillAlert/></p>
                  <h6>UI/UX Design</h6>
                  <p className=' mt-3'>Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia,
                    there live the blind texts.</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 hvr text-center mb-4'>
              <div className='box1 pb-5 px-5 text-center'>
                  <p className=' icn1'>< PiMonitorPlayBold/></p>
                  <h6>Web Development</h6>
                  <p className=' mt-3'>Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia,
                    there live the blind texts.</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 hvr text-center mb-4'>
              <div className='box1 pb-5 px-5 text-center'>
                  <p className=' icn1'>< FaLightbulb/></p>
                  <h6>Graphic Design</h6>
                  <p className=' mt-3'>Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia,
                    there live the blind texts.</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 hvr text-center mb-4'>
              <div className='box1 pb-5 px-5 text-center'>
                  <p className=' icn1'><SiBrandfolder/></p>
                  <h6>Branding</h6>
                  <p className=' mt-3'>Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia,
                    there live the blind texts.</p>
              </div>
            </div>
        </div>
      </div>


      <div className='container mt-2 pt-5'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 hvr text-center mb-4'>
            <div className='box1 pb-5 px-5 text-center'>
                <p className=' icn1'>< AiFillAlert/></p>
                <h6>Marketing</h6>
                <p className=' mt-3'>Far far away, behind the word mountains,
                   far from the countries Vokalia and Consonantia,
                   there live the blind texts.</p>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 hvr text-center mb-4'>
            <div className='box1 pb-5 px-5 text-center'>
                <p className=' icn1'>< PiMonitorPlayBold/></p>
                <h6>Mobile App Design</h6>
                <p className=' mt-3'>Far far away, behind the word mountains,
                   far from the countries Vokalia and Consonantia,
                   there live the blind texts.</p>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 hvr text-center mb-4'>
            <div className='box1 pb-5 px-5 text-center'>
                <p className=' icn1'>< FaLightbulb/></p>
                <h6>Visual Editor</h6>
                <p className=' mt-3'>Far far away, behind the word mountains,
                   far from the countries Vokalia and Consonantia,
                   there live the blind texts.</p>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 hvr text-center mb-4'>
            <div className='box1 pb-5 px-5 text-center'>
                <p className=' icn1'><SiBrandfolder/></p>
                <h6>IT Consultancy</h6>
                <p className=' mt-3'>Far far away, behind the word mountains,
                   far from the countries Vokalia and Consonantia,
                   there live the blind texts.</p>
            </div>
          </div>
        </div>
      </div>



      <div className='container mt-5 pt-5'>
        <div class="row">
          <div class="col-lg-12">
              <h6 class="line text-center">PRICING</h6>
              <p class="h2 head1 text-center">Choose Your Pricing Plan</p>
          </div>
        </div>

        <div className='row'>
          
        
            <div className='col-lg-3 col-md-6  pt-5'>
                <div className='box2 text-center pb-5'>

                  <div className=' d-flex otr pt-5 pb-4  justify-content-center'>
                    <span className='par1 fs-4'>$</span>
                    <span className=' line1 h1'>49</span>
                  </div>
                  <p className='h5 mb-3'>Personal</p>

                  <div className='py-2  '>
                    <span className='line1 h6 py-2 px-2'><IoCheckmarkSharp/></span>
                    <span className='par1 py-2 px-2'>Strategic Alliance</span>
                  </div>
                  <div  className='py-2 px-3'>
                    <span className='line1 bckg h6 py-2 px-2'><IoCheckmarkSharp/></span>
                    <span className='par1 bckg px-2 py-2 px-2'>Growth Expansion</span>
                  </div>
                  <div  className='py-2 mb-2'>
                    <span className='line1 h6 py-2 px-2'><IoCheckmarkSharp/></span>
                    <span className='par1 py-2 px-2 '>Business Planning</span>
                  </div>
                  <div>
                    <span className='line1 bckg h6 py-2 px-2'><IoCheckmarkSharp/></span>
                    <span className='par1 bckg px-2 py-2 px-2'>Contact Negotiation</span>
                  </div>
                  <div  className='py-2 mt-2'>
                    <span className='line1 h6 py-2 px-2'><IoCheckmarkSharp/></span>
                    <span className='par1 py-2 px-2'>Market Positioning</span>
                  </div>

                  <div className="btn btn-primary py-2 px-3 mt-4 ">GET STARTED</div>
            </div>
          </div>

          <div className='col-lg-3 col-md-6  pt-5'>
              <div className='box2 text-center pb-5'>
                <div className=' d-flex  justify-content-center pt-5 pb-4'>
                  <span className='par1 fs-4'>$</span>
                  <span className=' line1 h1'>79</span>
                </div>
                <p className='h5 mb-3'>Personal</p>

                <div className='py-2 '>
                  <span className='line1 h6 py-2 px-2'><IoCheckmarkSharp/></span>
                  <span className='par1 py-2 px-2'>Strategic Alliance</span>
                </div>
                <div  className='py-2 px-3'>
                  <span className='line1 bckg h6 py-2 px-2'><IoCheckmarkSharp/></span>
                  <span className='par1 bckg px-2 py-2 px-2'>Growth Expansion</span>
                </div>
                <div  className='py-2 mb-2'>
                  <span className='line1 h6 py-2 px-2'><IoCheckmarkSharp/></span>
                  <span className='par1 py-2 px-2 '>Business Planning</span>
                </div>
                <div>
                  <span className='line1 bckg h6 py-2 px-2'><IoCheckmarkSharp/></span>
                  <span className='par1 bckg px-2 py-2 px-2'>Contact Negotiation</span>
                </div>
                <div  className='py-2 mt-2'>
                  <span className='line1 h6 py-2 px-2'><IoCheckmarkSharp/></span>
                  <span className='par1 py-2 px-2'>Market Positioning</span>
                </div>
                
                <div className="btn btn-primary py-2 px-3 mt-4 ">GET STARTED</div>
              </div>
          </div>

          <div className='col-lg-3 col-md-6  pt-5'>
              <div className='box2 text-center pb-5'>
                <div className=' d-flex  justify-content-center pt-5 pb-4'>
                  <span className='par1 fs-4'>$</span>
                  <span className=' line1 h1'>109</span>
                </div>
                <p className='h5 mb-3'>Personal</p>

                <div className='py-2 '>
                  <span className='line1 h6 py-2 px-2'><IoCheckmarkSharp/></span>
                  <span className='par1 py-2 px-2'>Strategic Alliance</span>
                </div>
                <div  className='py-2 px-3'>
                  <span className='line1 bckg h6 py-2 px-2'><IoCheckmarkSharp/></span>
                  <span className='par1 bckg px-2 py-2 px-2'>Growth Expansion</span>
                </div>
                <div  className='py-2 mb-2'>
                  <span className='line1 h6 py-2 px-2'><IoCheckmarkSharp/></span>
                  <span className='par1 py-2 px-2 '>Business Planning</span>
                </div>
                <div>
                  <span className='line1 bckg h6 py-2 px-2'><IoCheckmarkSharp/></span>
                  <span className='par1 bckg px-2 py-2 px-2'>Contact Negotiation</span>
                </div>
                <div  className='py-2 mt-2'>
                  <span className='line1 h6 py-2 px-2'><IoCheckmarkSharp/></span>
                  <span className='par1 py-2 px-2'>Market Positioning</span>
                </div>
                
                <div className="btn btn-primary py-2 px-3 mt-4 ">GET STARTED</div>
              </div>
          </div>


          <div className='col-lg-3 col-md-6  pt-5'>
              <div className='box2 text-center pb-5'>
                <div className=' d-flex  justify-content-center pt-5 pb-4'>
                  <span className='par1 fs-4'>$</span>
                  <span className=' line1 h1'>149</span>
                </div>
                <p className='h5 mb-3'>Personal</p>

                <div className='py-2 '>
                  <span className='line1 h6 py-2 px-2'><IoCheckmarkSharp/></span>
                  <span className='par1 py-2 px-2'>Strategic Alliance</span>
                </div>
                <div  className='py-2 px-3'>
                  <span className='line1 bckg h6 py-2 px-2'><IoCheckmarkSharp/></span>
                  <span className='par1 bckg px-2 py-2 px-2'>Growth Expansion</span>
                </div>
                <div  className='py-2 mb-2'>
                  <span className='line1 h6 py-2 px-2'><IoCheckmarkSharp/></span>
                  <span className='par1 py-2 px-2 '>Business Planning</span>
                </div>
                <div>
                  <span className='line1 bckg h6 py-2 px-2'><IoCheckmarkSharp/></span>
                  <span className='par1 bckg px-2 py-2 px-2'>Contact Negotiation</span>
                </div>
                <div  className='py-2 mt-2'>
                  <span className='line1 h6 py-2 px-2'><IoCheckmarkSharp/></span>
                  <span className='par1 py-2 px-2'>Market Positioning</span>
                </div>
                
                <div className="btn btn-primary py-2 px-3 mt-4 ">GET STARTED</div>
              </div>
          </div>
        </div>
      </div>

      </div>
    </>
  )
}

export default Services
