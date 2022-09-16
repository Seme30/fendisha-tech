import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../styles/counter.css";



const Counter = () => {

  // const [counterData, setCounterData] = useState([
  //   {
  //     number: 0,
  //     text: "Clients",
  //   },
  //   {
  //     number: 350,
  //     text: "Running Projects",
  //   },
  //   {
  //     number: 900,
  //     text: "Projects Complete",
  //   },
  // ])

  var [clientNumber, setClientNum] = useState(0) 
  var [finishedProNum, setfinishedProNum] = useState(0)
  var [unfinishedProNum, setUnfinishedProNum] = useState(0)
  useEffect(()=>{
    const called = () => {
      for(let i = 0; i <= 18; i++){
      let new_clientNumber = 0;
      if(new_clientNumber <= 18){
        new_clientNumber = clientNumber+i
        setClientNum(new_clientNumber)
      } else{
        return
      } 
    }
  }
  return ()=> called()
}, [clientNumber])


useEffect(()=>{
  const called = ()=>{
    for(let i = 0; i <= 9; i++){
      let new_unfinishedProNum = 0;
      if(new_unfinishedProNum <= 9){
        new_unfinishedProNum = unfinishedProNum + i
        setUnfinishedProNum(new_unfinishedProNum)
      } else{
        return
      }
        
    }
  }
  return ()=> called()
}, [unfinishedProNum])

useEffect(()=>{
  const called = ()=>{
    for(let i = 0; i <= 15; i++){
      let new_finishedProNum = 0;
      if(new_finishedProNum <= 15){
        new_finishedProNum = finishedProNum + i
        setfinishedProNum(new_finishedProNum)
      } else{
        return
      }
    }
  }
  return ()=> called()
}, [finishedProNum])


  return (
    <section className="counter" id="projects">
      <div className="container">
        <div 
        className="counter__wrapper">
            <motion.div 
            initial={{scale: 0.5, opacity: 0.7}}
            whileInView={{ scale: 1, opacity: 1}}
            transition={{duration: 1}}
            className="counter__item">
              <div 
              className="counter__number">{clientNumber}</div>
              <div className="counter__title">Clients</div>
            </motion.div>
            <motion.div 
            initial={{scale: 0.5, opacity: 0.7}}
            whileInView={{ scale: 1, opacity: 1}}
            transition={{duration: 1}}
            className="counter__item">
              <div className="counter__number">{unfinishedProNum}</div>
              <div className="counter__title">Running Projects</div>
            </motion.div>
            <motion.div 
            initial={{scale: 0.5, opacity: 0.7}}
            whileInView={{ scale: 1, opacity: 1}}
            transition={{duration: 1}}
            className="counter__item">
              <div className="counter__number">{finishedProNum}</div>
              <div className="counter__title">Projects Complete</div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
