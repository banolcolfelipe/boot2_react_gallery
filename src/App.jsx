import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Salento } from './components/Salento';
import { Buenavista } from './components/Buenavista';
import { Circasia } from './components/Circasia';
import { Filandia } from './components/Filandia';

function App() {


  return (
    <>
      <BrowserRouter>
        <div>
          <h1 id="title" className='text-center my-3'>Galery Project</h1>
        </div>
        <div id='main-img-container' className='container'>
          <Routes>
         
            <Route path="/Salento1" element={<Salento className='image-size'/>} />
            <Route path="/Buenavista2" element={<Buenavista className='image-size'/>} />
            <Route path="/Circasia3" element={<Circasia className='image-size'/>} />
            <Route path="/Filandia4" element={<Filandia className='image-size'/>} />
            
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