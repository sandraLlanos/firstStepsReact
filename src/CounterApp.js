import React, {useState} from 'react';
import PropTypes from 'prop-types'

export const CounterApp = ({value = 10}) => {

    const [ counter, setCounter] = useState(value);
    
    // handleAdd
    // const handleAdd = (e) => {
    //     console.log(e)
    // }
    const handleAdd = () => {
        setCounter( (c) => c + 1 );
    }
    const handleSub = () => {
        setCounter( counter - 1 );
    }
    const handleReset = () => {
        setCounter( value );
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            {/* <button onClick={ function(){console.log('+1')}} > +1 </button> */}
            {/* <button onClick={ (e)=>{console.log(e)}} > +1 </button> */}
            {/* <button onClick={ (e)=>{handleAdd(e) }} > +2 </button> */}
            <button onClick={ handleAdd } > +1 </button>
            <button onClick={ handleReset } > Reset </button>
            <button onClick={ handleSub } > -1 </button>
        </>
    )
} 

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;