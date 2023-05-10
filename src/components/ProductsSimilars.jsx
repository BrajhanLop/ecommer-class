import React, { useEffect, useState } from "react";
import { axiosEcommerce } from "../utils/configAxios";
import { Link } from "react-router-dom";

export const ProductsSimilars = ({ categoryId, productId }) => {
    const [productSimilars, setProductSimilars] = useState([])

  useEffect(() => {
    if (categoryId) {
      axiosEcommerce
        .get(`products?categoryId=${categoryId}`)
        .then((res) => {
            setProductSimilars(res.data.filter(product => product.id != productId))
        });
    }
  }, [categoryId]);

  return (
    <div>
      <h3>Discover similar items</h3>
      <div>
        {
            productSimilars.map(prod => (
                <Link to={`../products/${prod.id}`} key={prod.id} className="border">
                    <img className="w-[250px]" src={prod.images[0].url} alt="" />
                    <p>{prod.title}</p>
                </Link>
            ))
        }
      </div>
    </div>
  );
};
