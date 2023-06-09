/* eslint-disable */

import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const SocialMedia = () => {
    const style = {
        display: 'flex',
        justifyContent: 'center'
    }
    return (
        <div className='app__social'>
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
    )
}

export default SocialMedia
