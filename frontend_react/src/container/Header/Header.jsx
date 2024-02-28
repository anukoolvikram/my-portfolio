import React from 'react'
import './Header.scss';
import {motion } from 'framer-motion';
import {images} from '../../constants';
import {AppWrap} from '../../wrapper';

const scaleVariants={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
    <motion.div
    whileInView={{x:[-100,0], opacity:[0,1]}} //animation
    transition={{ duration:0.5}} //time for animation for title anukool on the homapage
    className="app__header-info">

    <div className='app_header-badge'>
      <div className='badge-cmp app__flex'>
        <div style={{marginLeft: 20}}>
          <p className="p-text">Hello, I am</p>
          <h1 className="head-text">Anukool</h1>
          <p className="p-text">Welcome to my </p>
          <h2 className="head-text"><span>Portfolio</span></h2>
        </div>
      </div>

      {/* <div className='tag-cmp app__flex'>
        <p className="p-text">Web Developer</p>
        <p className="p-text">CP Master</p>
      </div> */}
    </div>
    </motion.div>

    <motion.div whileInView={{ opacity:[0,1]}} 
    transition={{ duration:0.5, delayChildren:0.5}} 
    className="app__header-img">

      <img src={images.anukool} alt="profile_bg"/>
      <motion.img whileInView={{scale:[0,1]}}
      transition={{duration:1, ease:'easeInOut'}}
      className='overlay_circle'
      src={images.circle}
      alt="profile_circle"/>

    </motion.div>

    <motion.div   
    variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles">
      {[images.python, images.cpp, images.javascript].map((circle,index)=>(
        <div className='circle-cmp app__Flex' key={`circle-${index}`}>
          <img src={circle} alt="circle"/>
        </div>
      ))}
    
    </motion.div>
      
    </div>
  )
}

export default AppWrap(Header, 'home');
