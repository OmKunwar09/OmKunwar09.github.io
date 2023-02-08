import React from 'react'
import flag from '../../Image/Flag.png'
import {FaPhoneAlt, FaEnvelope} from 'react-icons/fa'


const Head = () => {
  return (
    <div>
        <div className="head d_flex">
             <div className="contact">
                <i className="fa fa-phone"><FaPhoneAlt/></i>
                <label>+977 9848931009</label>
                <i className="fa fa-envelope"><FaEnvelope/></i>
                <label>iamseller17@gmail.com</label>
             </div>
             <div className="flag">
                <img src={flag} width={'40px'} height={'30px'}/>
             </div>
        </div>
    </div>
  )
}

export default Head