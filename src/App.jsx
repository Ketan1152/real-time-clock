import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [hours, setHours] = useState('00');
  const [clock, setClock] = useState('Digital Clock');

  useEffect(() => {
    const timer = setInterval(()=>{
      let currentTime = new Date();
      let s=currentTime.getSeconds(), m = currentTime.getMinutes(), h = currentTime.getHours();
      if(s < 10) s = '0' + s;
      if(m < 10) m = '0' + m;
      if(h < 10) h = '0' + h;
      setSeconds(s);
      setMinutes(m);
      setHours(h);
    }, 1000);
  },[]);

  return (
    <>
      <div className='flex flex-col items-center justify-center text-white min-h-screen bg-gray-800'>
        <h1 className='text-5xl font-bold p-5'>
          {clock}
        </h1>
        {clock=="Digital Clock"&&<div className='text-6xl bg-black rounded-full p-6 flex justify-center items-center font-bold mb-4'>
          {hours}:{minutes}:{seconds}
        </div>}
        {clock=="Analog Clock"&&<div className='relative w-64 h-64 bg-gray-900 rounded-full shadow-lg mb-4'>
          <div id='clock' className='absolute inset-0 flex items-center justify-center'>
            <div className="absolute font-bold text-2xl">1</div>
            <div className="absolute font-bold text-2xl">2</div>
            <div className="absolute font-bold text-2xl">3</div>
            <div className="absolute font-bold text-2xl">4</div>
            <div className="absolute font-bold text-2xl">5</div>
            <div className="absolute font-bold text-2xl">6</div>
            <div className="absolute font-bold text-2xl">7</div>
            <div className="absolute font-bold text-2xl">8</div>
            <div className="absolute font-bold text-2xl">9</div>
            <div className="absolute font-bold text-2xl">10</div>
            <div className="absolute font-bold text-2xl">11</div>
            <div className="absolute font-bold text-2xl">12</div>
            <div className='relative w-50 h-50 bg-gray-800 rounded-full shadow-lg mb-4 opacity-20' style={{transform: "translate(-1px, 10px)"}}></div>
            <div className='w-1 h-20 bg-gray-500 absolute' style={{transform: `translate(0%, -50%) rotate(${seconds * 6}deg)`,
          transformOrigin: `0% 100%`}}></div>
            <div className='w-1 h-16 bg-gray-300 absolute' style={{transform: `translate(0%, -50%) rotate(${minutes * 6 + seconds /10}deg)`,
          transformOrigin: `0% 100%`}}></div>
            <div className='w-1 h-12 bg-red-500 absolute' style={{transform: `translate(0%, -50%) rotate(${(hours % 12) * 30 + minutes / 2}deg)`,
          transformOrigin: `0% 100%`}}></div>
          </div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-4 h-4 bg-yellow-400 rounded-full'></div>
          </div>
        </div>}
        <button onClick={()=>{setClock((prev) => prev === 'Digital Clock' ? 'Analog Clock' : 'Digital Clock')}}>
          <div className='text-2xl bg-gray-700 rounded-full p-4 hover:bg-gray-600 transition duration-300'>
            Change to {clock=="Digital Clock" ? "Analog Clock" : "Digital Clock"}
          </div>
        </button>
      </div>
    </>
  )
}

export default App
