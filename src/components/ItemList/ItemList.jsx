import Item from "../Item/Item.jsx"

function ItemList ({ items = [] }) {
    return(
    <>
        <div className="cards-conteiner" > 
        { items.map( prod => (
             <Item key={prod.id} prod={prod}/>
        ) ) }
        </div>
    </>
    )
}

export default ItemList