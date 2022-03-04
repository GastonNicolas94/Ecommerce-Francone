import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'
import {default as rugido} from './rugido.png'

function App() {
  return (
    <div className="App">
      < NavBar />
      <img src={rugido} className="app-imagen"/>
    </div>
  );
}

export default App;
