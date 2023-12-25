
import { useState,useEffect } from 'react';
import './App.css';
import Background from './HomePage/Background';
import Hero from './HomePage/Hero';
import Nav from './HomePage/Nav';
import Services from './HomePage/Services';
import Video from './HomePage/Video';
import Components from './HomePage/Components';


function App() {
const[load,setload] = useState(false)

useEffect(() => {
  
// setload(true);
  setTimeout(() => {
    setload(false)
  }, 3000)
}, [])

  return (
    <div>
      
    {/* <Nav /> */}
    {/* <Hero /> */}
 
  {
    load==true? <Background /> : <Components />
  }
    </div>
  );
}

export default App;
