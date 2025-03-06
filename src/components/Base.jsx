import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaGreaterThan } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

var buttonVisible=false;
function Base({addBase}){
    const [bases,setBases] =useState([{id:0, name:'Classic',isSelected:false},
                {id:1, name:'Thin & Crispy',isSelected:false},
                {id:2, name:'Thick Crust',isSelected:false}])
    const baseVariants = {
        initial : {x:10000,opacity:0},
        finally : {x:0,opacity:1,transition : 
                    {type:"spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.5}}} 


                const handleBaseSelect = (index) => {
                    setBases(bases.map((base, i) =>
                    i === index ? { ...base, isSelected:true } :  { ...base, isSelected:false } 
                ));
                addBase(bases[index].name)
                buttonVisible=true;
                };


    return (<motion.div variants={baseVariants} initial="initial" animate="finally"
            className='text-white flex flex-col mt-30'>
            <div className='flex flex-col mt-5 mx-auto'>
            <h1 className='border-b-1 border-zinc-400 mx-auto  w-fit text-xl'>Step 1: Choose Your Base</h1>
            <ul >
            {bases.map((elem,index)=>
            <motion.li key={index} className='mt-2 ml-2 flex gap-2 items-center text-lg hover:text-[#D1AA2A]' onClick={()=>handleBaseSelect(index)}
            whileHover={{scale:1.4,originX:0,transition:{type:"spring", stiffness: 100,damping: 3}    
            }}>{elem.isSelected && <FaGreaterThan size={'15px'}/>}
                {elem.name}</motion.li>)}
            </ul>
            {buttonVisible && <motion.button whileHover={{scale: 1.1,  transition:{
                duration:0.3,
                repeat: Infinity,
                repeatType: "mirror"}}}
            className='w-fit px-8 py-2 mt-10 border rounded-full text-xl '><NavLink to='/toppings'>Next</NavLink></motion.button>}
        </div>
    </motion.div>);
}
export default Base;