/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './About.scss'
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper'


const About = () => {
  const [abouts, setAbouts] = useState([])
  useEffect(() => {
    const query = `*[_type == "abouts"]`;
    client.fetch(query)
      .then((data) => {
        setAbouts(data)
      })
    return () => {
    };
  }, [])


  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Development</span><br />means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: .5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h1 className="bolt-text" style={{ marginTop: 20 }} >{about.title}</h1>
            <p className="p-text" style={{ marginTop: 10 }} >{about.description === null ? "" : (about.description.slice(0, 100) + "...")}<a href='#home' className='p-text' style={{textDecoration: 'none'}}>  see more</a></p>
          </motion.div>
        ))}
      </div>
    </>
  )
}


export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  "app__whitebg"
) 
