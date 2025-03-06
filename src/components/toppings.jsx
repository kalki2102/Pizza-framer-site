import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaGreaterThan } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const baseVariants = {
    initial : {x:10000},
    finally : {x:0,transition : 
                {type:"spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5}}} 

function Toppings({addToppings}){    
    const [topping,settopping] =useState([{id:0, name:'mushrooms',isSelected:false},
                {id:1, name:'peppers',isSelected:false},
                {id:1, name:'olives',isSelected:false},
                {id:1, name:'extra cheese',isSelected:false},
                {id:1, name:'tomatoes',isSelected:false},
                {id:2, name:'onions',isSelected:false}])

                const handletoppingelect = (index) => {
                    settopping(topping.map((base, i) =>
                        i === index ? { ...base, isSelected:!base.isSelected } :base 
                    ));
                    addToppings(topping[index].name);
                    setButton(true);
                };
    const [buttonVisible,setButton]=useState(false);



    return (<motion.div variants={baseVariants} initial="initial" animate="finally"
            className='text-white flex flex-col mt-30'>
            <div className='flex flex-col mt-5 mx-auto'>
            <h1 className='border-b-1 border-zinc-400 mx-auto  w-fit text-xl'>Step 2: Choose Your Toppings</h1>
            <ul >
            {topping.map((elem,index)=>
            <motion.li key={index} className='mt-2 ml-2 gap-3 flex  items-center text-lg hover:text-[#D1AA2A]' onClick={()=>handletoppingelect(index)}
            whileHover={{scale:1.4,originX:0,transition:{type:"spring", stiffness: 100,damping: 3}    
            }}>{elem.isSelected && <FaGreaterThan size={'15px'}/>}
                {elem.name}</motion.li>)}
            </ul>
            {buttonVisible && <motion.button whileHover={{scale: 1.1,  transition:{
                duration:0.3,
                repeat: Infinity,
                repeatType: "mirror"}}}
            className='w-fit px-8 py-2 mt-10 border rounded-full text-xl '><NavLink to='/order'>Order</NavLink></motion.button>}
        </div>
    </motion.div>);
}
export default Toppings;