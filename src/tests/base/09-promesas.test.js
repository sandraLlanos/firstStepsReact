import '@testing-library/jest-dom'
// import { getHeroeById } from '../base/08-imp-exp';
import {getHeroeByIdAsync} from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('pruba de 09-promesas.js', () => {
    
    test('getHeroeByIdAsync debe de retornar un heroe async ',  (done) => {
        
        const id = 2;
        getHeroeByIdAsync(id)
                .then( heroe => {
                    expect(heroe).toBe(heroes[1]);
                    done();
                });

    });
    test('getHeroeByIdAsync debe de retornar un error si el heroe no existe ',  (done) => {
        
        const id = 10;
        const error = 'No se pudo encontrar el héroe'
        getHeroeByIdAsync(id)
                .catch( err => {
                    expect(err).toBe(error);
                    done();
                });

    });
    

})
