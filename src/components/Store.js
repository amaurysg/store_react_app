import React from 'react'
import Products from './Products'

const Store = ({products, addProductCar}) => {
  return (
    <div>
      <h1>Store</h1>
      <Products products={products} 
                addProductCar={addProductCar}>

      </Products>
    
    </div>
  )
}

export default Store
