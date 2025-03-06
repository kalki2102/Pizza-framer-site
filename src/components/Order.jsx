import React, { useEffect } from "react";
import {motion} from 'framer-motion';

function Order({pizza,setModal}){

    const textVariants = {
        initial: { opacity: 0, x: 1000 },
        final: {
          x: 0,
          opacity: 1,   
          transition: { duration: 1, type: "spring", stiffness: 100, damping: 5, staggerChildren: 0.6, when: "beforeChildren" }
        },
        exit: {
          x: "-100vh",
          transition: { ease: "easeInOut" }
        }
      };
    
      const smalltextVariants = {
        initial: { opacity: 0 },
        final: { opacity: 1, transition: { duration: 0.5 } }
      };

    useEffect(() => {
        setTimeout(() => {
            setModal(true);
        }
        ,5000)
    },[setModal])

    const {base,toppings}=pizza;
    return(
    <motion.div  variants={textVariants} initial={"initial"} animate={"final"} exit={"exit"}
        className="flex flex-col items-center mt-40 text-white text-xl">
        <motion.h1 className="2xl">Thank you for your order :</motion.h1>
        <motion.h2 variants={smalltextVariants} className="mt-3">You ordered a {base} pizza with:</motion.h2>
        <motion.ol variants={smalltextVariants} className="mt-5">
        {toppings.map((topping)=>
           <motion.li>{topping}</motion.li> 
        )}
        </motion.ol>
    </motion.div>    
    );
}

export default Order;



