import React from "react";
import "./TopHome.css"


const HeaderHome = () => {

  return (
    <div className="top-container">
        <img src="/public/bmw e34.webp" alt="Descripción de la imagen" />
            <h3>© Code by Martin</h3>
            <div className='job-container'>
                <h2>Freelance</h2>
                <h2>Designer & Developer</h2>
            </div>
            <div className='main-title'>
                <div className='scroll'>
                    <div className='left-right'>
                        <h1>Martin Aguirre Dieguez - Front-End</h1>
                        <h1>Martin Aguirre Dieguez - Front-End</h1>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default HeaderHome;
