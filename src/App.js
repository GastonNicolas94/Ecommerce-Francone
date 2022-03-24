import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './conteiner/ItemListConteiner'
import ItemDetailConteiner from './conteiner/ItemDetailConteiner'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from './components/Cart/Cart'

function App() {

  return (
  
  <BrowserRouter>
      <div className="App">
          < NavBar />
          <Routes>
          
            <Route path='/' element={<ItemListConteiner greeting="HOLA SOY ITEM LIST CONTEINER"/>} />
            
            <Route path='/category/:id' element={<ItemListConteiner greeting="HOLA SOY ITEM LIST CONTEINER"/>} />
            
            <Route path='/detail/:detailId' element={<ItemDetailConteiner/>}/>

            <Route path='/cart' element={<Cart />}/>
            
            {/* <Route path='/*' element={<Navigate to='ruta donde tiene que ir'/>}/> path='/*'(Cualquier ruta que no este definida aca)  */}
          
          </Routes>
        </div>
  </BrowserRouter>
  );
}

export default App;
