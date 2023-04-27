import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import Product from "./types";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return <ProductTable products={products} />;
};

export default App;