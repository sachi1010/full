import React, { useState, useEffect } from 'react';

export const Filterwrk = () => {
    const [filter, setFilter] = useState('');
    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);

    // Fetch data on component mount
    useEffect(() => {
        fetch("http://localhost:5173/db.json")
            .then(response => {
                if (!response.ok) throw new Error('Failed to fetch data');
                return response.json();
            })
            .then(data => {
                setData(data); // Assuming `products` is the key in `db.json`
                setProducts(data);
            })
            .catch(error => console.error('Error:', error));
            console.log(products)
    }, []); // Dependency array ensures fetch only runs once on mount

    // Filter data whenever the `filter` state changes
    useEffect(() => {
        const filteredData = data.filter(product =>
            product.name.toLowerCase().includes(filter.toLowerCase())
        );
        setProducts(filteredData);
       
    }, [filter, data]); // Include `data` in dependency array as it is used in filtering

    return (
        <>
            <input
                type="text"
                placeholder="Search products by name"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <div>
                {products.map((item) => (
                    <div key={item.id}> {/* Use unique `id` as the key */}
                        <h1>{item.name}</h1>
                        <h2>{item.description}</h2>
                        <h2>${item.price.toFixed(2)}</h2> {/* Format price */}
                    </div>
                ))}
            </div>
        </>
    );
};