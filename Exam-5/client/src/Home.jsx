import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './home.css';

const Home = () => {
    let [data, setData] = useState([]);

    const fetchData = async () => {
        let res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <h1 className="title">Product List</h1>
            <div className="product-grid">
                {data.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product-price">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
