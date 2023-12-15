import React, { useState, useEffect } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [backgroundColor, setBackgroundColor] = useState('#f8f8f8');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    const handleScroll = () => {

      const projectElements = document.querySelectorAll('.project1, .project2, .project3, .project4');
      let isInView = false;

      projectElements.forEach((project) => {
        const rect = project.getBoundingClientRect();
        const buffer = window.innerHeight * 0.35;

        if (rect.top >= -buffer && rect.bottom <= window.innerHeight + buffer) {

          isInView = true;
          switch (project.className) {
            case 'project1':
              document.body.style.backgroundColor = '#161616';
              break;
            case 'project2':
              document.body.style.backgroundColor = '#e2fff8';
              break;
            case 'project3':
              document.body.style.backgroundColor = '#d8f4fb';
              break;
            case 'project4':
              document.body.style.backgroundColor = '#202020';
              break;
            default:
              document.body.style.backgroundColor = '#f8f8f8';
          }
        }
      });

      if (!isInView) {
        document.body.style.backgroundColor = '#f8f8f8';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <section className="all-section-proyects">
        <h4>RECENT WORK</h4>

        <div className="allprojects">
          <div className="project1">
            <ion-icon name="barbell"></ion-icon>
            <img src="https://ronpanic.github.io/Bfcoaching/images/cbuminfo.jpg" alt="bfcoaching" />

            <div className='project-info'>
              <p className="date">Oct 8, 2023</p>
              <h1>BF COACHING</h1>
              <p className="info">
                Experience the best of both worlds with our Powerbuilding plan. Gain strength in basic exercises and
                stimulate muscle hypertrophy to achieve your goals.
              </p>
              <a target='blank_' href="https://ronpanic.github.io/Bfcoaching/"><button>See more</button></a>
            </div>
          </div>

          <div className="project2">

            <div className='project-info'>
              <p className="date">Jun 8, 2023</p>
              <h1>THE VOID</h1>
              <p className="info">
                E-commerce with a solid, functional and beautiful structure made with React.js + Vite.js. This is my first clothing page with a shopping cart, product filtering and several other functions made with React
              </p>
              <Link to='/thevoid'><button>See more</button></Link>
            </div>
            <ion-icon name="shirt"></ion-icon>
            <img src="https://cdn.discordapp.com/attachments/791413136111697935/1180592661124632646/image.png?ex=657dfb98&is=656b8698&hm=2e1238602ddfc1a5d1e87d5c6b653dd606beaef7deff068a1fe39f053d29012d&" alt="bfcoaching" />
          </div>

          <div className="project3">

            <ion-icon name="logo-whatsapp"></ion-icon>
            <img src="https://cdn.discordapp.com/attachments/791413136111697935/1180630754246529254/image.png?ex=657e1f12&is=656baa12&hm=031509d09e2deefa109f413dc4c676cd7c50024f8b9040cd3da313c0807c9f65&" alt="bfcoaching" />
            <div className='project-info'>
              <p className="date">Aug 21, 2023</p>
              <h1>CREATIVE PORFOLIO</h1>
              <p className="info">
                In this work I wanted to make a different and original Portfolio. I put WhatsApp together with a Portfolio and "Chatfolio" came out. In each of the chats I tell my experience with each of my projects that I did as a Junior programmer in my first stage of learning between 2023 - 2024
              </p>
              <a target='blank_' href="https://ronpanic.github.io/Portfolio2/"><button>See more</button></a>
            </div>
          </div>


          <div className="project4">

            <div className='project-info'>
              <p className="date">May 13, 2023</p>
              <h1>POPFLIX</h1>
              <p className="info">
                This is one of my first projects that I did based a little on Netflix and with some of my touches, it was a page to practice made with html, scss and javascript, but it is not well optimized since, as I said, it was for practice
              </p>
              <a target='blank_' href="https://ronpanic.github.io/Popflixx/"><button>See more</button></a>

            </div>


            <ion-icon name="tv"></ion-icon>
            <img src="https://cdn.discordapp.com/attachments/791413136111697935/1180627306746757133/image.png?ex=657e1bdc&is=656ba6dc&hm=3a80db5c194b2c20e4a7751c86b6a15681fac8a9607ee90527b6dc8d899aeaf2&" alt="bfcoaching" />

          </div>

        </div>




        <h4>2023 - 2024</h4>
      </section>

      <div className='line'></div>

    </div>
  );
};

export default Projects;
