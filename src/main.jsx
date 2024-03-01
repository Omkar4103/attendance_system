import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import Portal from './Portal';
import Contact from './components/Contact';
import About from './components/About';
import TanStackTable from './components/TanstackTable';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import AttendanceTable from './components/Attendancetable';
// import CombinedTable from './components/CombinedTable';

const Root = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Portal/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/table" element={<TanStackTable/>}/>
      <Route path="/table2" element={<AttendanceTable />}/>
      {/* <Route path="/table3" element={<CombinedTable />}/> */}
      <Route path='/login' element={Login}/>
      <Route path='/signup' element={SignUp}/>
    </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(<Root />);
