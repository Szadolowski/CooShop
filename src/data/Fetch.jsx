import React, { use } from "react";

async function getProducts() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  if (!response.ok) {
    throw new Error(`Network response was not ok (status: ${response.status})`);
  }
  const dataFromApi = await response.json();
  return dataFromApi;
}

const productsPromise = getProducts();

class FetchErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Error fetching products.</div>;
    }
    return this.props.children;
  }
}

const ProductsList = () => {
  const products = use(productsPromise);

  return (
    <div>
      <h2>Products from API:</h2>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.title} – ${product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

const Fetch = ({ promotionCloth }) => {
  const products = use(productsPromise);

  let promo = [];

  for (let i = 0; i < 5; i++) {
    promo = [...promo, products[Math.floor(Math.random() * products.length)]];
  }

  promotionCloth = promo;
  console.log("Promotion Cloth:", promotionCloth);
};

export default Fetch;
