import React from "react";
import "./Menu.css";

const App = () => {
  const user = "Usuario en línea";
  const modeloMaquinaria = "Modelo de Maquinaria XYZ";
  const fecha = new Date().toLocaleDateString();

  return (
    <div className="app">
      {/* Barra superior */}
      <header className="header">
        <div className="header-info">
          <span>{modeloMaquinaria}</span>
          <span>{fecha}</span>
          <span>{user}</span>
        </div>
      </header>

      {/* Menú de navegación */}
      <nav className="sidebar">
        <ul>
          <li>Cambiar piezas o componentes de maquinaria</li>
          <li>Suspender maquinaria</li>
          <li>Reparaciones al día de hoy</li>
          <li>Realizar copia de seguridad</li>
        </ul>
        <button className="main-menu-button">Ir al Menú Principal</button>
      </nav>

      {/* Contenido */}
      <main className="content">
        <h1>Bienvenido a A.D Solutions</h1>
        <p>Seleccione una opción en el menú para continuar.</p>
      </main>
    </div>
  );
};

export default App;
