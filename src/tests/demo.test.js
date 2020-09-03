describe('Pruebas en el archivo Demo.test.js', () => {
    test('should first test', () => {
        const isActive = true;
        if (!isActive){
            throw new Error('No está activo')
        }
    })
    
    test('should are equal two strings ', () => {
        
        const stringOne = 'Hola mundo';
        const stringTwo = 'Hola mundo';
    
        expect(stringOne).toBe(stringTwo); //toBe hace la comparacion de igualdad
        // Use .toBe to compare primitive values or to check referential 
        // identity of object instances. It calls Object.is to compare values,
        // which is even better for testing than === strict equality operator.
    })    
})


