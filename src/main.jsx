import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portal from './Portal';
import Contact from './components/Contact';
import About from './components/About';
import './index.css';
import TanStackTable from './components/TanstackTable';

const Root = () => {
  return (
    <Router>
       {/* <Portal /> */}
       {/* <About />  */}
       {/* <Contact />  */}
       <TanStackTable/>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
