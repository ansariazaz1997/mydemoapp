import React, { useEffect, useState } from 'react'

const Products = () => {
   const [data, setData] = useState([])
     const getProducts = async () => {
       let apiResponse = await fetch("https://dummyjson.com/products")
       let res = await apiResponse.json()
   
       if (apiResponse.status == 200) {
         setData(res.products)
       }
     }
     useEffect(() => {
       getProducts()
     }, [])
  return (
    <div className='products'>
      <h1 className='title'>All Products</h1>
      <div className='card-container'>
        {data.map((product) => (
          <div className='card'>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products