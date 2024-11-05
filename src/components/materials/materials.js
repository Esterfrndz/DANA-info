import React from 'react';
import { useState } from 'react';
import '../materials/materials.css';


function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}


function Material() {
  return (
    <div className="container-material">
      <h1 className="title-material">Materiales necesarios</h1>
      <h2 className='title-material-h2'>¿Qué materiales necesitan los puntos de recogida?</h2>
      <h4 className='title-material-h2'><i>*Despliega para ver más información*</i></h4>
      <div className="columns-material">
      <AccordionItem title="Alimentos">
        <ul className='list-material'>
      <li>Leche, isotónicas, agua y aceite</li>
      <li>Conservas</li>
      <li>Sopas y platos preparados</li>
      <li>Barritas energéticas y cereales</li>
      <li>Frutos secos</li>
      <li>Frutas en su jugo o naturales</li>
      <li>Verduras enlatadas</li>
      <li>Legumbres</li>
      <li>Deshidratada,higos,pasas</li>
      <li>Crema de cacahuete y pan</li>
      <li>Galletas y tortas de arroz/maiz</li>
      <li>Potitos para bebé</li>
      <li>Comida para animales (gatos y perros)</li>
        </ul>
      </AccordionItem>
      <AccordionItem title="Productos de higiene">
        <ul className='list-material'>
        <li>Limpiacristales</li>
        <li>Lejía</li>
        <li>Desinfectante</li>
        <li>Papel higienico</li>
        <li>Esponjas jabonosas</li>
        <li>Pañales (bebés y adultos) </li>
        <li>Kleenex,toallitas húmedas</li>
        <li>Compresas,tampones</li>
        <li>Champú</li>
        </ul>
      </AccordionItem>
      <AccordionItem title="Ropa">
      <ul className='list-material'>
        <li>Ropa interior (nueva)</li>
        <li>Calcetines</li>
        <li>Mantas</li>
        <li>Chubasqueros</li>
      </ul>
      </AccordionItem>
      <AccordionItem title="Herramientas">
      <ul className='list-material'>
        <li>Botas de agua</li>
        <li>Guantes</li>
        <li>Mascarillas (ffp2)</li>
        <li>Cubos</li>
        <li>Bolsas de basura (XL)</li>
        <li>Escobas de goma</li>
        <li>Camping gas</li>
        <li>Neveras</li>
        <li>Sacos de dormir</li>
        <li>Cajas</li>
        <li>Linternas</li>
        <li>Pilas</li>
        <li>Velas y mecheros</li>
        <li>Power banks</li>
        <li>Palas y rastrillos</li>
      </ul>
      </AccordionItem>
    </div>
    </div>
  );
}

export default Material;
