import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'
import {default as rugido} from './rugido.png'
import ItemListConteiner from './conteiner/ItemListConteiner';

function App() {
  return (
    <div className="App">
      < NavBar />
      <img src={rugido} alt='' className="app-imagen"/>
      <ItemListConteiner greeting="HOLA SOY ITEM LIST CONTEINER"/>
    </div>
  );
}

export default App;
