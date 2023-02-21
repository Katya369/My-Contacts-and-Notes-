import React, { useState } from "react";

function Timer() {
    setInterval(update, 1000);
    let time = new Date().toLocaleTimeString();
    const [count, setCount] = useState(time);
  
    function update() {
      const newTime = new Date().toLocaleTimeString();
      setCount(newTime);
    }
    return (
      <div >
        <h1>{count}</h1>
        <button onClick={update}>Get Time</button>
      </div>
    );
}
export default Timer;