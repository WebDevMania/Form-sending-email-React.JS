import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import classes from './App.module.css'

function App() {
  const form = useRef()
  const [isSend, setIsSend] = useState(false)

  const handleSendEmail = async(e) => {
    e.preventDefault()

    // 4 parameters

    // 1 - service id
    // 2 - template id
    // 3 - form.current
    // 4 - public key

    emailjs.sendForm("service_1ibzq1d", "template_drqemwc", form.current, "4Km-KICgJo1Fb5tW0")
    .then((result) => {
      console.log(result.text)
      setIsSend(true)
      setTimeout(() => {
        setIsSend(false)
      }, 2500)
    })
    .catch((error) => {
      console.log(error.text)
    })
  }

  return (
    <div className={classes.container}>
      <form ref={form} onSubmit={handleSendEmail}>
        <div className={classes.inputBox}>
          <label>Name</label>
          <input type="text" name="from_name"/>
        </div>
        <div className={classes.inputBox}>
          <label>To</label>
          <input type="text" name="to_name"/>
        </div>
        <div className={classes.inputBox}>
          <label>Email</label>
          <input type="email" name="user_email"/>
        </div>
        <div className={classes.inputBox}>
          <label>Message</label>
          <textarea name="message" />
        </div>
        <button type="submit">Send</button>
        {isSend && (
          <div className={classes.issendMessage}>
            Email has been sent successfully
          </div>
        )}
      </form>
    </div>
  )
}

export default App