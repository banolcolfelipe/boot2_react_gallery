import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Salento } from './components/Salento';
import { Buenavista } from './components/Buenavista';

function App() {


  return (
    <>
      <BrowserRouter>
        <div>
          <h1 id="title" className='text-center my-3'>Proyecto Galería</h1>
        </div>
        <div id='main-img-container' className='container'>
          <Routes>
         
            <Route path="/Salento1" element={<Salento className='image-size'/>} />
            <Route path="/Buenavista2" element={<Buenavista className='image-size'/>} />

          </Routes>
        </div>
        <div className='container'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App