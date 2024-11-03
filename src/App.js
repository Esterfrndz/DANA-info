import './App.css';
import Navigation from './components/navbar/navbar';
import Info from './components/About/About';
import TownTabs from './components/tabs/tabs';
import Material from './components/materials/materials';
import Tlf from './components/tlf/tlf';



function App() {
  return (
    <div className="App">
      <Navigation />

      <div className="main-container">
        <Info />
        <div className='title-map'><h2>¿Dónde se encuentran los puntos de recogida?</h2></div>
        <TownTabs/>
        <Material/>
        <Tlf/>

      </div>
    </div>
  );
}

export default App;
