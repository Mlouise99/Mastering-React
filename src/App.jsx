import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllPages from './pages/AllPages'
import Crud from './pages/Crud'
import Data from './pages/Data'
import DataDisplay from './pages/DataDisplay'
import Dom from './pages/Dom'
import Form from './pages/Form'
import Hooks from './pages/Hooks'
import Image from './pages/Image'
import Props from './pages/Props'
import Selection from './pages/Selection'
import Style from './pages/Style'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AllPages/>}>
          <Route path="/crud" element={<Crud/>}/>
          <Route path="/data" element={<Data/>}/>
          <Route path="/data-display" element={<DataDisplay/>}/>
          <Route path="/dom" element={<Dom/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/hook" element={<Hooks/>}/>
          <Route path="/image" element={<Image/>}/>
          <Route path="/props" element={<Props/>}/>
          <Route path="/selection" element={<Selection/>}/>
          <Route path="/styling" element={<Style/>}/>
        </Route>
      </Routes> 
    </Router>
  )
}

export default App
