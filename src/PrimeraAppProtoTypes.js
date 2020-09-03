import React from 'react';
import PropTypes from 'prop-types';

const PrimeraAppProtoTypes = ( {saludo, subtitulo } ) => { 
  //  if (!saludo){
  //     throw new Error('el saludo es necesario'); 
  //  }
   
    return (
       <>
     
          <h1>{ saludo }</h1>
          <p>{ subtitulo }</p>
          
       </>
    );
 }

//  con propTypes podemos hacer la validacion del tipo de 
// dato de la propiedad y también si es requerida o no 
 PrimeraAppProtoTypes.propTypes ={
   saludo:PropTypes.string.isRequired
 }
 PrimeraAppProtoTypes.defaultProps = {
   subtitulo: 'Este es el subtitulo por defecto'
 }
 export default PrimeraAppProtoTypes;