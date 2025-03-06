import React from "react";
import { NavLink } from 'react-router-dom'
import {motion} from "framer-motion"

const pizzaVariants = {
    initial : {opacity:0},
    final : {opacity:1, transition: {duration : 1,delay: 0.8}}
}


const Pizza = () =>{
    return (
        <motion.div className="flex w-full mt-30 text-white">
        <motion.div variants={pizzaVariants} initial={"initial"} animate={"final"}  
        className="flex flex-col w-full">
            <motion.h1 variants={pizzaVariants} className="mx-auto text-4xl">Welcome to Pizza Joint</motion.h1>
            <motion.button whileHover={{scale: 1.1,   transition:{
                duration:0.3,
                repeat: Infinity, // Number of times to repeat the animation
                repeatType: "mirror", // Reverses the animation direction on each repeat
            }  }}
            className="mx-auto mt-20 px-6 py-3 border rounded-full text-3xl"> 
            <NavLink to='/base'>Create Your Pizza</NavLink>
            </motion.button>
        </motion.div> 
    </motion.div>
    );
}

export default Pizza;