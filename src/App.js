import './App.css';



import { Route, Routes } from 'react-router-dom';
import Aboutpage from './project/Aboutpage';
import Birthday from './project/Birthday';
import FathersDay from './project/FathersDay ';
import Homepage from './project/Homepage';
import MothersDay from './project/MothersDay';
import Nav from './project/Nav';
import ShopNav from './project/ShopNav';
import ValentinsDay from './project/ValentinsDay';
import Serv from './project/Serv';

function App() {



  return (
     <div className="App">
   
      <Nav /> 
     <Routes>
    <Route path="/" element={<Homepage />} />

      <Route path="/home" element={<Homepage/>} />
        <Route path="/shop" element={<ShopNav/>} />
        <Route path="/bday" element={<Birthday/>} />
        <Route path="/vday" element={<ValentinsDay/>} />
        <Route path="/fday" element={<FathersDay/>} />
        <Route path="/about" element={<Aboutpage/>} />
        <Route path="/serv" element={<Serv/>} />
        <Route path="/mday" element={<MothersDay/>} />
      
       
    </Routes>  


 
   
    
    
     
     
     {/* <Login/>  */}

      {/* <ShopNow/> */}
      {/* <ThreeCards/> */}
{/* <Birthday/> */}
{/* <ValentinsDay/> */}
{/* <FathersDay/> */}
{/* <MothersDay/> */}
    
    </div>
  );
  
}

export default App;
