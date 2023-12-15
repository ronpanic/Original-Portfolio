import './App.css'
import InfoHome from './InfoHome/InfoHome'
import TopHome from './TopHome/TopHome'
import Projects from './Projects/Projects'
import InfoMid from './InfoMid/InfoMid'
import Footer from './Footer/Footer'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import TheVoid from './TheVoid/TheVoid'
import WppButton from './WppButton/WppButton'



const Home = () => {
  return (
    <>
      <TopHome/>
      <InfoHome/>
      <Projects/>
      <InfoMid/>
      <Footer/>
      <WppButton/>
    </>
  )
}


function App() {
  

  return (

    <div>
      
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/thevoid' element={<TheVoid/>}> </Route>
          </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
