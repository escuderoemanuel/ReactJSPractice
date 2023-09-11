/*
 * Ejemplo para entender el uso de props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
  return (
    <div>
      <h2>Ejemplo de CHILDREN PROPS</h2>
      <h3>Nombre: {props.nombre}</h3>
      {/* props.children puntará por defecto aqello que se encuentre entre las etiquetas de apertura y cierre de este componente desde el componente de orden superior */}
      {props.children}
    </div>
  );
};

export default Ejemplo4;
