import React from 'react'
import { FormControl,InputLabel,Input,TextField } from '@material-ui/core';
import '../CSS/Contact.css'
function Contact() {
  return(
  <div className="form__container">
    <form action="post">
      <div className="form__input" htmlFor="">
       <FormControl>
        <InputLabel htmlFor="my-input">Full Name</InputLabel>
        <Input type='text' id="my-input" aria-describedby="my-helper-text" required />
       </FormControl>
      </div>
      <div className="form__input" htmlFor="">
       <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" type='email' aria-describedby="my-helper-text" required />
       </FormControl>
      </div>
      <textarea required placeholder='Message'></textarea>
      <button type='submit'>Send</button>
   </form>

  </div>

  )
}

export default Contact
