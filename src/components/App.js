import React, { useRef, useState } from 'react'
import '../styles/App.css';
const App = () => {
  const startTime = useRef(0);
  const intervalRef = useRef(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState([]);

  return (
    <div id="main">
      <section>
        <h1 className='seconds-elapsed'>Stopwatch Time</h1>
        <section className='buttons'>
          <button className="start-btn">START</button>
          <button className="stop-btn">STOP</button>
          <button className="lap-btn">LAP</button>
          <button className="reset-btn">RESET</button>
        </section>
      </section>
      <section className='lap-section'>
        <h2>Laps</h2>
        <section className='laps'>
    {laps.map((item) => <p>{item.toFixed(3)}</p>}}
        </section>
      </section>
    </div>
  )
}


export default App;
