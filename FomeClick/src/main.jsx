import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import LojaContextProvider from './context/LojaContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LojaContextProvider>
      <App />
    </LojaContextProvider>
  </BrowserRouter>

)
