// * Ejemplo de uso del Hook useState

// * Crear un componente de tipo función y acceder a su estado privado a través de un hook y además poder modificarlo.

import React, { useState } from 'react';

const Ejemplo1 = () => {
  // Valor Inicial Contador
  const valorInicial = 0;

  // * Valor Inicial Persona
  const personaInicial = {
    nombre: 'Emanuel',
    email: 'escudero.mdz@gmail.com',
  };

  // * valorInicial y personaInicial sean parte del estado del componente para gestionar su cambio y reflejarlo en la vista del componente

  // * const [variable, funcionParaCambiar] = useState(valorInicial)
  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  // * Función para actualizar el estado privado que tiene el contador
  function incrementarContador() {
    // * Setter del estado => cambia al nuevo valor
    setContador(contador + 1);
  }

  /*
   * Función para actualizar el estado de la persona
   */
  function actualizarPersona() {
    // * Setter del estado de persona
    setPersona({
      nombre: 'Raúl',
      email: 'raulito@gmail.com',
    });
  }
  return (
    <>
      <div>
        <h2>*** Ejemplo de useState() ***</h2>
        <p>Contador: {contador}</p>
        <button onClick={incrementarContador}>Incrementar Contador</button>
      </div>
      <div>
        <h2>Datos de la Persona</h2>
        <p>Nombre: {persona.nombre}</p>
        <p>Email: {persona.email}</p>
        <button onClick={actualizarPersona}>Actualizar Persona</button>
      </div>
    </>
  );
};

export default Ejemplo1;
