import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Dasboard from './pages/Dashboard/Dashboard'
import Clientes from './pages/Clientes/Clientes'
import NuevoTrabajo from './pages/Nuevo Trabajo/Nuevo-trabajo'

const App = () => {
	return (
    <div className='container'>
      <br/>
      <div className="row justify-content-center">
        <Routes>
          <Route path="/" element={<Dasboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/clientes" element={<Clientes/>} />
          <Route path="/nuevo-trabajo" />
        </Routes>
      </div>
    </div>
	)
}

export default App