import React from 'react'

function Products() {
  const products = [
    { name: "Product 1", price: "$20", image: "product1.jpg" },
    { name: "Product 2", price: "$30", image: "product2.jpg" },
    { name: "Product 3", price: "$40", image: "product3.jpg" }
]
  return (
    <div>
       <div className="products-section">
            <h2>Our Products</h2>
            <div className="products-container">
                {products.map((product, index) => (
                    <div className="product-card" key={index}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products
