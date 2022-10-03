import React from 'react'
import './ProductList.css'
import Product from '../../product/Product'
import {Products} from '../../data'


const ProductList = () => {
  return (
     <div className="pl">
        <div className="pl-texts">
            <h1 className='pl-title'>Create & Inspire. It's Vivek Sir</h1>
            <p className='pl-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eius tempora recusandae odio aspernatur perferendis!
            </p>
        </div>
        <div className="pl-list">
            {Products.map((item)=>(
            <Product key={item.id} img={item.img} link={item.link}/>
            ))}  
        </div>
     </div>
  )
}

export default ProductList