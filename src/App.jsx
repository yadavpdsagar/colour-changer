




import {  useState } from 'react'

import './App.css'

function App() {
   const myColors = ["red", "blue", "green"]
  const [color, setColor] = useState(myColors[0]);


  const randomizeFunc = ()=>{
   const index = Math.floor(Math.random()*3)
   setColor(myColors[index])
  }
//   useEffect(()=>{
//    randomizeFunc()
//    }, [])


  return (
   <div className='w-full shadow-lg text-black h-screen duration-200  ' style={{backgroundColor:color}}>
   <button onClick={()=> randomizeFunc()} className='bg-red'>Random color</button>
{/* <div className='fixed fliex flex-wrap justify-center bottom-12 inset-x-0 px-2'>


  <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ' >

  <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>
         Red
         </button>
    <button 
       onClick={()=> setColor('green')}
    className=' outline-none px-4 py-1 rounded-full shadow-lg text-black '>Green</button>
    <button 
       onClick={()=> setColor('blue')}
    className=' outline-none px-4 py-1 rounded-full shadow-lg text-black '>Blue</button>
  </div>

</div> */}
   </div>
  )
}

export default App





