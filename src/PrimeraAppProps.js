import React from 'react';

/**Propiedaddes 
 * son las propiedades que son enviadas a los componentes
 */

//  const PrimeraAppProps = ( props ) => { usando props directamente
// const PrimeraAppProps = ( {saludo } ) => { usando desestructuracion
const PrimeraAppProps = ( {saludo = 'hola mundo'} ) => { //pasando un valor por defecto

   // const saludo = '!Hello World';
   // console.log( props );
   console.log( saludo );
   
    return (
       <>
          {/* <h1>{ props.saludo }</h1> */}
          <h1>{ saludo }</h1>
          
       </>
    );
 }
 export default PrimeraAppProps;