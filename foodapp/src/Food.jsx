import React from 'react';
import Timer from './Timer';

const Food = ({ img, price, name }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        width: '80%',
        margin: '10px auto',
        backgroundColor: '#fff',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        transition: 'transform 0.2s',
        cursor: 'pointer',
        height: '100%',
        position: 'relative', 
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px', 
        zIndex: '1',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff',
        padding: '5px 10px',
        borderRadius: '5px',
      }}>
        <Timer />
      </div>

      <img
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
        src={img}
        alt={name}
      />
      <div
        style={{
          padding: '15px',
        }}
      >
        <h1
          style={{
            fontSize: '20px',
            margin: '10px 0',
            color: '#333',
          }}
        >
          {name}
        </h1>
        <h5
          style={{
            fontSize: '18px',
            margin: '5px 0',
            color: '#666',
          }}
        >
          ${price}
        </h5>
      </div>
    </div>
  );
};

export default Food;
