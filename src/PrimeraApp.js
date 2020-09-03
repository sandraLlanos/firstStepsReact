import React, { Fragment } from 'react';
/**
 * React tiene dos tipos de componentes
 * Basado en Clases
 * Basado en Funciones(functional components)
 * Los componentes se nombran con el estandar UpperCamelCase
 */

//  const PrimeraApp = () => {
//     return <h1>!Hello World</h1>;
//  }
 const PrimeraApp = () => {
    /** usamos el () para poder retornar mas de un elemento */
    /** Adicional se puede envolver en un div para lograr visualizar los dos elementos */
    return (
      //  <div>
      //    <h1>!Hello World</h1>
      //     <p>Mi primer aplicación</p>
      //  </div>

      /** 
       * Un patrón común en React es que un componente devuelva múltiples elementos.
       * Los Fragmentos te permiten agrupar una lista de hijos sin agregar nodos extra al DOM.
        */
      //  <Fragment>
      //     <h1>!Hello World</h1>
      //     <p>Mi primer aplicación</p>
      //  </Fragment>

      /** esta es una forma corta de usar un fragment sin necesidad de usar la importación */
       <>
          <h1>!Hello World</h1>
          <p>Mi primer aplicación</p>
       </>
    );
 }
 export default PrimeraApp;