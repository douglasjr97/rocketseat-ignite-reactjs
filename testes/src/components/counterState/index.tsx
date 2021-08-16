import { useState } from "react";


export function Counter(){
const [count,setCount] = useState(1);    
    return(
        <>
            <h1>Contador: {count}</h1>
            <button className="minus" onClick={() => setCount(count -1)}>-</button>
            <button onClick={() => setCount(count +1)}>+</button>
        </>
    );
}