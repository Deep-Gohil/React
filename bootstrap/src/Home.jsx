import React, { useState, useEffect } from 'react';
import Card from './Card';

const Home = () => {
  const [data, setData] = useState([]);

  const fetchProducts = async () => {
    try {
      let res = await fetch("https://fakestoreapi.com/products");
      let newData = await res.json();
      setData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        data.map((item) => <Card key={item.id} item={item} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
