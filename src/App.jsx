import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './components/hero/index.jsx'
import Header from './components/header1/index.jsx'
import Skills from './components/skills/index.jsx'
import Projects from './components/projects/index.jsx'
// import Contact from './components/contact/index.jsx'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App
