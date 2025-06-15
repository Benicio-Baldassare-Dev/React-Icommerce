import { useNavigate } from "react-router";

function Item( { prod } ){
    const navigate = useNavigate()
    return(
        <div className="card-info">
        <img src={prod.imagen} alt={prod.nombre} />
        <h3>{prod.nombre}</h3>
        <p>{prod.descripcion}</p>
         <h6>${prod.precio}</h6>
         <button onClick={() => navigate(`/item/${prod.id}`)}> Ver mas </button>
  </div>
    )
}

export default Item;