import { useState } from 'react';

export function Contador(){
    const [count, setCount] = useState(10)
    return(
    <>
        <h1>Contador: {count}</h1>
        <button className="minus" onClick={() => setCount(count-1)}>-</button>
        <button onClick={() => setCount(count +1)}>+</button>
        
</>
    );
}