import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './conteiner/ItemListConteiner';
import ItemDetailConteiner from './conteiner/ItemDetailConteiner';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
  
  <BrowserRouter>
      <div className="App">
        < NavBar />
        <Routes>
          <Route path='/' element={<ItemListConteiner greeting="HOLA SOY ITEM LIST CONTEINER"/>} />
          <Route path="/category/:id" element={<ItemListConteiner greeting="HOLA SOY ITEM LIST CONTEINER"/>} />
          {/* <Route path='/*' element={<Navigate to='ruta donde tiene que ir'/>}/> path='/*'(Cualquier ruta que no este definida aca)  */}
        </Routes>
        <ItemDetailConteiner/>
      </div>
    </BrowserRouter>
  );
}

export default App;
