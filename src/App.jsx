import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './components/hero/index.jsx'
import Header from './components/header/index.jsx'
import Skills from './components/skills/index.jsx'
import Projects from './components/projects/index.jsx'
import Contact from './components/contact/index.jsx'

function App() {

  return (
    <>
     <Header />
     <BrowserRouter>
     <Routes>
     <Route path='/hero' element = {<Hero />} ></Route>
     <Route path='/skills' element = {<Skills />} ></Route> 
     <Route path='/project' element = {<Projects />} ></Route>
     <Route path='/contact' element = {<Contact />} ></Route>
     </Routes>
      
     </BrowserRouter>
     
    </>
  )
}

export default App
