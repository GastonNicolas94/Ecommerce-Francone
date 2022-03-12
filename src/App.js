import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import {default as rugido} from './rugido.png'
import ItemListConteiner from './conteiner/ItemListConteiner';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        < NavBar />
        <img src={rugido} alt='img' className="app-imagen"/>
        <Routes>
          <Route path='/' element={<ItemListConteiner greeting="HOLA SOY ITEM LIST CONTEINER"/>} />
          {/* <Route path='/*' element={<Navigate to='ruta donde tiene que ir'/>}/> path='/*'(Cualquier ruta que no este definida aca)  */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
