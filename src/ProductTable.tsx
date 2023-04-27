import React from "react";
import Product from "./types";
import "./table.css";

interface Props {
  products: Product[];
}

const ProductTable: React.FC<Props> = ({ products }) => {
  const handleAddToCart = (product: Product) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    cartItems.push({
      title: product.title,
      price: product.price,
      image: product.image,
      rating: product.rating,
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert(`${product.title} added to cart`);
  };

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Productos</th>

        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id} className="product-row">
            <td>{product.title}</td>
            <td>${product.price}</td>
            <td>
              <img src={product.image} alt={product.title} width="50" />
            </td>
            <td>{product.rating.count}</td>
            <td>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
