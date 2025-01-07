import React, { useState } from 'react'
import Food from './Food'
import AddFood from './AddFood';
import Timer from './Timer';

const App = () => {
    

    // let foods = [
    //     {
    //         "id": 1,
    //         "name": "Classic Margherita Pizza",
    //         "prepTimeMinutes": 20,
    //         "cookTimeMinutes": 15,
    //         "servings": 4,
    //         "difficulty": "Easy",
    //         "cuisine": "Italian",
    //         "caloriesPerServing": 300,
    //         "tags": ["Pizza", "Italian"],
    //         "userId": 166,
    //         "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
    //         "rating": 4.6,
    //         "reviewCount": 98,
    //         "mealType": ["Dinner"],
    //         "price": 12.99
    //     },
    //     {
    //         "id": 2,
    //         "name": "Vegetarian Stir-Fry",
    //         "prepTimeMinutes": 15,
    //         "cookTimeMinutes": 20,
    //         "servings": 3,
    //         "difficulty": "Medium",
    //         "cuisine": "Asian",
    //         "caloriesPerServing": 250,
    //         "tags": ["Vegetarian", "Stir-fry", "Asian"],
    //         "userId": 143,
    //         "image": "https://cdn.dummyjson.com/recipe-images/2.webp",
    //         "rating": 4.7,
    //         "reviewCount": 26,
    //         "mealType": ["Lunch"],
    //         "price": 9.99
    //     },
    //     {
    //         "id": 3,
    //         "name": "Chocolate Chip Cookies",
    //         "prepTimeMinutes": 15,
    //         "cookTimeMinutes": 10,
    //         "servings": 24,
    //         "difficulty": "Easy",
    //         "cuisine": "American",
    //         "caloriesPerServing": 150,
    //         "tags": ["Cookies", "Dessert", "Baking"],
    //         "userId": 34,
    //         "image": "https://cdn.dummyjson.com/recipe-images/3.webp",
    //         "rating": 4.9,
    //         "reviewCount": 13,
    //         "mealType": ["Snack", "Dessert"],
    //         "price": 7.99
    //     },
    //     {
    //         "id": 4,
    //         "name": "Chicken Alfredo Pasta",
    //         "prepTimeMinutes": 15,
    //         "cookTimeMinutes": 20,
    //         "servings": 4,
    //         "difficulty": "Medium",
    //         "cuisine": "Italian",
    //         "caloriesPerServing": 500,
    //         "tags": ["Pasta", "Chicken"],
    //         "userId": 136,
    //         "image": "https://cdn.dummyjson.com/recipe-images/4.webp",
    //         "rating": 4.9,
    //         "reviewCount": 82,
    //         "mealType": ["Lunch", "Dinner"],
    //         "price": 14.99
    //     },
    //     {
    //         "id": 5,
    //         "name": "Mango Salsa Chicken",
    //         "prepTimeMinutes": 15,
    //         "cookTimeMinutes": 25,
    //         "servings": 3,
    //         "difficulty": "Easy",
    //         "cuisine": "Mexican",
    //         "caloriesPerServing": 380,
    //         "tags": ["Chicken", "Salsa"],
    //         "userId": 26,
    //         "image": "https://cdn.dummyjson.com/recipe-images/5.webp",
    //         "rating": 4.9,
    //         "reviewCount": 63,
    //         "mealType": ["Dinner"],
    //         "price": 13.99
    //     },
    //     {
    //         "id": 6,
    //         "name": "Quinoa Salad with Avocado",
    //         "prepTimeMinutes": 20,
    //         "cookTimeMinutes": 15,
    //         "servings": 4,
    //         "difficulty": "Easy",
    //         "cuisine": "Mediterranean",
    //         "caloriesPerServing": 280,
    //         "tags": ["Salad", "Quinoa"],
    //         "userId": 197,
    //         "image": "https://cdn.dummyjson.com/recipe-images/6.webp",
    //         "rating": 4.4,
    //         "reviewCount": 59,
    //         "mealType": ["Lunch", "Side Dish"],
    //         "price": 10.99
    //     },
    //     {
    //         "id": 7,
    //         "name": "Tomato Basil Bruschetta",
    //         "prepTimeMinutes": 15,
    //         "cookTimeMinutes": 10,
    //         "servings": 6,
    //         "difficulty": "Easy",
    //         "cuisine": "Italian",
    //         "caloriesPerServing": 120,
    //         "tags": ["Bruschetta", "Italian"],
    //         "userId": 137,
    //         "image": "https://cdn.dummyjson.com/recipe-images/7.webp",
    //         "rating": 4.7,
    //         "reviewCount": 95,
    //         "mealType": ["Appetizer"],
    //         "price": 8.99
    //     },
    //     {
    //         "id": 8,
    //         "name": "Beef and Broccoli Stir-Fry",
    //         "prepTimeMinutes": 20,
    //         "cookTimeMinutes": 15,
    //         "servings": 4,
    //         "difficulty": "Medium",
    //         "cuisine": "Asian",
    //         "caloriesPerServing": 380,
    //         "tags": ["Beef", "Stir-fry", "Asian"],
    //         "userId": 18,
    //         "image": "https://cdn.dummyjson.com/recipe-images/8.webp",
    //         "rating": 4.7,
    //         "reviewCount": 58,
    //         "mealType": ["Dinner"],
    //         "price": 15.99
    //     },
    //     {
    //         "id": 9,
    //         "name": "Caprese Salad",
    //         "prepTimeMinutes": 10,
    //         "cookTimeMinutes": 0,
    //         "servings": 2,
    //         "difficulty": "Easy",
    //         "cuisine": "Italian",
    //         "caloriesPerServing": 200,
    //         "tags": ["Salad", "Caprese"],
    //         "userId": 128,
    //         "image": "https://cdn.dummyjson.com/recipe-images/9.webp",
    //         "rating": 4.6,
    //         "reviewCount": 82,
    //         "mealType": ["Lunch"],
    //         "price": 11.99
    //     },
    //     {
    //         "id": 10,
    //         "name": "Shrimp Scampi Pasta",
    //         "prepTimeMinutes": 15,
    //         "cookTimeMinutes": 20,
    //         "servings": 3,
    //         "difficulty": "Medium",
    //         "cuisine": "Italian",
    //         "caloriesPerServing": 400,
    //         "tags": ["Pasta", "Shrimp"],
    //         "userId": 114,
    //         "image": "https://cdn.dummyjson.com/recipe-images/10.webp",
    //         "rating": 4.3,
    //         "reviewCount": 5,
    //         "mealType": ["Dinner"],
    //         "price": 16.99
    //     }
    // ];

    let [foods, setFoods] = useState([
        {
            "id": 1,
            "name": "Classic Margherita Pizza",
            "prepTimeMinutes": 20,
            "cookTimeMinutes": 15,
            "servings": 4,
            "difficulty": "Easy",
            "cuisine": "Italian",
            "caloriesPerServing": 300,
            "tags": ["Pizza", "Italian"],
            "userId": 166,
            "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
            "rating": 4.6,
            "reviewCount": 98,
            "mealType": ["Dinner"],
            "price": 12.99
        },
        {
            "id": 2,
            "name": "Vegetarian Stir-Fry",
            "prepTimeMinutes": 15,
            "cookTimeMinutes": 20,
            "servings": 3,
            "difficulty": "Medium",
            "cuisine": "Asian",
            "caloriesPerServing": 250,
            "tags": ["Vegetarian", "Stir-fry", "Asian"],
            "userId": 143,
            "image": "https://cdn.dummyjson.com/recipe-images/2.webp",
            "rating": 4.7,
            "reviewCount": 26,
            "mealType": ["Lunch"],
            "price": 9.99
        },
        {
            "id": 3,
            "name": "Chocolate Chip Cookies",
            "prepTimeMinutes": 15,
            "cookTimeMinutes": 10,
            "servings": 24,
            "difficulty": "Easy",
            "cuisine": "American",
            "caloriesPerServing": 150,
            "tags": ["Cookies", "Dessert", "Baking"],
            "userId": 34,
            "image": "https://cdn.dummyjson.com/recipe-images/3.webp",
            "rating": 4.9,
            "reviewCount": 13,
            "mealType": ["Snack", "Dessert"],
            "price": 7.99
        },
        {
            "id": 4,
            "name": "Chicken Alfredo Pasta",
            "prepTimeMinutes": 15,
            "cookTimeMinutes": 20,
            "servings": 4,
            "difficulty": "Medium",
            "cuisine": "Italian",
            "caloriesPerServing": 500,
            "tags": ["Pasta", "Chicken"],
            "userId": 136,
            "image": "https://cdn.dummyjson.com/recipe-images/4.webp",
            "rating": 4.9,
            "reviewCount": 82,
            "mealType": ["Lunch", "Dinner"],
            "price": 14.99
        },
        {
            "id": 5,
            "name": "Mango Salsa Chicken",
            "prepTimeMinutes": 15,
            "cookTimeMinutes": 25,
            "servings": 3,
            "difficulty": "Easy",
            "cuisine": "Mexican",
            "caloriesPerServing": 380,
            "tags": ["Chicken", "Salsa"],
            "userId": 26,
            "image": "https://cdn.dummyjson.com/recipe-images/5.webp",
            "rating": 4.9,
            "reviewCount": 63,
            "mealType": ["Dinner"],
            "price": 13.99
        },
        {
            "id": 6,
            "name": "Quinoa Salad with Avocado",
            "prepTimeMinutes": 20,
            "cookTimeMinutes": 15,
            "servings": 4,
            "difficulty": "Easy",
            "cuisine": "Mediterranean",
            "caloriesPerServing": 280,
            "tags": ["Salad", "Quinoa"],
            "userId": 197,
            "image": "https://cdn.dummyjson.com/recipe-images/6.webp",
            "rating": 4.4,
            "reviewCount": 59,
            "mealType": ["Lunch", "Side Dish"],
            "price": 10.99
        },
        {
            "id": 7,
            "name": "Tomato Basil Bruschetta",
            "prepTimeMinutes": 15,
            "cookTimeMinutes": 10,
            "servings": 6,
            "difficulty": "Easy",
            "cuisine": "Italian",
            "caloriesPerServing": 120,
            "tags": ["Bruschetta", "Italian"],
            "userId": 137,
            "image": "https://cdn.dummyjson.com/recipe-images/7.webp",
            "rating": 4.7,
            "reviewCount": 95,
            "mealType": ["Appetizer"],
            "price": 8.99
        },
        {
            "id": 8,
            "name": "Beef and Broccoli Stir-Fry",
            "prepTimeMinutes": 20,
            "cookTimeMinutes": 15,
            "servings": 4,
            "difficulty": "Medium",
            "cuisine": "Asian",
            "caloriesPerServing": 380,
            "tags": ["Beef", "Stir-fry", "Asian"],
            "userId": 18,
            "image": "https://cdn.dummyjson.com/recipe-images/8.webp",
            "rating": 4.7,
            "reviewCount": 58,
            "mealType": ["Dinner"],
            "price": 15.99
        },
        {
            "id": 9,
            "name": "Caprese Salad",
            "prepTimeMinutes": 10,
            "cookTimeMinutes": 0,
            "servings": 2,
            "difficulty": "Easy",
            "cuisine": "Italian",
            "caloriesPerServing": 200,
            "tags": ["Salad", "Caprese"],
            "userId": 128,
            "image": "https://cdn.dummyjson.com/recipe-images/9.webp",
            "rating": 4.6,
            "reviewCount": 82,
            "mealType": ["Lunch"],
            "price": 11.99
        },
        {
            "id": 10,
            "name": "Shrimp Scampi Pasta",
            "prepTimeMinutes": 15,
            "cookTimeMinutes": 20,
            "servings": 3,
            "difficulty": "Medium",
            "cuisine": "Italian",
            "caloriesPerServing": 400,
            "tags": ["Pasta", "Shrimp"],
            "userId": 114,
            "image": "https://cdn.dummyjson.com/recipe-images/10.webp",
            "rating": 4.3,
            "reviewCount": 5,
            "mealType": ["Dinner"],
            "price": 16.99
        }
    ])

    return (
        <div>
            <AddFood />
            <div style={{
            height: "900px",
            width: "98vw",
            backgroundColor: "lightblue",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap:"20px"
        }}>
            


            {foods.map((ele) => {
                console.log(ele);

                return <Food img={ele.image} price={ele.price} name={ele.name} />
            })};
            {/* <Food />
            <Food />
            <Food />
            <Food /> */}
        </div>
        </div>
    )
}

export default App