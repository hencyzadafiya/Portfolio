import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { imgConfig } from '../images/image';

const Contact = () => {
  return (
    <>
    <div  className='apage pb-5'>
        <div className='container-fluid'>
          <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12'>
                <div className='h6  text-center about'> HOME <FaAngleRight/> CONTACT <FaAngleRight/>  </div>
                <p className='h2 head1 text-center'>Contact us</p>
              </div>
          </div>
        </div>

        <div className='container mt-5 pt-5'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 bckg1'>
                    <div>
                        <h3>Contact us</h3>
                        <p className='par1'>We're open for any suggestion or just to have a chat</p>

                        <div className='d-flex mt-4'>
                            <span>
                                <h6>ADDRESS:</h6>
                                <p className='par1'>198 West 21th <br/>
                                Street, Suite 721 <br/> New York NY <br/> 10016</p>
                            </span>

                            <span className='mx-4'>
                                <h6>EMAIL:</h6>
                                <p>info@yoursite.com</p>
                            </span>

                            <span className='mx-4'>
                                <h6>PHONE:</h6>
                                <p>+ 1235 2355 98</p>
                            </span>
                        </div>

                        <form action="" className='mt-5'>
                            <div>
                                <input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
                            </div>
                            <div>
                                <input type="email" className="form-control mt-4" name="email" id="email" placeholder="Email"/>
                            </div>
                            <div>
                                <input type="text" className="form-control mt-4" name="subject" id="subject" placeholder="Subject"/>
                            </div>
                            <div>
                                <textarea name="message" className="form-control mt-4" id="message" cols="30" rows="4" placeholder="Create a message here"></textarea>
                            </div>
                            <div>
                                <input type="submit" value="Send Message" className="btn btn-primary mt-4"/>
                            </div>
                        </form>

                        <h4 className='mt-5'>Follow us here</h4>

                        <div className='d-flex h6 mt-4'>
                            <span>FACEBOOK</span> 
                            <span className='mx-3'>TWITTER</span> 
                            <span className='mx-3'>INSTAGRAM</span>
                            <span className='mx-3'>DRIBBBLE</span>
                        </div>
                    </div>
                </div>


                <div className='col-lg-6 col-md-6 col-sm-12 pt-5 mt-5'>
                <div  style={{height:'700px' , width:'100%' , overflow:'hidden'}}>
                            <img src={imgConfig?.map} alt="sry"  className='block-20 d-flex align-items-center justify-content-center mt-5 pt-5'/>
                        </div>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Contact
