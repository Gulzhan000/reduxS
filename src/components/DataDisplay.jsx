import { useSelector } from "react-redux";

const DataDisplay = () => {
    const theme = useSelector(state => state.ui.theme);
    
    const products = [
        { id: 1, name: "Ноутбук", price: 75000, stock: 15 },
        { id: 2, name: "Телефон", price: 45000, stock: 30 },
        { id: 3, name: "Наушники", price: 8000, stock: 50 }
    ];

    return (
        <div style={{
            padding: "20px",
            background: theme === "light" ? "#f5f5f5" : "#2a2a2a",
            color: theme === "light" ? "#000" : "#fff"
        }}>
            <h3>Товары в наличии:</h3>
            {products.map(product => (
                <div key={product.id} style={{
                    margin: "10px 0",
                    padding: "10px",
                    border: `1px solid ${theme === "light" ? "#ddd" : "#444"}`
                }}>
                    <strong>{product.name}</strong> - {product.price}₽ 
                    <span style={{ marginLeft: "10px", color: product.stock < 20 ? "#ff6b6b" : "#4ecdc4" }}>
                        ({product.stock} шт.)
                    </span>
                </div>
            ))}
            <p>Итого товаров: {products.length}</p>
        </div>
    );
};

export default DataDisplay;