import React from 'react';
import './App.css';

function App() {
  const user = "Usuario123"; // Aquí podrías sustituirlo por el usuario dinámico
  const currentDate = new Date().toLocaleDateString();
  const maintenanceCount = 5; // Ejemplo de número de mantenimientos

  return (
    <div className="App">
      <header className="header-bar">
        <div className="header-item">Número de Mantenimiento: 12345</div>
        <div className="header-item">Fecha: {currentDate}</div>
        <div className="header-item">Usuario en línea: {user}</div>
      </header>

      <nav className="menu">
        <h1>A.D Solutions</h1>
        <ul>
          <li>
            <button className="menu-button">Realizar Revisión de Maquinaria</button>
          </li>
          <li>
            <button className="menu-button">Corregir Errores</button>
          </li>
          <li>
            <button className="menu-button">Último Mantenimiento: {currentDate}</button>
          </li>
          <li>
            <button className="menu-button">Mantenimientos al día de hoy: {maintenanceCount}</button>
          </li>
        </ul>
        <button className="main-menu-button">Ir al Menú Principal</button>
      </nav>
    </div>
  );
}

export default App;
