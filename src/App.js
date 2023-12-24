
import { useState,useEffect } from 'react';
import './App.css';
import Background from './Background';
import Hero from './Hero';
import Nav from './Nav';
import Services from './Services';
import Video from './Video';
import Components from './Components';


function App() {
const[load,setload] = useState(false)

useEffect(() => {
  
setload(true);
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
