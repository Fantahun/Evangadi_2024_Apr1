

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SingleAppleProduct() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const { productUrl } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3008/iphones');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Fetch error:', error);
        alert('An error occurred while fetching iPhone products.');
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (products.length > 0 && productUrl) {
      // console.log('Available products:', products.map(p => p.product_url));
      
      const foundProduct = products.find(p => p.product_url === productUrl.replace(/^\/iphones\//, ''));
      
      setProduct(foundProduct || null);
    }
  }, [products, productUrl]);


  if (!product) {
    console.log('No product found for URL:', productUrl);
    return <h1 className='mt-5 pt-5'>Product Not Found</h1>;
  }

  return (
    <div className="container mt-5 mb-5">
        <br /><br />
      <h1 className="mb-4 text-center">{product.product_name}</h1>
      <h2 className="mb-4 text-center">{product.product_description}</h2>

      <br />
      <div className="row">
        <div className="col-md-6">
          <img src={product.product_img} alt={product.product_name} style={{ width: '100%', height: 'auto' }} />
        </div>
        
        <div className="col-md-6">
          <h2>Details:</h2>
          <p><strong>Starting Price:</strong> ${product.starting_price}</p>
          <p><strong>Price Range:</strong> {product.price_range}</p>
          <p><strong>Description:</strong> {product.product_brief_description}</p>
          <a href={product.product_link} className="btn btn-primary w-100 mt-3">Buy Now</a>
        </div>
      </div>
    </div>
  );
}

export default SingleAppleProduct;