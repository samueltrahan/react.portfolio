import React, {useState} from 'react';
import './Contact.css';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [formData, setFormData] = useState({});

  const handleSubmit = event => {
    event.preventDefault();
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({"form-name": 'samuel', ...formData}),
    })
      .then(() =>
        alert(
          'Successfully sent a message!!  The team will get back to you in a timely manner! Thank you'
        )
      )
      .catch(error => alert(error))
    document.getElementById('contact-message-form').reset()
  }



  const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value})
  return (
    <>
      <h1 className="contact-me-header">Contact Me</h1>
    <section id="contact" className="contact-me-section">
    <div className="contact-section">
      <form id="contact-message-form" name="samuel" onSubmit={handleSubmit} data-netlify="true">
        <div className="form-half">
          <label className="label" htmlFor="name">Name</label><br />
          <input value={formData.name} onChange={handleChange} type="text" name="name" id="name" className="name"></input>
        </div>
        <div className="email-half">
          <label className="label" htmlFor="email">Email</label><br/>
          <input value={formData.email} onChange={handleChange} type="text" name="email" id="email"></input>
        </div>
        <div className="message-section">
          <label className="label" htmlFor="message">Message</label><br />
          <textarea value={formData.message} onChange={handleChange} name="message" id="message" rows="6"></textarea>
        </div>
        <ul className="btns">
          <li className="list">
            <input className="input-btn" type="submit" value="Send Message" />
          </li>
          <li className="list">
            <input className="input-btn" type="reset" value="Clear" />
          </li>
        </ul>
      </form>
    </div>
    <div className="contact-me">
      <div className="email-me">
        <h3>Email</h3>
        <a className="email-add" href="mailto:samueldaletrahan@gmail.com">samueldaletrahan@gmail.com</a>
      </div>
      <div className="address">
        <h3>Address</h3>
        <span>
        Lafayette, Louisiana 
        <br />
        United States of America
        </span>
      </div>
    </div>
    </section>
    </>
  )
}
