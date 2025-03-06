import {React,useState} from "react"
import Router from "./utils/Router"
import Links from "./components/Links"
import Nav from "./components/Nav"
function App() {

  const [pizza,setPizza]= useState({base:"",toppings:[]});
  const [modal,setModal]=useState(false);

  const addBase =(base) => {
    setPizza({...pizza, base:base});
  }

  const addToppings =(topping) => {
     var newToppings;
      if(!pizza.toppings.includes(topping)){
        newToppings= [...pizza.toppings,topping];
      }
      else {
        newToppings = pizza.toppings.filter(item => item !== topping);
      }
      setPizza({...pizza, toppings:newToppings});
    }


  return (  
    <div className="bg-[#5A0671] h-screen w-full  overflow-hidden">      
      <Nav/>
      <Links/>
      <Router pizza={pizza} addBase={addBase} addToppings={addToppings} modal={modal} setModal={setModal}/>
    </div>
  )
}

export default App
