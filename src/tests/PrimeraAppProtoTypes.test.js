import React from 'react';
import { shallow } from 'enzyme';
import PrimeraAppProtoTypes from '../PrimeraAppProtoTypes';

describe('prueba sobre <PrimeraAppProtoTypes />', () => {
    
    test('debe de mostrar <PrimeraAppProtoTypes /> correctamete ', () => {
        const saludo = 'Hola soy Sandra';
        const wrapper =  shallow( <PrimeraAppProtoTypes saludo={saludo}/> );

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola soy Sandra';
        const subtitulo = 'Este no es un subtitulo por defecto';
        const wrapper =  shallow( 
            <PrimeraAppProtoTypes 
                saludo={saludo}
                subtitulo={subtitulo}
                />
         );
         //find funciona como el document.querySelector de js
        const textoparrafo = wrapper.find('p').text();
        console.log(textoparrafo)
        expect( textoparrafo ).toBe(subtitulo);
    })
    
    
})
