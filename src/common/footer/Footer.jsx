import React from 'react'
import "./../cstyle.css"
import play from '../../Image/play-store.png'
import ios from '../../Image/app-store.png'
import logo from '../../Image/Log.png'
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa'

export const Footer = () => {
  return (
      <div className="footer">
          <div className="container d_flex">
            <div className="first one">
              <h3>Download Our App</h3>
              <p>Download App for Android and IOS mobile phone</p>
              <div className="image">
              <img src={play} width={'150px'}/>
              <img src={ios} width={'150px'}/>
              </div>
            </div>
            <div className="first logo">
                <img src={logo} width={'150px'}/>
                <p>Our Purpose Is To Sustainably Make the Pleasure and <br /> Benefits of Sports Accessible to the Many</p>
              </div>
            <div className="first">
                <h3>Useful Link</h3>
                <p>Coupons</p>
                <p>Blog Post</p>
                <p>Return Policy</p>
                <p>Join Affiliate</p>
              </div>
            <div className="first">
                <h3>Follow Us</h3>
                <p> <FaFacebook/> Facebook</p>
                <p> <FaInstagramSquare/> Instagram</p>
              </div>
          </div>
        <div className="copyright">
          <p>Copyright © 2061 Om Clothing. All rights reserved</p>
        </div>
      </div>
  )
}