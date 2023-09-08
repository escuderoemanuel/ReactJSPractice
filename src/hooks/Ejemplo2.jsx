/*
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {
  // Creamos dos contadores distintos en estados diferentes
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // Creamos una referencia con useRef() para asociar una variable con un elemento del DOM del componente (vista HTML)
  const miRef = useRef();

  // Creamos dos fn que incrementan independientemente una de otra los contadores
  function incrementar1() {
    setContador1(contador1 + 1);
  }

  function incrementar2() {
    setContador2(contador2 + 1);
  }

  // Trabajamos con useEffect
  // ? Caso 1: ejecutar SIEMPRE un snippet de código => Cada vez que haya un cambio en el estado del componente se ejecuta aquello que está dentro del useEffect()
  /* useEffect(() => {
    console.log('Cambio en el estado del componente');
    console.log('Mostrando referencia a elemento del DOM:');
    console.log(miRef);
  }); */

  /* // ? Caso 2: ejecutar SOLO cuando cambie contador1 => Cada vez que haya un cambio en el estado del componente, se ejecuta aquello que está dentro del useEffect()
  useEffect(() => {
    console.log('Cambio en el estado del contador1');
    console.log('Mostrando referencia a elemento del DOM:');
    console.log(miRef);
  }, [contador1]);
 */

  // ? Caso 3: ejecutar SOLO cuando cambie contador1 o contador2=> Cada vez que haya un cambio en el estado del contador1 o contador2, se ejecuta aquello que está dentro del useEffect()
  useEffect(() => {
    console.log('Cambio en el estado del contador1 / contador2');
    console.log('Mostrando referencia a elemento del DOM:');
    console.log(miRef);
  }, [contador1, contador2]);

  return (
    <>
      <div>
        <h2>*** Ejemplo de useState(), useRef() y useEffect() ***</h2>
        <p>Contador1: {contador1}</p>

        <p>Contador2: {contador2}</p>

        {/* Elemento Referenciado */}
        <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
        {/* Botones para cambiar contadores */}
      </div>
      <div>
        <button onClick={incrementar1}>Incrementar contador1</button>
        <button onClick={incrementar2}>Incrementar contador2</button>
      </div>
    </>
  );
};

export default Ejemplo2;
