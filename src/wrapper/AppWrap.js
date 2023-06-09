import React from 'react'
import { NavigationDots, SocialMedia } from '../components'

import './AppWrap.scss'

const AppWrap = (Componant, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia />

            <div className="app__wrapper app__flex">
                <Componant />

                <div className="copyright">
                    <p className='p1'>Copyright &copy; 2023 by CodeWithGourav</p>
                    <p className='p1'>All Rights Reserved</p>
                </div>
            </div>
            <NavigationDots active={idName}/>
        </div>
    )
}

export default AppWrap;
