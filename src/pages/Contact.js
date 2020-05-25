import React from 'react';
import emailjs from 'emailjs-com';

import './Contact.css';

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('jasper_angl', 'template_5MP926Qs', e.target, 'user_hnJv4ujOoKAmqrHqRDKwk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div id='Contact' className='contact-div'>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label htmlFor='Name'>Name</label>
        <input type="text" id='Name'name="user_name" placeholder='Your full name..' />
        <label>Message</label>
        <textarea id="subject" name="subject" placeholder="Write something.." />
        <input type="submit" value="Send"/>
      </form>
    </div>
  );
}
export default Contact;