/* eslint-disable */

import React, { useState } from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };
  const style = {
    display: 'flex',
    justifyContent: 'center'
}

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:gourav897.codes@gmail.com" rel="noreferrer" target='_blank' className="p-text">gourav897.codes@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 9883432474" className="p-text">+91 9883432474</a>
        </div>
      </div>
      <div className="app__footer-icons">
        <div>
          <a href="https://twitter.com/Gourav0522" target='_blank' style={style}>
            <BsTwitter />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/gourav.biswas.5011516" target='_blank' style={style}>
            <FaFacebook />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/iamgourav_03" target='_blank' style={style}>
            <BsInstagram />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/gourav-biswas-309a48244" target='_blank' style={style}>
            <BsLinkedin />
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
