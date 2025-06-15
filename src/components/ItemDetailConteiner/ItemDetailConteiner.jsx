import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { Link } from "react-router"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetailConteiner.css'

function ItemDetailConteiner () {
    const [ detail, setDetail ] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch('/productos.json')
            .then(res => res.json())
            .then(products => {
                const product = products.find(p => p.id === parseInt(id))
                setDetail(product)
            })
            .catch(error => console.error('Error:', error))
    }, [id])

    if (!detail) return <div>Cargando...</div>

    return(
        <>
        <Link to="/" className="link-volver"><button className="volver-btn">← Volver </button></Link>
        <div class="producto-detalle">
        <img src={detail.imagen} alt={detail.nombre} />
        <div class="info-producto">
          <h3>{detail.nombre}</h3>
          <p>{detail.descripcion}</p>
          <h6>${detail.precio}</h6>
          <div className="acciones-producto">
            <ItemCount stock={detail.stock} initial={0} />
            <button className="agregar-carrito-btn">Agregar al Carrito</button>
          </div>
        </div>
      </div>
      </>
    )
}

export default ItemDetailConteiner