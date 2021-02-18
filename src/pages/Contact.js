import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';




function Contact() {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const updateName = e => {
    setName(e.target.value);
}

const updateMessage = e => {
  setMessage(e.target.value);
}

  function sendEmail(e) {
    e.preventDefault();
  
    setName('');
    setMessage('');
    emailjs.sendForm('jasper_angl', 'template_5MP926Qs', e.target, 'user_hnJv4ujOoKAmqrHqRDKwk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      window.location = '/';
  }

  return (
    <div id='Contact' className='contact-div'>
      <div className="Caption">
        <h1>Get in touch</h1>
        <h6>If you have any questions or would like to contact me, simply fill out the form below! I would love to chat!</h6>
      </div>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label htmlFor='Name'>Name</label>
        <input type="text" id='Name' value={name} onChange={updateName} name="user_name" placeholder='Your full name..' />
        <label>Message</label>
        <textarea id="subject" value={message} onChange={updateMessage} name="subject" placeholder="Write something.." />
        <input type="submit" value="Send"></input>
      </form>
    </div>
  );
}
export default Contact;