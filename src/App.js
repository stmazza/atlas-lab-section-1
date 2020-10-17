import React from 'react';
import './App.css';
import Card from './components/Card.js';
import data from './atlas-of-remote-islands.js';

function App() {
  console.log(data);
  let island1=data.islands[0]
  let island2=data.islands[1]
  let island3=data.islands[2]
  console.log(island1)
  return (
    <div>
      <div className="container">
        <h1 className="section-title">Atlas of Remote Islands</h1>
      </div>
      
      <div className="container">
        <h2 className="section-title">Three Remote Islands</h2>
        <ul className="cards">
          
        <Card name={island1.name} description={island1.description} lat={island1.coords.lat} lon={island1.coords.lon} image={island1.image}/>
        <Card name={island2.name} description={island2.description} lat={island2.coords.lat} lon={island2.coords.lon} image={island2.image}/>
        <Card name={island3.name} description={island3.description} lat={island3.coords.lat} lon={island3.coords.lon} image={island3.image}/>
          
        </ul>
      </div>
    </div>
  );
}

export default App;
