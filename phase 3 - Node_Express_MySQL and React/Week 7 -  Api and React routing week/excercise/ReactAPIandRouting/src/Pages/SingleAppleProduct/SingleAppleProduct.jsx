import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleAppleProduct() {
  const [product, setProduct] = useState(null);
  const { productUrl_Param } = useParams(); // this will get the parametters passed to the single page componente

  useEffect(() => {
    fetch("http://localhost:3008/iphones")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Filtering to find the specific product based on the parameter
        const foundProduct = data.products.find(
          (prod) => prod.product_url === productUrl_Param
        );
        console.log("parameter received: " + productUrl_Param); // Logging the received parameter
        console.log("filtered product: " + JSON.stringify(foundProduct)); // Logging the found product

        setProduct(foundProduct); // Setting the found product
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        alert("An error occurred while fetching iPhone products.");
      });
  }, [productUrl_Param]); // Adding productUrl_Param as a dependency

  if (product) {
    return (
      <div className="container mt-5 mb-5">
        <br />
        <br />
        <h1 className="mb-4 text-center">{product.product_name}</h1>
        <h3 className="mb-4 text-center mb-5">{product.product_description}</h3>

        <div className="row">
          <div className="col-md-6">
            <img
              src={product.product_img}
              alt={product.product_name}
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center p-5">
            <h2>Details:</h2>
            <p>
              <strong>Starting Price:</strong> ${product.starting_price}
            </p>
            <p>
              <strong>Price Range:</strong> {product.price_range}
            </p>
            <p>
              <strong>Description:</strong> {product.product_brief_description}
            </p>
            <a
              href={product.product_link}
              className="btn btn-primary w-100 mt-3"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h2 className="text-center mt-5 pt-5">Product Not Found </h2>
        <p className="text-center mb-3">
          The product you are looking for could not be found.
          <br />
          Please check the URL for any typos, or use the navigation bar.
        </p>
      </>
    );
  }
}

export default SingleAppleProduct;
