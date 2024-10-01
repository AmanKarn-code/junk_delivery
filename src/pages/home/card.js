import React, { useEffect, useMemo, useState } from 'react';

const Card = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("regular");
  const [sizeOption, setSizeOption] = useState([])

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${size} ${product.name} to cart.`);
    // Handle add to cart functionality here
  };

useEffect(() => {
    if(product.catagory==="pizza"){
        setSizeOption(['regular','medium','large'])
      }
      else{
        setSizeOption(['small','regular'])
      }

}, [])

  

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const imageUrl = useMemo(() => {
    return product.image ||`https://picsum.photos/800/600?random=${Math.random(10,20)}`;
  }, [product.image])

  return (
    <div
    className="relative m-5 bg-gradient-to-r from-blue-200 via-blue-300 to-purple-300 dark:bg-gradient-to-r dark:from-blue-400 dark:via-blue-800 dark:to-purple-500 rounded-lg max-w-md  transition-all duration-300"
    style={{ padding: "2px" }}
  >
     <div className=" bg-gradient-to-r from-blue-100 to-purple-200 dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-800 rounded-lg p-2 w-full hover:shadow-[0_4px_20px_rgba(70,130,180,0.7),0_6px_25px_rgba(147,112,219,0.5)] transition-all duration-300">
      <img
        className="rounded-t-lg w-full h-48 object-cover"
        src={imageUrl}
        alt={product.name}
      />
      <div className="text-black dark:text-white">
        <h3 className="text-lg font-bold ">{product.name}</h3>
        <p className="text-gray-700 dark:text-gray-300">{product.description}</p>

        <div className="mt-4 flex justify-between">
          {/* <label htmlFor="quantity" className=""></label> */}
          <select
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            className="bg-gray-800 text-white p-2 rounded"
          >
            {[1, 2, 3, 4, 5].map((qty) => (
              <option key={qty} value={qty}>{qty}</option>
            ))}
          </select>
       

        <div>

          <label htmlFor="size" className="mr-2">Size:</label>
          <select
            id="size"
            value={size}
            onChange={handleSizeChange}
            className="bg-gray-800 text-white p-2 rounded"
            >
                {sizeOption.map((s) => (
                    <option key={s} value={s}>{s}</option>
                ))}
          </select>
            </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to cart
          </button>
          <p className="font-bold">₹{product.price[size] * quantity}/-</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
