import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                {/* <img src={assets.logo1} alt="" className='logo' /> */}
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt numquam aliquid atque culpa in velit nesciunt quas ut placeat, aut nam enim neque non mollitia ullam est porro doloribus esse.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>0742245255</li>
                    <li>www.slytexsoftwares.co.ke</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>&copy; {new Date().getFullYear()} SlyMarket. All rights reserved.</p>
    </div>
  )
}

export default Footer