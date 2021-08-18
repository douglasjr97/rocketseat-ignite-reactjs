import { useState } from 'react';

export function Contador(){
    const [count, setCount] = useState(10)

    const handleMinusClick = () =>{
        if(count > 0){
            setCount(count -1)
        }
    };

    const handlePlusClick = () =>{
        if(count < 10){
            setCount(count +1)
        }
    };

    return(
    <>
        <h1>Contador: {count}</h1>
        <button className="minus"
         onClick={handleMinusClick}>-</button>
        <button onClick={handlePlusClick}>+</button>
        
</>
    );
}