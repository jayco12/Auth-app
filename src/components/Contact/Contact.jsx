import React from 'react'
import './Contact.css'
import Image from 'next/image'
import github_icon from '../../../public/assets/github_icon.png'
import mail_icon from '../../../public/assets/mail_icon.png'

const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-section">
        <div className="contact-left">
                <h1>CONTACT US</h1>
                <p>Feel free to message us if there are any problems, or want to provide feedback and suggestions!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <Image src={mail_icon} height={40} width={40} alt=""/>
                        <p>example@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <Image src={github_icon} height={40} width={40} alt=""/>
                        <p>github.com/example</p>
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter your name" name="name"/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter your email" name="email"/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                <button type="submit" className="contact-submit">SUBMIT NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Contact