import React from 'react'
import ProductList from '../Components/ProductList'
import Loading from '../Components/Loading'

function Menu() {
  return (
    <div className='menuContainer'>
      <h1 className='menuText'>More than a coffee!</h1>
      <h1 className='menuHeading'>OUR PRODUCTS</h1>
      <ProductList />
      <Loading />
    </div>
  )
}

export default Menu