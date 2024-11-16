import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>AD Solutions - Mantenimiento de Maquinaria</h1>
      </header>
      
      <section className="section">
        <h2>Intervenciones Realizadas en la Maquinaria</h2>
        <p>Detalles sobre las intervenciones realizadas en las máquinas.</p>
      </section>

      <section className="section">
        <h2>Tipos de Mantenimiento Realizados</h2>
        <p>Descripción de los tipos de mantenimiento realizados.</p>
      </section>

      <section className="section">
        <h2>Frecuencia de los Mantenimientos</h2>
        <p>Información sobre la frecuencia de los mantenimientos.</p>
      </section>

      <section className="section">
        <h2>Responsables de las Ejecuciones</h2>
        <p>Lista de responsables de ejecutar los mantenimientos.</p>
      </section>

      <section className="section">
        <h2>Tiempo Dedicado a las Actividades</h2>
        <p>Estimación del tiempo dedicado a cada actividad de mantenimiento.</p>
      </section>

      <section className="section">
        <h2>Materiales Utilizados</h2>
        <p>Materiales y herramientas utilizadas en los mantenimientos.</p>
      </section>

      <section className="section">
        <h2>Costo de los Mantenimientos</h2>
        <p>Detalles sobre el costo de los mantenimientos realizados.</p>
      </section>
    </div>
  );
}

export default App;
