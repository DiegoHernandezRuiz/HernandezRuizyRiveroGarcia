import React from 'react';
import './App.css';

function App() {
  const currentDate = new Date().toLocaleDateString();
  const user = "Juan Pérez"; // Aquí puedes poner la variable del usuario en línea
  const securityNumber = "123456"; // Número de seguridad
  const handleSecurityCheck = () => {
    alert('Realizando revisión de seguridad...');
  };
  const handleVirusRemoval = () => {
    alert('Eliminando virus y amenazas...');
  };

  return (
    <div className="App">
      {/* Barra Superior */}
      <header className="header">
        <div className="header-info">
          <h2>Reporte de Seguridad</h2>
          <p>Seguridad N°: {securityNumber}</p>
          <p>Fecha: {currentDate}</p>
          <p>Usuario en línea: {user}</p>
        </div>
      </header>

      {/* Menú de Apartados */}
      <nav className="menu">
        <ul>
          <li>
            <button onClick={handleSecurityCheck} className="menu-item">Realizar Revisión de Seguridad del Sistema</button>
          </li>
          <li>
            <button onClick={handleVirusRemoval} className="menu-item">Eliminar Virus y Amenazas</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
