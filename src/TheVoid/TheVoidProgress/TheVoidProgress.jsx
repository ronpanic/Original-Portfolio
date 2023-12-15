import React, { useEffect } from 'react';
import ProgressBar from '@ramonak/react-progress-bar'
import "./TheVoidProgress.css"
import TheVoidPart4 from '../TheVoidPart4/TheVoidPart4';

const TheVoidProgress = () => {




    return (

        <div className='part3y4-container'>

            <div className='part3'>
                <div className='part3-title'>
                    <h2>01 /</h2>
                    <div>
                        <h3>CHAPTER</h3>
                        <h4>PROGRESS</h4>
                    </div>
                </div>
                <ion-icon name="settings-outline"></ion-icon>
            </div>



            <div className='progress-section'>
                <div className='progress-bar'>
                    <h2>Exploitation</h2>
                    <div className='horizontal-line'></div>

                    <p>Optimization</p>
                    <ProgressBar completed={75} bgColor='#077878' isLabelVisible={false} animateOnRender={true} height={18} />

                    <p>Stock</p>
                    <ProgressBar completed={100} bgColor='#077878' isLabelVisible={false} animateOnRender={true} height={18} />

                    <p> Visual Design</p>
                    <ProgressBar completed={100} bgColor='#077878' isLabelVisible={false} animateOnRender={true} height={18} />

                    <p>Interaction Design</p>
                    <ProgressBar completed={90} bgColor='#077878' isLabelVisible={false} animateOnRender={true} height={18} />

                    <div className='advantages-list'>
                        <p>As a Front-end Junior developer in my first year, I strive to focus on optimization to enhance performance and provide a better user experience. I am constantly learning and appreciate the advantages that optimization can bring to web development.</p>
                        <h3>Advantages of Optimization:</h3>
                        <ul>
                            <li>Improved website performance</li>
                            <li>Enhanced user experience</li>
                            <li>Faster loading times</li>
                            <li>Reduced bounce rates</li>
                            <li>Increased customer satisfaction</li>
                            <li>Better search engine rankings</li>
                        </ul>
                    </div>


                </div>

            </div>    

            <TheVoidPart4/>

        </div>
    )
}

export default TheVoidProgress