/*
 *Ejemplo de uso swl método componentWillUnMount para componente clase
 *Ejemplo de uso del hook para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {
  componentWillUnmount() {
    console.log('Comportamiento antes que el componente desaparezca');
  }

  render() {
    return <div>WillUnMount</div>;
  }
}

export const WillUnMountHook = () => {
  useEffect(() => {
    // Aquí no ponemos nada, lo ponemos en el return
    return () => {
      console.log('Comportamiento antes que el componente desaparezca');
    };
  }, []);

  return <div></div>;
};

export default WillUnMount;
