import React from 'react'
import { Link } from 'react-router-dom'
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand logo fs-4" href="#">Schmt.</a>

            <div className="dropdown">
              <div data-bs-toggle="dropdown" className='show'>
                <IoReorderThreeOutline className='fs-1' />
              </div>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/"}>Home</Link></li>
                <li><Link className="dropdown-item" to={"/about"}>About</Link></li>
                <li><Link className="dropdown-item" to={"/services"}>services</Link></li>
                <li><Link className="dropdown-item" to={"/experiances"}>Experiances</Link></li>
                <li><Link className="dropdown-item" to={"/work"}>Work</Link></li>
                <li><Link className="dropdown-item" to={"/blog"}>Blog</Link></li>
                <li><Link className="dropdown-item" to={"/contact"}>Contact</Link></li>
              </ul>
            </div>
          </div>
    </nav>




    </>
  );
};

export default Navbar
