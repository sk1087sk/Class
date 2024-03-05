import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Freelances from './pages/Freelances'
import Results from './pages/Results'
import Header from './components/Header'
import Error from './components/Error'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
       <Header />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/survey/:questionNumber" element={<Survey />} />
         <Route path="/freelances" element={<Freelances />} />
         <Route path="/results" element={<Results />} />
         <Route path="*" element={<Error />} />
       </Routes>
     </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
