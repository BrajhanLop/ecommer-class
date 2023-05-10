import React, { useEffect, useMemo, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Search } from "../components/Search";
import { CardProduct } from "../components/CardProduct";
import { axiosEcommerce } from "../utils/configAxios";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductName(e.target.nameProduct.value);
    e.target.nameProduct.value = "";
  };

  const handleClickCategory = (e) => {
    if (e.target.dataset.category === "0") {
      axiosEcommerce.get("products").then((res) => setProducts(res.data));
    } else {
      axiosEcommerce
        .get(`products?categoryId=${e.target.dataset.category}`)
        .then((res) => setProducts(res.data));
    }
  };

  const productByName = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(productName.toLowerCase())
    );
  }, [products, productName]);

  useEffect(() => {
    axiosEcommerce.get("products").then((res) => setProducts(res.data));
  }, []);

  return (
    <main className="flex gap-5 mt-5 mx-10">
      <Sidebar handleClickCategory={handleClickCategory} />
      <section className="w-full flex flex-col gap-5">
        <Search handleSubmit={handleSubmit} />
        <div className="flex flex-wrap justify-center gap-3">
          {productByName.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};
