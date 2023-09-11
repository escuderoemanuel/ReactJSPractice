/*
 * Ejemplo de compoonente de tipo clase que dispone de los métodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifeCyckeExample extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor: Cuando se instancia el componente');
  }

  componentWillMount() {
    console.log('WillMount: Justo antes de montaje del componente');
  }

  componentDidMount() {
    console.log(
      'DidMount: Antes de montaje del componente, antes de renderizarlo'
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log('WillReceiveProps: Si va a recibir nuevas props');
  }

  shouldComponentUpdate(nextProps, nextState) {
    /*
     * Controla si el componente debe o no actualizarse => return true or false
     */
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('WillUpdate: Justo antes de actualizarse');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('DidUpdate: Justo antes de actualizarse');
  }

  componentWillUnmount() {
    console.log('WillUnmount: Justo antes de desaparecer');
  }

  render() {
    return <div></div>;
  }
}

lifeCyckeExample.propTypes = {};

export default lifeCyckeExample;
