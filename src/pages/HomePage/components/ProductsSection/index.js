/* eslint-disable no-alert */
import React, { useState, useEffect } from "react";
import MessageBox from "../../../../components/MessageBox";
import Spinner from "../../../../components/Spinner";
import ProductsService from "../../../../services/ProductsService";
import ProductCard from "./components/ProductCard";
import Container from "./styles";
import Reload from "../../../../components/Reload";
import colors from "../../../../config/colors";

function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  async function getProducts() {
    setLoading(true);
    setErrorMessage(null);
    const data = await ProductsService.getAll();
    if (data) {
      setLoading(false);
      setProducts(data);
    } else {
      setLoading(false);
      setErrorMessage("An error ocurred, please try again");
    }
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container data-testid="products-container">
      {loading ? (
        <Spinner color={colors.darkPink} fontSize="40px" />
      ) : (
        products.map((p) => <ProductCard product={p} key={p.SK} />)
      )}
      {errorMessage && (
        <div>
          <MessageBox text={errorMessage} isError />
          <Reload onClick={getProducts} />
        </div>
      )}
    </Container>
  );
}

export default ProductsSection;
