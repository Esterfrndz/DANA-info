import React from 'react';
import '../materials/materials.css';

function Material() {
  return (
    <div className="container-material">
      <h1 className="title-material">Materiales necesarios</h1>

      <div className="columns-material">
        <div className="column-unique">
          <h2>Alimentos</h2>
          <p></p>
        </div>
        <div className="column-unique">
          <h2>Productos de higiene</h2>
          <p></p>
        </div>
        <div className="column-unique">
          <h2>Ropa</h2>
          <p></p>
        </div>
        <div className="column-unique">
          <h2>Herramientas</h2>
          <p></p>
        </div>
      </div> 
    </div>
  );
}

export default Material;
