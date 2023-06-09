import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Typed from 'typed.js';

import './Header.scss'
import { images } from '../../constants'
import {AppWrap} from '../../wrapper'

const Header = () => {
  useEffect(() => {
    const typed = new Typed('.multiple-text', {
      strings: ['Data Scientist', 'Python Developer', 'Machine Learning Expert', 'MERN Developer', 'Web Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      showCursor: false
    })
    return () => {
      typed.destroy();
    }
  }, [])

  const scaleVariatns = {
    whileInView: {
      scale: [0,1],
      opacity: [0,1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <div className='app__header app__flex' >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className='app__header-info'
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Gourav</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className='p-text multiple-text'></p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className='app__header-img'
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0,1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariatns}
        whileInView={scaleVariatns.whileInView}
        className='app__header-circles'
      >
        {[images.python, images.react, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home')
