import React from 'react'
import {Routes,Route} from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Projects from '../Pages/Projects'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="*" element={<h1>NOT FOUND</h1>}/>
    </Routes>
  )
}

export default AllRoutes
