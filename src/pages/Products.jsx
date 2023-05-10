import { useEffect, useState } from "react";
import { axiosEcommerce, getConfig } from "../utils/configAxios";
import { Link, useParams } from "react-router-dom";
import { ProductsSimilars } from "../components/ProductsSimilars";

export const Products = () => {
  const [product, setProduct] = useState();
  const [cant, setCant] = useState(1)

  const { id } = useParams();

  useEffect(() => {
    axiosEcommerce.get(`products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  const handleAddCart = () => {
    axiosEcommerce.post('cart', {quantity: cant, productId: id}, getConfig())
.then(res => {
  alert('producto agregado')
})
  }

  

  return (
    <div className="mx-5">
      <div className="flex mb-5">
        <Link to="/">Home</Link>
        <p>-</p>
        <p>{product?.title}</p>
      </div>
      <div className="flex gap-5">
        <div className=" w-[50%] flex justify-center">
          <img className="" src={product?.images[0].url} alt="" />
        </div>
        <div className="w-[50%]">
          <h3 className=" font-bold">{product?.title}</h3>
          <p>{product?.description}</p>
          <div className="flex justify-evenly">
            <div>
              <p className=" font-bold">Price</p>
              <p>{product?.price}</p>
            </div>
            <div>
              <p  className=" font-bold">Quantity</p>
              <div className="flex">
                <button className="border px-3 py-1" onClick={()=>setCant(cant - 1)} >-</button>
                <p className="border px-3 py-1">{cant}</p>
                <button className="border px-3 py-1" onClick={()=>setCant(cant + 1)}>+</button>
              </div>
            </div>
          </div>
          <button onClick={()=>handleAddCart(product?.id)} className=" bg-red-500 px-4 rounded-md py-2 text-white w-full">
            Add to Cart
          </button>
        </div>
      </div>
      <ProductsSimilars productId = {product?.id} categoryId ={product?.categoryId}/>
    </div>
  );
};
