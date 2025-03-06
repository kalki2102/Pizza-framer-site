import React from "react";
import { GiFullPizza } from "react-icons/gi";
import {motion} from "framer-motion"


const pizzaVariants= {
    initial : {y:-150 , opacity:0}, 
    final : {y: 0 , opacity:1,
        transition: { duration : 1, 
            type: "spring",
            stiffness: 120,
            damping: 10, 
        } 
    }, 
} 



function Nav (){
    return (<motion.div className="w-full h-40 flex p-7 items-center text-white" >
        <GiFullPizza size={'100px'}/>
        <motion.h1 variants={pizzaVariants} initial="initial" animate="final" 
        className="text-xl font-800 border-b-[1px] w-full ml-4 border-zinc-500 ">Pizza Joint</motion.h1>
    </motion.div>);
};

export default Nav;