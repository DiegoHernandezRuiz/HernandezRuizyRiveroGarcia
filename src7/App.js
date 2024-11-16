
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>A.D Solutions - Panel de Control</h1>
        <div className="user-info">
          <span>Usuario en línea: Admin</span>
          <button className="logout-button">Salir y Guardar Cambios</button>
        </div>
      </header>
      <main className="menu-container">
        <MenuButton title="Actualizar Sistema" />
        <MenuButton title="Seguridad del Sistema" />
        <MenuButton title="Realizar Mantenimiento" />
        <MenuButton title="Revisar Estado de Maquinaria" />
        <MenuButton title="Registro de Entradas al Sistema" />
      </main>
    </div>
  );
}

function MenuButton({ title }) {
  return (
    <div className="menu-button">
      <button>{title}</button>
    </div>
  );
}

export default App;
