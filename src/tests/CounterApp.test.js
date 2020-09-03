import React from 'react';
import { shallow } from 'enzyme';
import {CounterApp } from '../CounterApp';

describe('Pruebas sobre <CounterApp />', () => {
    let wrapper = shallow( <CounterApp /> );

    beforeEach( ()=> {
        //se va a ejecutar antes de cada una de las evaluaciones
        console.log('beforeEach');//tendria 4 console.log por ser el número de pruebas actual
        wrapper =  shallow( <CounterApp /> );
    })

    test('Debe de mostrar <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el valor por defecto de 100', () => {
        const wrapper =  shallow( <CounterApp value={100} /> );
        const countValue = wrapper.find('h2').text().trim();
        console.log(countValue); 
        expect(countValue).toBe('100');
    });

    test('Debe de incrementar contador', () => {
        const btn1 = wrapper.find('button').at(0).simulate('click');
        console.log(btn1.html());
        const countValue = wrapper.find('h2').text().trim();
        console.log(countValue);
        expect(countValue).toBe('11');
    })
    test('Debe decrementar contador', () => {
        const btn3 = wrapper.find('button').at(2).simulate('click');
        console.log(btn3.html());
        const countValue = wrapper.find('h2').text().trim();
        console.log(countValue);
        expect(countValue).toBe('9');
    })
    test('Debe establecer el valor por defecto con el btn reset ', () => {
        const wrapper =  shallow( <CounterApp value={105} /> );
        const btn1 = wrapper.find('button').at(0).simulate('click');
        const btn2 = wrapper.find('button').at(1).simulate('click');
        const countValue = wrapper.find('h2').text().trim();
        console.log(btn1.html());

        console.log(countValue);
        expect(countValue).toBe('105');
    })
    
})
