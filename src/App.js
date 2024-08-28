import './App.css';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Demo from './pages/Demo';
import Contactus from './pages/Contactus';
import Error from './pages/Error';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { FaAlignJustify } from "react-icons/fa6";

function App() {
  return (
    <div className='app-container'>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Documentation" element={<Documentation />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;