import '@testing-library/jest-dom'
import heroes from '../../data/heroes';
import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp'

describe('Puebas sobre 08-imp.exp', () => {
    test('getHeroeById debe encontrar heroes por ID ', () => {
        const id = 2;
        const heroe = getHeroeById(id);
        console.log(heroe);
        const heroesData = heroes;
        const findHeroe = heroesData.find((heroe)=>heroe.id === id)
        console.log(findHeroe);
        expect(heroe).toEqual(findHeroe);
     });
     test('getHeroeById debe retornar undefined si no existe el ID ', () => {
         const id = 10;
         const heroe = getHeroeById(id);
         expect(heroe).toBe(undefined);
        })
    test('getHeroesByOwner debe filtrar por owner = DC ', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        console.log(heroe);
        const heroesData = heroes.filter((heroe)=>heroe.owner === owner);
        console.log(heroesData);
        expect(heroe).toEqual(heroesData);
        });
    test('getHeroesByOwner debe filtrar por owner = Marvel ', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        console.log(heroe);
        console.log(heroe.length);
        expect(heroe.length).toBe(2);
        });
    
})
