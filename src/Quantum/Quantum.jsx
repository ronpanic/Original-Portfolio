import React from 'react'
import { Link } from 'react-router-dom'
import "./Quantum.css"
import quantumImage from "../../public/images/Quantum.png"
import quantumLog from "../../public/images/Quantum-movies.png"
import quantumMovie from "../../public/images/Quantum-log.png"
import WppButton from '../WppButton/WppButton'

const Quantum = () => {
  return (
    <div>

      <div id='top' className='bg-top-quantum'>

      <div className='backname-top'>
          <Link to='/'>
              <h1>Martin Aguirre</h1>
              <h4>Thevoid Creator</h4>
          </Link>
      </div>

      <div className='ion-icon1'>
          <ion-icon name="videocam-outline"></ion-icon> 
      </div>

      <div className='ion-icon2'>
          <ion-icon name="videocam-outline"></ion-icon> 
      </div>

      </div>

      <div className='img-top-quantum'>
      <a target='_blank' href="https://quantum-kappa-eight.vercel.app/"><img src={quantumImage} alt="" /></a>
      </div>

      <section className='counter-container'>

      <div className='products-counter-quantum'>
          <p>300</p>
          <h6>Movies</h6>
      </div>

      <div className='vertical-line-quantum'></div>

      <div className='products-counter-quantum'>
          <p>0</p>
          <h6>Clients/Days</h6>
      </div>

      <div className='vertical-line-quantum'></div>

      <div className='products-counter-quantum'>
          <p>0</p>
          <h6>Purchased</h6>
      </div>

      <div className='vertical-line-quantum'></div>

      <div className='products-counter-quantum'>
          <p>42</p>
          <h6>Countries</h6>
      </div>


      </section>

      <header className='header-thevoid'>

            <div className='start-header-quantum'>
                <h2>How did all this start?</h2>
                <h6>Jun 8, 2023</h6>

                <div className='horizontal-line-quantum'></div>

                <p>This project was conceived with the objective of developing a fully functional E-commerce. By 'functional', we mean the comprehensive ability of the system to offer users a complete and satisfactory shopping experience.</p>
            
                <h3>What functions does it have integrated?</h3>

                <p>The implemented E-commerce allows users to easily explore the product catalog, facilitating search and filtering based on their individual preferences. In addition, a size and quantity management system has been integrated, giving customers the flexibility to select products according to their specific needs. </p>
                <p>The shopping cart functionality allows users to add products, review their selection, and proceed to purchase efficiently. Likewise, the option to send queries or doubts directly to the brand has been incorporated through an integrated email system, guaranteeing direct and effective communication.</p>
                <p>In short, this E-commerce not only stands out for its aesthetics and design, but for the careful implementation of features that improve the user experience and encourage interactivity. We are committed to providing a platform that not only meets but also exceeds expectations, ensuring a complete and satisfying online shopping experience.</p>
            
            </div>

      </header>

      <div className='part2-header-quantum'>

        <div className='all-part2-container'>
              <div className='lang-container-quantum'>

                <h2>Languages ​​used</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><path fill="#F7DF1E" d="M0 0h256v256H0V0Z"/><path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="143.72" height="128" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="127.51" height="128" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId18c2e7a2bd4ca99520" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"/><stop offset="100%" stop-color="#BD34FE"/></linearGradient><linearGradient id="IconifyId18c2e7a2bd4ca99521" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"/><stop offset="8.333%" stop-color="#FFDD35"/><stop offset="100%" stop-color="#FFA800"/></linearGradient></defs><path fill="url(#IconifyId18c2e7a2bd4ca99520)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"/><path fill="url(#IconifyId18c2e7a2bd4ca99521)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543l-45.119-12.526z"/><path fill="#33A9DC" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16v106.49z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95V51.429z"/><path fill="#EBEBEB" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018v-14.39z"/><path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881H81.127z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711h16.447z"/></svg>
                    
        </div>

          <div className='sample-container'>
            <img src={quantumImage} alt="" />

              <div className='sampleflex-container'>
                <img src={quantumLog} alt="" />
                <img src={quantumMovie} alt="" />
              </div>

              </div>

                <div className='keys'>

                  <div className='keys-button'>
                    <p>Design</p>
                  </div>

                  <div className='keys-button'>
                    <p>Sales</p>
                  </div>

                  <div className='keys-button'>
                    <p>Marketing</p>
                  </div>

                  <div className='keys-button'>
                    <p>Sustainability</p>
                  </div>

                  <div className='keys-button'>
                    <p>Quality</p>
                  </div>

                    </div>
                </div>

            

           </div>

           <WppButton/>

           <div>
          
      </div>

    </div>
  )
}

export default Quantum