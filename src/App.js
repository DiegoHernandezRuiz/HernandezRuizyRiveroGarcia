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
        <ul>
          <li>Reemplazo de piezas dañadas en el equipo de alimentación.</li>
          <li>Ajuste de calibración en maquinaria de limpieza.</li>
          <li>Inspección de sistemas hidráulicos.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Tipos de Mantenimiento Realizados</h2>
        <ul>
          <li>Mantenimiento preventivo</li>
          <li>Mantenimiento correctivo</li>
          <li>Mantenimiento predictivo</li>
        </ul>
      </section>

      <section className="section">
        <h2>Frecuencia de los Mantenimientos</h2>
        <ul>
          <li>Mensual</li>
          <li>Trimestral</li>
          <li>Anual</li>
        </ul>
      </section>

      <section className="section">
        <h2>Responsables de las Ejecuciones</h2>
        <ul>
          <li>Juan Pérez - Técnico de maquinaria</li>
          <li>Ana González - Ingeniera de mantenimiento</li>
          <li>Carlos López - Coordinador de operaciones</li>
        </ul>
      </section>

      <section className="section">
        <h2>Tiempo Dedicado a las Actividades</h2>
        <ul>
          <li>Inspección: 2 horas</li>
          <li>Reemplazo de piezas: 4 horas</li>
          <li>Calibración: 3 horas</li>
        </ul>
      </section>

      <section className="section">
        <h2>Materiales Utilizados</h2>
        <ul>
          <li>Piezas de repuesto</li>
          <li>Aceite lubricante</li>
          <li>Herramientas de calibración</li>
        </ul>
      </section>

      <section className="section">
        <h2>Costo de los Mantenimientos</h2>
        <ul>
          <li>Mantenimiento preventivo: $150</li>
          <li>Mantenimiento correctivo: $300</li>
          <li>Mantenimiento predictivo: $500</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
