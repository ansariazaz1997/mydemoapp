import React, { useEffect, useState } from 'react'
import Hero from '../components/hero/Hero'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const [data, setData] = useState([])
  const [index, setIndex] = useState(0)
  const navigate = useNavigate()
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
  const handleSeeMore = () => {
    navigate("/products")
  }
  const testimonials = [
    {
      name: "John Doe",
      text: "This product changed my life! Highly recommend to everyone.",
      company: "TechCorp",
    },
    {
      name: "Jane Smith",
      text: "Amazing service and fantastic customer support.",
      company: "Web Solutions",
    },
    {
      name: "Michael Brown",
      text: "A must-have for professionals. 10/10!",
      company: "Design Studio",
    },
  ];
  const prevTest = ()=>{
     setIndex((prev)=>(prev===0?testimonials.length-1:prev-1))
  }
  const nextTest = ()=>{
    setIndex((prev)=>(prev===testimonials.length-1 ? 0:prev+1))
  }
  return (
    <div className='home'>
      <Hero />
      <div className='product-list'>
        <h1>Products List</h1>
      </div>
      <div className='card-container'>
        {data.slice(0, 8).map((product) => (
          <div className='card'>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
      <div className='more'>
        <button className='more-btn' onClick={() => handleSeeMore()}> See More Products</button>
      </div>
      <div>
        <h2>What People are saying</h2>
        <div className='test-card-container'>
          <div className='test-card'>
            <div>
            <p className='text'>"{testimonials[index].text}"</p>
            <h4 className='name'>{testimonials[index].name}</h4>
            <span className='company'>{testimonials[index].company}</span>

            </div>
          </div>
        </div>
        <div className='btns'>
          <button className='btn' onClick={prevTest}>Prev</button>
          <button className='btn' onClick={nextTest}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Home