import React,{useState} from 'react'
import {motion} from 'framer-motion'


function Box1() {
    const [animate, setAnimate] = useState(false)
  return (
    <div className="box-container">
        <motion.div className="box"
        
        animate={{
            x: animate ? 1000: 0, //place at
            opacity: animate ? 1: .5,
            // scale: 2
            rotate: animate ? 360: 0
            
        }}
        initial={{
            opacity: .1,
            
        }}
        transition={{
            type:'spring',
            stiffness: 60, //bounce back
           // damping:100 //slow
        }}
        onClick={() => setAnimate(!animate)}
        >

        </motion.div>
    </div>
  )
}

export default Box1