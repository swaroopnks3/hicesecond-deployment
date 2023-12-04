import './App.css';

import { Route, Routes} from "react-router-dom";
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/inc/Navbar';
import Services from './components/pages/Services';
import Error from './components/pages/Error';


function App() {
  
  return (
    <div className='Appp'>
      <Navbar/>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
      </div>
    
  );
}

export default App;
