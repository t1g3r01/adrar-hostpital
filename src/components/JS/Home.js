import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import '../CSS/Home.css'
import Staff from './Staff'

function Home() {
  useEffect(()=>{
    document.getElementById('home').style.borderBottom = '5px solid #2FF75D'
  })
  const select = (e) => {
    let routes = document.getElementsByClassName('nav__route')
     for (var i = 0; i < routes.length; i++) {
       routes[i].style.border = ''
     }
     e.currentTarget.style.borderBottom = '5px solid #2FF75D'
  }
  return (
    <div className="home">
      <div className="nav">
        <div className="nav__logo">
          <p>Logo</p>
        </div>
        <ul className="nav__navbar">
          <li><Link to="/"><p id='home' onClick = {(e) => {select(e)}} className='nav__route' >Home</p></Link></li>
          <li><Link to="/Ads" ><p onClick = {(e) => {select(e)}} className='nav__route'>Ads</p></Link></li>
          <li><button>Sign in</button></li>
        </ul>
      </div>
      <div className="home__banner">
        <img src="https://i.ytimg.com/vi/CShAQmlOEWg/maxresdefault.jpg" alt=""/>
        <div className="banner__introduction">
          <h1>Adrar hospital</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button>Check our ads</button>
        </div>
      </div>
      <div className="home__staff">
        <h1 className="staf__intro">Our Staff</h1>
        <Staff></Staff>
      </div>
    </div>
  )
}

export default Home
