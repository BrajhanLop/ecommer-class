import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { BiBox } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { changeIsShowCart } from "../../store/slices/cart.slice";

export const Header = () => {
  const { token } = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate()

const handleOpenCart = () => {

  if (!token) {
    return navigate('/login')
  }
  dispatch(changeIsShowCart())
}

  return (
    <header className=" flex justify-between items-center h-20 border border-b-2">
      <Link to="/" className=" text-2xl w-[60%]">
        E-commerce
      </Link>
      <nav className="w-[40%] ">
        <ul className=" flex justify-evenly">
          <li className=" text-2xl">
            <Link to="/login">
              {" "}
              <AiOutlineUser />{" "}
            </Link>
          </li>
          <li className=" text-2xl">
            <Link to="/purchases">
              {" "}
              <BiBox />{" "}
            </Link>
          </li>
          <li className=" text-2xl">
            <button onClick={handleOpenCart}>
              {" "}
              <AiOutlineShoppingCart />{" "}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
