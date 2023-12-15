import React from 'react'
import "./FooterProyect.css"

const FooterProyect = () => {
  return (
    <div>
        <div className='footer-container'>

            <div className='footerinfo-container'>
                <h4>Let's build something great together!</h4>
                <p>(It will take approximately 24 - 48 hours to get back to you with a response)</p>
                <div className='networks-container'>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-github"></ion-icon>
                    <ion-icon name="logo-linkedin"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                </div>
            </div>

            <form action="/submit" method='post'>

                <h2>Tell me more about yourself</h2>

                <div className='name-container'>
                    <div>
                        <input type="text" id='name' name='name' required placeholder="First Name" autoComplete="off" />
                    </div>
                    <div>
                        <input type="text" id='lastname' name='lastname' required placeholder="Last Name" autoComplete="off" />
                    </div>
                </div>

                <div className='email-container'>

                    <div>
                        <input type="email" id='email' name='email' required placeholder="Email Address" autoComplete="off" />
                    </div>
                    <div className='number-container'>
                        <input type="number" id='number' name='number' placeholder="Phone Number (there's no need)" autoComplete="off" />
                    </div>
                </div>

                <div className='textproyect-container'>
                    <h2>Tell me about your project and your design style...</h2>

                    <input type="text" id='text' name='text' required placeholder='Tell me about your project and your design style...' autoComplete="off" />
                </div>

                <div className='send-container'>
                    <button type="submit">Send</button>
                </div>

            </form>



        </div>
    </div>
  )
}

export default FooterProyect