import '@testing-library/jest-dom';
import { retornaArreglo, useState } from '../../base/07-deses-arr'

describe('Pruebas sobre 07-deses-arr', () => {
    
    test('Debe de retornar un string y un numero ', () => {
        
        const [letras, numeros] =  retornaArreglo();
        console.log(letras);
        console.log( typeof letras);
        console.log(numeros);
        console.log( typeof numeros);

        expect(letras).toBe('ABC');
        expect( typeof letras).toBe('string');
        
        expect(numeros).toBe(123);
        expect( typeof numeros).toBe('number');

    });
    // test('Debe de retornar un estado ', () => {
        
    //     const 

    // })
    

})
