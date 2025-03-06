import React from "react";
import Base from "../components/base";
import App2 from "../components/Pizza";
import { Route, Routes, Navigate } from "react-router-dom";
import Pizza from "../components/Pizza";
import Toppings from "../components/toppings";
import Order from "../components/Order";
import Modal from "../components/Modals";

function Router({pizza,addBase,addToppings,modal,setModal}) {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Pizza-framer-site" replace />} />
          <Route path="/Pizza-framer-site" element={<Pizza />} />
          <Route path="/base" element={<Base addBase={addBase} />} />
          <Route path="/toppings" element={<Toppings addToppings={addToppings}/>} />
          <Route path="/order" element={<Order pizza={pizza} setModal={setModal}/>}/>
        </Routes>
        {console.log(modal)}
        {modal && <Modal setModal={setModal}/>} 
    </div>
  );
}

export default Router;
