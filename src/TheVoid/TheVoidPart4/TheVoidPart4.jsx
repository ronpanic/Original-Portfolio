import React, { useState, useEffect } from 'react';
import "./TheVoidPart4.css";


const TheVoidPart4 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    const handleButtonClick = () => {
        const currentPosition = window.scrollY;
        const targetPosition = 0;
        const distance = targetPosition - currentPosition;
        const frames = 150;
        const step = distance / frames;

        const interval = setInterval(() => {
            window.scrollBy(0, step);

            if (Math.abs(window.scrollY - targetPosition) < Math.abs(step)) {
                clearInterval(interval);
                window.scrollTo(0, targetPosition);
            }
        }, 10);
    };

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - document.querySelector('.slider-container').offsetLeft);
        setScrollLeft(document.querySelector('.slider-container').scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - document.querySelector('.slider-container').offsetLeft;
        const walk = (x - startX) * 2;
    
        
        const frames = 10;
        
        const container = document.querySelector('.slider-container');
        container.scrollLeft = scrollLeft - walk;
    };
    
    const handleMouseLeave = () => {
        setIsDragging(false);
      };

    
    return (
        <div>
            <div className='part4'>
                <div className='part3-title'>
                    <h2>02 /</h2>
                    <div>
                        <h3>CHAPTER</h3>
                        <h4>PALLETTE</h4>
                    </div>
                </div>
                <div className='part4-ion1'>
                    <ion-icon name="color-palette-outline"></ion-icon>
                </div>
            </div>

            <div className='part4-bg'>
                <div className='pallette-container'>
                    <h2>Why this color pallette?</h2>
                    <div className="blackhorizontal-line"></div>
                    <h3>Color Selection Strategy</h3>
                    <p>Choosing the color palette for a website, as in the case of my fashion-focused site THEVOID, is a task that can range from being straightforward to challenging, depending on various factors. The selection of colors is not only about personal preferences but also involves strategic considerations. In my case, while designing the color palette for THEVOID, I took into account the nature of the content: fashion. I aimed to convey a sense of elegance and modernity, so I opted for a combination of shades like #067777, #4680f9, #6b7bff, #ffffff, and #dfe5f1.</p>
                    <div className='paletas-container'>
                        <div>
                            <div className='paleta1'><h6>#067777</h6></div>
                            <div className='paleta2'><h6>#4680f9</h6></div>
                            <div className='paleta3'><h6>#6b7bff</h6></div>
                            <div className='paleta4'><h6>#dfe5f1</h6></div>
                            <div className='paleta5'><h6>#ffffff</h6></div>
                        </div>
                        <div>
                            <img src="https://cdn.discordapp.com/attachments/791413136111697935/1168250397631185036/image.png?ex=657f3977&is=656cc477&hm=a911d6a83ecfed494271872c4f8996054d672ae128469e132d96871be52fc088&" alt="" />
                        </div>
                    </div>
                    <div className='pallette-explication'>
                        <div className='paleta-explication'>
                            <div className='paleta1'><h6>#067777</h6></div>
                            <p>The teal green (#067777) reflects freshness and vitality, perfectly highlighting the dynamic essence of fashion.</p>
                        </div>
                        <div className='paleta-explication'>
                            <div className='paleta2'><h6>#4680f9</h6></div>
                            <p>The deep blue (#4680f9) suggests confidence and serenity, essential qualities in the fashion world.</p>
                        </div>
                        <div className='paleta-explication'>
                            <div className='paleta3'><h6>#6b7bff</h6></div>
                            <p>The soft violet (#6b7bff) adds a touch of creativity and originality.</p>
                        </div>
                        <div className='paleta-explication'>
                            <div className='paleta4'><h6>#dfe5f1</h6></div>
                            <p>The light gray (#dfe5f1) acts as a neutral background, providing visual balance and highlighting the other colors.</p>
                        </div>
                        <div className='paleta-explication'>
                            <div className='paleta5'><h6>#ffffff</h6></div>
                            <p>Lastly, white (#ffffff) symbolizes purity and minimalism, emphasizing timeless elegance.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='circle-progress-container'>
                <h2>Key Points & Results.</h2>
                <div className='horizontal-line'></div>
                <div className="row-container">
                    <div className='circleimg-container'>
                        <div>
                            <img src="https://cdn.discordapp.com/attachments/791413136111697935/1181709157443838064/circle_85.png?ex=65820b6a&is=656f966a&hm=fed4d2e3bd5b261b3da7558d9ac2b96457073f334cab205165c64de0d0ba8896&" alt="" />
                            <h5>Striking Color Palette</h5>
                            <p>Achieve 85% impact with a color palette that captivates, conveying the essence and distinctive style of TheVoid.</p>
                        </div>
                        <div>
                            <img src="https://cdn.discordapp.com/attachments/791413136111697935/1181709156734996535/circle_100.png?ex=65820b6a&is=656f966a&hm=de6977fd37033f8e3df0debb144fd7e4435bac317fd6e0619102f92a97ace5aa&" alt="" />
                            <h5>Immersive Visual Experience</h5>
                            <p>Attain 100% in creating an immersive visual experience, where each design element contributes to the unique narrative of your brand.</p>
                        </div>
                    </div>
                </div>
                <div className="row-container">
                    <div className='circleimg-container'>
                        <div>
                            <img src="https://cdn.discordapp.com/attachments/791413136111697935/1181709510075764796/circle_50.png?ex=65820bbe&is=656f96be&hm=ee9168172812923eb265f09b4de1501eac8c6f7807251fb8e786cec80bfba382&" alt="" />
                            <h5>Elegance and Modernity</h5>
                            <p>Fuse 50% elegance and modernity into your design, harmonizing classic and contemporary elements on every page.</p>
                        </div>
                        <div>
                            <img src="https://cdn.discordapp.com/attachments/791413136111697935/1181709157120868382/circle_75.png?ex=65820b6a&is=656f966a&hm=6b17ae4f544ae7d34259af542870b8ed84649356a0cc5e8f72a4caada4be11f6&" alt="" />
                            <h5>Striking Minimalism</h5>
                            <p>Reach 75% visual minimalism, crafting a clean and sophisticated experience that accentuates the timeless essence of your brand.</p>
                        </div>
                    </div>
                </div>
                
                <div className='moreproyects-container'>
                    <div className="horizontal-line"></div>
                    <h2>Feel free to explore additional pieces of my work.</h2>
                    <h6>I appreciate any opinion you give about my work. I try to do these jobs with all my dedication, not only so that the user has a better experience when managing these web applications, but also so that I can learn more and more.</h6>
                    <div className='slider-container' onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <div className='cardsproyect-container'>
                            <div className='card'>
                                <img src="https://cdn.discordapp.com/attachments/791413136111697935/1182156569161515018/image.png?ex=6583ac19&is=65713719&hm=cda39ca38a591dadf7b877669b730ca2fe23322f93cf48f2b3c50e4dd60e4471&" alt="" />
                                <div className='cardinfo-container'>
                                    <h5>THE VOID</h5>
                                    <p>Ecommerce simulator made with Javascript - React + Vite. Emailjs, product filtering and shopping cart integrated</p>
                                    <div className='button-container'>
                                        <p className='button-card'>See Proyect</p>
                                        <ion-icon name="arrow-forward-outline"></ion-icon>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <img src="https://cdn.discordapp.com/attachments/791413136111697935/1182156569161515018/image.png?ex=6583ac19&is=65713719&hm=cda39ca38a591dadf7b877669b730ca2fe23322f93cf48f2b3c50e4dd60e4471&" alt="" />
                                <div className='cardinfo-container'>
                                    <h5>THE VOID</h5>
                                    <p>Ecommerce simulator made with Javascript - React + Vite. Emailjs, product filtering and shopping cart integrated</p>
                                    <div className='button-container'>
                                        <p className='button-card'>See Proyect</p>
                                        <ion-icon name="arrow-forward-outline"></ion-icon>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <img src="https://cdn.discordapp.com/attachments/791413136111697935/1182156569161515018/image.png?ex=6583ac19&is=65713719&hm=cda39ca38a591dadf7b877669b730ca2fe23322f93cf48f2b3c50e4dd60e4471&" alt="" />
                                <div className='cardinfo-container'>
                                    <h5>THE VOID</h5>
                                    <p>Ecommerce simulator made with Javascript - React + Vite. Emailjs, product filtering and shopping cart integrated</p>
                                    <div className='button-container'>
                                        <p className='button-card'>See Proyect</p>
                                        <ion-icon name="arrow-forward-outline"></ion-icon>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <img src="https://cdn.discordapp.com/attachments/791413136111697935/1182156569161515018/image.png?ex=6583ac19&is=65713719&hm=cda39ca38a591dadf7b877669b730ca2fe23322f93cf48f2b3c50e4dd60e4471&" alt="" />
                                <div className='cardinfo-container'>
                                    <h5>THE VOID</h5>
                                    <p className='info-card'>Ecommerce simulator made with Javascript - React + Vite. Emailjs, product filtering and shopping cart integrated</p>
                                    <div className='button-container'>
                                        <p className='button-card'>See Proyect</p>
                                        <ion-icon name="arrow-forward-outline"></ion-icon>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <img src="https://cdn.discordapp.com/attachments/791413136111697935/1182156569161515018/image.png?ex=6583ac19&is=65713719&hm=cda39ca38a591dadf7b877669b730ca2fe23322f93cf48f2b3c50e4dd60e4471&" alt="" />
                                <div className='cardinfo-container'>
                                    <h5>THE VOID</h5>
                                    <p>Ecommerce simulator made with Javascript - React + Vite. Emailjs, product filtering and shopping cart integrated</p>
                                    <div className='button-container'>
                                        <p className='button-card'>See Proyect</p>
                                        <ion-icon name="arrow-forward-outline"></ion-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div onClick={handleButtonClick} className='scroll-top-container'>
                    <div>
                        <ion-icon name="chevron-up-circle"></ion-icon>
                    </div>
                    <p>Back to top</p>
                </div>
            </div>
        </div>
    );
};

export default TheVoidPart4;
