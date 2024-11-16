import React from 'react';
import './App.css';

function App() {
  const fecha = new Date().toLocaleDateString();
  const usuario = "Usuario123"; // Reemplaza con datos reales si es necesario
  const numeroActualizacion = "1.2.3"; // Ejemplo de número de actualización

  return (
    <div className="App">
      <header className="header">
        <div className="info-bar">
          <span>Número de Actualización: {numeroActualizacion}</span>
          <span>Fecha: {fecha}</span>
          <span>Usuario en línea: {usuario}</span>
        </div>
      </header>

      <nav className="sidebar">
        <h2>A.D Solutions</h2>
        <ul>
          <li><button>Cargar Actualización</button></li>
          <li><button>Eliminar Actualización</button></li>
          <li><button>Versiones Anteriores</button></li>
          <li><button>Realizar Testeo de Versión</button></li>
        </ul>
        <button className="main-menu-button">Ir al Menú Principal</button>
      </nav>

      <main className="content">
        {/* Aquí puedes agregar el contenido principal de cada sección */}
        <h1>Bienvenido a A.D Solutions</h1>
        <p>Seleccione una opción del menú para comenzar.</p>
      </main>
    </div>
  );
}

export default App;
