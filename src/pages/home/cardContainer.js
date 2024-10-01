import React from 'react'
import Card from './card';
const products = [
    {
        name: "Pizza Name",
        description: "Delicious pizza with veggies and cheese",
        image: "",
        price: {"regular":"400","medium":"500","large":"600"},
        catagory: "pizza"
    },
   
    
    {
        name: "drink Name",
        description: "Delicious pizza with veggies and cheese",
        image: "",
        price: {"small":"400","regular":"600"},
        catagory: "drink"
    },
   

    // Add more products as needed
];
const cardContainer = () => {
    return (
        <div className='flex flex-col justify-center my-7 w-11/12 mx-auto'>
            <div className='flex flex-col justify-center my-7 w-11/12 mx-auto'>
                <h1 className='text-3xl font-bold dark:text-white'>Pizza</h1>
                <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {products.filter(product => (product.catagory === "pizza")).map((product) => (
                        <Card key={product.name} product={product} />
                    ))}
                </div>
            </div>
            <div className='flex flex-col justify-center my-7 w-11/12 mx-auto'>
                <h1 className='text-3xl font-bold dark:text-white'>Drinks</h1>
                <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {products.filter(product => (product.catagory === "drink")).map((product) => (
                        <Card key={product.name} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default cardContainer