import '@testing-library/jest-dom';
const { getSaludo } = require("../../base/02-template-string")

describe('pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar Hola Fernando', () => {
        const nombre = 'Fernando';
        const saludo = getSaludo(nombre)
        expect(saludo).toBe('Hola ' + nombre);
    });
    test('getSaludo debe de retornar Hola Sandra si no existe el argumento', () => {        
        const saludo = getSaludo();
        console.log(saludo);
        expect(saludo).toBe('Hola Sandra');
    })
    
})
