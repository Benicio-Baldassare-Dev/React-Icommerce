import { useState, useEffect } from "react";
import "./ItemListConteiner.css"
import ItemList from "../ItemList/ItemList";
import WithLoading from "../../hoc/withLoading/withLoading";
import { useParams } from "react-router-dom";
     
export default function ItemListConteiner ({ products }) {
    const [items, setItems] = useState([]);
    const ItemListWithLoading = WithLoading(ItemList)
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Si recibimos productos filtrados desde ItemsFilter, los usamos
                if (products && products.length > 0) {
                    setItems(products);
                    return;
                }
                
                // Si no hay productos filtrados, hacemos fetch y filtramos por categoryId
                // Usamos una ruta absoluta para evitar problemas con rutas relativas
                const res = await fetch('/productos.json');
                const data = await res.json();
                
                console.log("Datos cargados:", data);
                console.log("Categoría actual:", categoryId);
                
                if (categoryId) {
                    // Convertimos ambos a minúsculas para comparar
                    const filtered = data.filter(product => 
                        product.categoria.toLowerCase() === categoryId.toLowerCase());
                    console.log("Productos filtrados:", filtered);
                    setItems(filtered);
                } else {
                    setItems(data);
                }
            } catch (error) {
                console.error('Error al cargar productos:', error);
            }
        };
        
        // Agregamos un pequeño delay para simular carga
        setTimeout(() => {
            fetchData();
        }, 1000);
        
    }, [categoryId, products]);

    return(
    <>
      <ItemListWithLoading items={items} />
    </>
        
    );
}