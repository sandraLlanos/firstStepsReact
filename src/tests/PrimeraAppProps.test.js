import React from 'react';
import { render } from '@testing-library/react';
import PrimeraAppProps from '../PrimeraAppProps';

describe('pruebas sobre <PrimeraAppProps >', () => {
    test('debe de mostrar el mensaje "hola soy Sandra" ', () => {
        
        const saludo = 'Hola soy Sandra';
        // wrapper en este caso seria el prodicto renderizado de lo que se desea mostrar,
        // es decir del compente de react.
        // para esto es neceserio importar render de @testing-library/react
        // render recibe el elemento que se  desea renderizar
        // const wrapper = render( <PrimeraAppProps saludo={saludo}/>);
        const { getByText } = render( <PrimeraAppProps saludo={saludo}/>);

        // para esto se requiere la importacion de import '@testing-librar/jest-dom/extend-expect' de setupTest.js
        // expect( getByText(saludo) ).toBeInTheDocument();

        


    })
    
})
