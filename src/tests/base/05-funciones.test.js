import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from './../../base/05-funciones';

describe('Pruebas sobre el archivo 05-funciones.js', () => {
    test('getUser debe de retornar un objeto ', () => {
        
        const myObject = {
            uid: 'ABC123',
            username: 'El_502'
        }
        const returnObject = getUser();
        console.log(returnObject)
        expect(returnObject).toEqual(myObject);
    });
    test('getUsuarioActivo debe recibir un nombre y devolver un objeto con el nombre ', () => {
        const name = 'Sandra';
        const myObject = {
            uid: 'ABC567',
            username: name
        };
        const activeUser = getUsuarioActivo(name);
        console.log(activeUser);
        expect(activeUser).toEqual(myObject);
    })    
    
})
