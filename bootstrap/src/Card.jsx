import React from 'react';

const Card = ({ item }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={item.image} className="card-img-top" alt={item.title} />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <a href="#" className="btn btn-primary">${item.price}</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
