// 3. Product Listing Page
// Create a product listing page with at least 6 products. Store product details in an array of objects and use `.map()` to display each product through a reusable `ProductCard` component. Each card should display the product name, price, and category.

import ProductCard from "./components/ProductCard";

function App(){
  const products = [
    {name: "Laptop", price: 55000, category: "Electronic"},
    {name: "SmartPhone", price: 25000, category: "Electronic"},
    {name: "T-Shirt", price: 1499, category: "Clothing"},
    {name: "Shoes", price: 1799, category: "Footwere"},
    {name: "Headphones", price: 1999, category: "Accessories"},
    {name: "Bagpack", price: 999, category: "Bags"},

    
  ]

  return(
    <div className="flex items-center justify-center h-auto flex-col">
      <div className="mt-16 text-xl">
        <h1>Product Category List</h1>
      </div>
      <div className="grid grid-cols-2 mx-auto gap-6 mt-10">
      {products.map((product) =>(
        <ProductCard name={product.name} price={product.price} category={product.category}/>
      ))}
    </div>
    </div>
  )
}

export default App;