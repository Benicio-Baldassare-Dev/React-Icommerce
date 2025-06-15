import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './ItemFilter.css'

const ItemsFilter = ({ children }) => {
    const [ filter, setFilter] = useState("todos");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect( () => {
        fetch("/productos.json")
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setFilteredProducts(data);
        })
        .catch(err => console.error("Error al cargar productos:", err))
    }, [])

    // Solo navegamos si estamos en la página principal o en una categoría
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        if(newFilter === 'todos') {
            setFilteredProducts(products);
            if (location.pathname.startsWith('/category/')) {
                navigate('/');
            }
        } else {
            const filtered = products.filter(product => 
                product.categoria.toLowerCase() === newFilter.toLowerCase());
            setFilteredProducts(filtered);
            if (location.pathname === '/' || location.pathname.startsWith('/category/')) {
                navigate(`/category/${newFilter}`);
            }
        }
    };

    return(
        <div>
            <select 
                value={filter} 
                onChange={e => handleFilterChange(e.target.value)} 
                className="select"
            >
                <option value='todos'>Todos</option>
                <option value='postres'>Postres</option>
                <option value='alfajores'>Alfajores</option>
                <option value='cookies'>Cookies</option>
            </select>
            {children && children(filteredProducts)}
        </div>
    )
}

export default ItemsFilter