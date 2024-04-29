
import React from 'react';
import './App.css'; // Importa o estilo do componente App
import LinkList from './linkList.jsx'; // Importa o componente LinkList

function App() {
  return (
    <div className="container">
      <img className="profile-img" src="profile.img.jpeg" alt="Foto de Perfil" />
      <h2>Samira Ferreira</h2>
      <p>Belo Horizonte/MG</p>
      <p>Front-end dev</p>
      <LinkList /> {/* Renderiza o componente LinkList */}
    </div>
  );
}

export default App;

