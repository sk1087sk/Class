import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import ClientForm from './components/ClientForm'
import FreelanceForm from './components/FreelanceForm'
import Error from './components/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <Router>
         <Header />
         <Routes>
            {/* width Outlet */}
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<Survey />}>
               <Route path="/survey/client" element={<ClientForm />} />
               <Route path="/survey/freelance" element={<FreelanceForm />} />
            </Route>
            <Route path="/*" element={<Error />} />

            {/* widthout Outlet */}
            {/* <Route path="/" element={<Home />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/survey/client" element={<ClientForm />} />
            <Route path="/survey/freelance" element={<FreelanceForm />} /> */}
         </Routes>
      </Router>
   </React.StrictMode>,
)
