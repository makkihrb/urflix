import React from 'react';
import './Contact.scss';

const ContactUs = () => {
  return (
      <div className="contact-us">
        <h1>Contact Us</h1>
        <p>Please fill out the form below to get in touch with us:</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" pattern="[A-Za-z]+s" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" pattern="[A-Za-z]+@[a-zA-Z]+\.[a-zA-Z]{2,4}" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
  );
};

export default ContactUs;
