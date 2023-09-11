/*
 * Ejemplo de uso de método componentDidUpdate en componente de clase y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {
  componentDidMount() {
    console.log(
      'Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado'
    );
  }
  render() {
    return <div>DidUpdate</div>;
  }
}

const DidUpdateHook = () => {
  useEffect(() => {
    console.log(
      'Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado'
    );
  });

  // ? En el useEffect, si dejamos los corchetes vacíos, se ejecuta una vez.
  // ? En el useEffect, si no ponemos corchetes, se ejecuta siempre.

  return <div>DidUpdate</div>;
};
