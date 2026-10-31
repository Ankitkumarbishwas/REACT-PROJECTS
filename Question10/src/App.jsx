
import { useState } from "react";

function ProductCard({ name, price, onAddToCart }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-bold">{name}</h2>

      <p className="text-gray-600 mb-3">Price: ₹{price}</p>

      <button
        onClick={onAddToCart}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 1500 },
    { id: 4, name: "Keyboard", price: 1000 },
    { id: 5, name: "Mouse", price: 500 }
  ];

  function addToCart(product) {
    setCart([...cart, product]);
  }

  const totalPrice = cart.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Mini Shopping Cart
      </h1>

      <div className="bg-white p-4 rounded-lg shadow mb-6 text-center">
        <h2 className="text-xl font-bold">
          Cart Items: {cart.length}
        </h2>

        <p className="text-lg mt-2">
          Total Price: ₹{totalPrice}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
