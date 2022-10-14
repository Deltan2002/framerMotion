import React,{useState} from 'react'
import {motion} from 'framer-motion'


function Box2() {
   
  return (
    <div className="box-container">
        <motion.div className="box"
        drag
        dragConstraints={{
            right:20,
            top:10,
            bottom:10,
            left:5
        }}
        whileHover={{
            scale:1.1
        }}
        whileTap={{
            scale:.9
        }}
        
      
        >

        </motion.div>
    </div>
  )
}

export default Box2