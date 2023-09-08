/*
 * Ejemplo Hooks:
 * - useState
 * - useContext
 */

import React, { useState, useContext } from 'react';

/*
 * @returns Componente1:
 * Dispone de un contexto que va a tener un valor que recibe desde el padre
 */
const miContexto = React.createContext(null);

const Componente1 = () => {
  // Inicializamos un estado vacío que va a rellenarse con los datos del padre
  const state = useContext(miContexto);

  return (
    <div>
      <h2>El token es: {state.token}</h2>
      {/* Aquí el Componente 2 */}
      <Componente2></Componente2>
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h2>La sesión es: {state.sesion}</h2>
    </div>
  );
};

export default function MiComponenteConContexto() {
  const estadoInicial = {
    token: '123456789',
    sesion: 1,
  };

  //Creamos el estado de este componente
  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSesion() {
    setSessionData({
      token: 'JWT123456789',
      sesion: sessionData.sesion + 1,
    });
  }

  return (
    <miContexto.Provider value={sessionData}>
      {/* Todo lo que esté aquí dentro puede leer y actualizar los datos de sessionData.
       */}
      <h2>Ejemplo de useState y useContext</h2>
      <Componente1></Componente1>
      <button onClick={actualizarSesion}>Actualizar Sesión</button>
    </miContexto.Provider>
  );
}
