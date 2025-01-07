import React from 'react';

const AddFood = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Submitted")
    }
  return (
    <div
      style={{
        width: '50%',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          marginBottom: '20px',
          color: '#333',
        }}
      >
        Add Food
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          style={{
            width: '90%',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />
        <input
          type="text"
          placeholder="Price"
          style={{
            width: '90%',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />
        <input
          type="text"
          placeholder="Image URL"
          style={{
            width: '90%',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />
        <button
          type="submit"
          style={{
            width: '95%',
            padding: '10px',
            margin: '20px 0',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007BFF')}
        >
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;
