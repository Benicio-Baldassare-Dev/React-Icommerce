import { useState, useEffect } from "react";
import './Count.css'

function ItemCount() {
    const [count, setCount] = useState(0);

    const handleRestar = () => setCount(count - 1);
    const handleSumar = () => setCount(count + 1);

    if( count < 0){
        setCount(0);
    }

    useEffect( () =>  {
        console.log("El contador esta en: ", count);
    }, [count])

    return(
        <>        
        <div className="counter-conteiner">
            <button onClick={handleRestar}>-</button>
            <span>{count}</span>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className="agregar-carrito-btn">Agregar al Carrito</button>
        </>

    )
}

export default ItemCount;