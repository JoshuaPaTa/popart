import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mapa from './pages/Mapa'
import Header from './components/header'
import Inicio from './pages/inicio'
import Lineup from './pages/Lineup'
import Galeria from './pages/Galeria'
import Entradas from './pages/Entradas'
import Club from './pages/Club'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <Inicio />
    <Lineup/>
    <Galeria/>
    <Entradas/>
    <Mapa/>
    <Club/>
    <Footer/>
  </>
)
