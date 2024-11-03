import './App.css';
import Navigation from './components/navbar/navbar';
import Info from './components/About/About';
import TownTabs from './components/tabs/tabs';

function App() {
  return (
    <div className="App">
      <Navigation />

      <div className="main-container">
        <Info />
        <TownTabs/>

      </div>
    </div>
  );
}

export default App;
