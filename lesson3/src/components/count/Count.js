import React, { useState } from 'react';


const Count = () => {
    const [ count, setCount ] = useState(0);

    const increment = () => {
        setCount(prevState => prevState + 1);
    };
    const decrement = () => {
        setCount(prevState => prevState - 1);
    };
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};

export default Count;