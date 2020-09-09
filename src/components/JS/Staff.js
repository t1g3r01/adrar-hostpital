import React,{useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import '../CSS/Staff.css'
// const Slide = require('./Slide').default;
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import { CSSTransition, TransitionGroup } from "react-transition-group";




const staff =[
  {
    id: 1,
    name: 'smito1',
    job:'khdmto1',
    face:'#',
    email: '#',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    name: 'smito2',
    job:'khdmto2',
    face:'#',
    email: '#',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 3,
    name: 'smito3',
    job:'khdmto3',
    face:'#',
    email: '#',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
]

function Staff() {
  const [condition,setCondition] = useState(true)
  const [selected,setSelected] = useState(staff[0])
  console.log('staff:',staff);
  const style = (e) => {
    let members = document.getElementsByClassName('staff__member')
    setCondition(false)
    // document.getElementsByClassName('staff__detail')[0].style.display = 'none'
    // document.getElementsByClassName('staff__detail')[0].style.display = 'block'
    for (var i = 0; i < members.length; i++) {
      members[i].style.opacity = '0.7'
    }
    e.currentTarget.style.opacity = '1'
  }
  return (
  <>
    <h1 className="staff__heading">Our Staff</h1>
    <div className="staff">
     <div className="staff__select">
       {
         staff.map((member)=>(
           <div onClick={(e) => {setSelected(member);style(e)}} className="staff__member">
             <Avatar>H</Avatar>
             <div className="member__info">
               <p>{member.name}</p>
               <p>{member.job}</p>
             </div>
           </div>
         ))
       }
     </div>
     <TransitionGroup className="staff__container">
         <CSSTransition
           key={selected.id}
           timeout={200}
           classNames="staff__de"
         >
        <div  className="staff__detail">
          <div className="staff__top">
            <Avatar>H</Avatar>
            <div className="staff__intro">
              <h1>{selected.name}</h1>
              <h3>{selected.job}</h3>
            </div>
          </div>
          <div className="staff__bottom">
            <p>{selected.description}</p>
          </div>
          <div className="staff__contact">
           <div className="contact">
             <a href={selected.face}><FacebookIcon></FacebookIcon></a>
           </div>
           <div className="contact">
             <a href={selected.email}><EmailIcon></EmailIcon></a>
           </div>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>




    </div>
    </>  )
}

export default Staff
