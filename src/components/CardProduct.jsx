import { AiOutlineShoppingCart} from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom';
import { axiosEcommerce, getConfig } from '../utils/configAxios';
export const CardProduct = ({product}) => {

const handleClickAddProduct = ( id, e) => {
e.preventDefault()
axiosEcommerce.post('cart', {quantity: 1, productId: id}, getConfig())
.then(res => {
  alert('producto agregado')
})
}


  return (
    <Link to={`/products/${product.id}`}  className="border w-[250px] p-2 rounded-lg">
      <div className='h-[200px] flex justify-center'>
        <img className=' object-contain h-[200px]' src={product?.images[0].url} alt="" />
      </div>
      <div className='relative'>
        <h4 className=" font-bold text-lg ">{product.title}</h4>
        <p className=" text-gray-500">Price</p>
        <p>{product.price}</p>
        <div onClick={(e)=>handleClickAddProduct(product.id, e)} className=' bg-red-500 rounded-full w-10 h-10 flex justify-center items-center text-white absolute right-0 bottom-0 cursor-pointer'>
            <AiOutlineShoppingCart/>
        </div>
      </div>
    </Link>
  );
};
