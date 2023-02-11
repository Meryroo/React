import "./Count Down.css"

import { useState, useEffect } from "react";

const CountDown = () => {
  const [time, setTime] = useState("");
  useEffect(()=>{
    let countDownDate = new Date ("Jun 21, 2023 00:00:00").getTime();
    let x = setInterval(()=>{
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 *24));
        let hours = Math.floor((distance % (1000 * 60 * 60 *24) ) /(1000*60*60));
        let minutes = Math.floor ((distance % (1000*60*60))/(1000*60));
        let seconds = Math.floor ((distance % (1000*60)) / 1000);

        setTime (days + "d" + " " + hours + "h" + " " + minutes + "m" + " " + seconds + "s");

        if(distance < 0){
            clearInterval(x);
            setTime("COUNTDOWN FINISHED")
        }
    },1000);
  },[]);
  
  return (<div className="countDown">
    
    <h2>Faltan {time} hasta verano</h2>
  </div>);
};

export default CountDown;