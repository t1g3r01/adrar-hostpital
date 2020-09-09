import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom"
import '../CSS/Home.css'
import Staff from './Staff.js'
import Contact from './Contact.js'
import MailIcon from '@material-ui/icons/Mail';
import MapIcon from '@material-ui/icons/Map';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import Auth from "./Auth";
import Error from "./Error";
import { auth } from "../../services/firebase";
function Home() {
  useEffect(() => {
    document.getElementById("home").style.borderBottom = "5px solid #2FF75D";
  });
  const select = (e) => {
    let routes = document.getElementsByClassName("nav__route");
    for (var i = 0; i < routes.length; i++) {
      routes[i].style.border = "";
    }
    e.currentTarget.style.borderBottom = "5px solid #2FF75D";
  };
  const [mAuth, setAuth] = useState(false);
  const handleAuth = () => {
    setAuth(!mAuth);
  };
  const [authBtn, setAuthBtn] = useState(false);
  const handleAuthBtn = () => {
    auth.signOut();
    setAuthBtn(false);
  };

  useEffect(() => {
    console.log(auth.currentUser, authBtn,"1");
    const currentUser =  () => {
      if ( auth.currentUser != null) setAuthBtn(true);


      console.log(auth.currentUser, authBtn);
    };
    currentUser();
  }, [auth.currentUser]);
  console.log(auth.currentUser, authBtn,"#");
  console.log(auth.currentUser, authBtn,"#");
  auth.onAuthStateChanged((user) => {
    if (user)
     {
      setAuthBtn(true)
      setAuth(false)
     }
    else
      setAuthBtn(false)
  })
  return (
    <div className="home">
      <div className="nav">
        <div className="nav__logo">
          <p>Logo</p>
        </div>
        <ul className="nav__navbar">
          <li>
            <Link to="/">
              <p
                id="home"
                onClick={(e) => {
                  select(e);
                }}
                className="nav__route"
              >
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link to="/Ads">
              <p
                onClick={(e) => {
                  select(e);
                }}
                className="nav__route"
              >
                Ads
              </p>
            </Link>
          </li>
          {

          authBtn  ?
            <li>
              <button onClick={handleAuthBtn}>Log out</button>
            </li>
           :
            <li>
              <button onClick={handleAuth}>Sign in</button>
            </li>



          }
          <li>
              <button onClick={handleAuthBtn}>Log outtt {`${authBtn}`}</button>
            </li>
        </ul>
      </div>
      <Auth collapsed={mAuth} />
      <div className="home__banner">
        <img
          src="https://i.ytimg.com/vi/CShAQmlOEWg/maxresdefault.jpg"
          alt=""
        />
        <div className="banner__introduction">
          <h1>Adrar hospital</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button>Check our ads</button>
        </div>
      </div>
      <div className="home__staff">
        <Staff></Staff>
      </div>
      <div className="home__contact">
        <h1 className="staff__heading">Contact us</h1>
        <Contact></Contact>
      </div>
      <div className="home__footer">
        <div class="footer">
          <div class="footer-body">
            <div class="loaction">
              <div class="loc-title">
                 <MapIcon></MapIcon><h2>Area</h2>
              </div>
              <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7053.248874376995!2d-0.26028268461722776!3d27.882804892370746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdf59e549bedab91%3A0x76769b6fb79c55a2!2sHospital%20Cac%20240!5e0!3m2!1sen!2sdz!4v1599695010774!5m2!1sen!2sdz" width="640" height="480"></iframe>
              </div>
            </div>
            <div class="contacts">
              <div class="footer__contact">
                <p><RoomIcon></RoomIcon>&nbsp;Lorem Ipsum Dolor</p>
                <p><PhoneIcon></PhoneIcon>(222)300-444</p>
                <p><MailIcon></MailIcon>email@email.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
