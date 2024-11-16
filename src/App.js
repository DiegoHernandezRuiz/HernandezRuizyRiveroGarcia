import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>AD Solutions</h1>
        <p>Gestión avanzada de mantenimiento para equipos</p>
      </header>

      <section className="features">
        <div className="feature-box">
          <h2>Seguir de cerca las actividades realizadas en cada equipo</h2>
          <p>Monitorea todas las actividades y estados de tus equipos en tiempo real.</p>
        </div>

        <div className="feature-box">
          <h2>Identificar patrones y tendencias en el rendimiento de los equipos</h2>
          <p>Analiza los datos históricos y visualiza tendencias para mejorar el rendimiento.</p>
        </div>

        <div className="feature-box">
          <h2>Analizar la eficiencia del mantenimiento preventivo</h2>
          <p>Evalúa el impacto de las actividades preventivas y ajusta tu estrategia según los resultados.</p>
        </div>

        <div className="feature-box">
          <h2>Optimizar el uso de recursos</h2>
          <p>Maximiza la eficiencia de tus recursos mediante la programación y asignación inteligente.</p>
        </div>

        <div className="feature-box">
          <h2>Tomar decisiones informadas sobre el mantenimiento preventivo</h2>
          <p>Accede a informes detallados para tomar decisiones estratégicas sobre el mantenimiento.</p>
        </div>

        <div className="feature-box">
          <h2>Cumplir con las regulaciones y normativas industriales</h2>
          <p>Asegúrate de cumplir con las normativas y regulaciones de la industria en cada paso.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
