import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const variants = {
    hidden: { x: '50vw', y: 0 },
    visible: { x: '50vw', y: '50vh', transition: { duration: 0.8 } }
};

function Modal({ setModal }) {
    const navigate = useNavigate();
    const location = useLocation();

    const changeState = () => {  
        setModal(false);
        navigate('/Pizza-framer-site');
    };

    useEffect(() => {
        const handlePopState = () => {
            setModal(false);
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);  // Runs only when component mounts


    return (
        <div className="h-screen w-full absolute top-0 left-0 bg-[#4D0D64] ">
            <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                className="h-40 w-80 bg-white rounded-lg flex flex-col items-center justify-center -translate-x-[50%] -translate-y-[50%]    "
            >
                <h1>Want to Make Another Pizza?</h1>
                <button
                    className="px-4 py-2 border border-black rounded-full mt-10"
                    onClick={() =>changeState()}>
                    Start Again
                </button>
            </motion.div>
        </div>
    );
}

export default Modal;
