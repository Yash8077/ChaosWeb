
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Timeline from "./pages/timeline";
import HypnoticChaos from "./pages/HypnoticChaos";
import InvertColorToggle from "./components/InvertColorToggle";
import MazeGame from './components/MazeGame';
import './index.css'



function App() {
  return (
    
       <Router>
      
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/hypnotic" element={<HypnoticChaos />} />
        <Route path="/maze" element={<MazeGame />} />
      </Routes>

    </Router>
  );
  
}

export default App;
