import React from 'react';

 const PrimeraAppVariables = () => {
   const saludo = '!Hello World';
   const numeros = 123;
   const bool = true; // los bool no los imprime el html
   const array = [1,2,3,4,5];
   const object = {
      saludo:'hello',
      numero:1234
   } // para el caso de los objetos no podemos llamar directamente el nombre 
     // de la variable, requerimos usar JSON.Stringify(nombre objeto)
    return (
       <>
          <h1>{ saludo }</h1>
          <p> { numeros }</p>
          <p> { array }</p>
          <p> { JSON.stringify( object ) }</p>
          <pre> { JSON.stringify( object, null ,2 ) }</pre>
          <p>Mi primer aplicación</p>
          <details>
          <summary>this is summry</summary>
          <p>
             Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.
          </p>
          </details>
       </>
    );
 }
 export default PrimeraAppVariables;