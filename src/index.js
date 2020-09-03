import React from 'react'
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
// import PrimeraAppVariables from './PrimeraAppVariables';
// import PrimeraAppProps from './PrimeraAppProps';
// import PrimeraAppProtoTypes from './PrimeraAppProtoTypes';
import CounterApp from './CounterApp';
import './index.css';

/**cuando uso etiqueteas html en el archivo js se vuelve un jsx
 * por lo cual 'React' debe estar dentro del alcance cuando se usa JSX
 * esto se logra importando // import React from 'react'
 */
// const saludo = <h1>!Hello World</h1>
// console.log(saludo);

/** mediante el querySelector busco el elemento con el id root
 */
const divRoot = document.querySelector('#root');
console.log(divRoot);

/** 
 * con el objeto de ReactDOM que es el encargado de hacer renderizaciones en el html
 * y el metodo render() puedo renderizar en el html.
 * Los atributos del metodo render() son: elemento y el container
 * a quien quiero renderizar y donde lo quiero renderizar
 *  */
// ReactDOM.render(saludo, divRoot)

/** En este caso estoy llamando el compenente  */
// ReactDOM.render(<PrimeraAppProps />, divRoot)
// ReactDOM.render(<PrimeraAppProps saludo="hola soy Sandra" />, divRoot)
// ReactDOM.render(<PrimeraAppProtoTypes saludo="hola soy Sandra" />, divRoot)
ReactDOM.render(<CounterApp value={10} />, divRoot)

