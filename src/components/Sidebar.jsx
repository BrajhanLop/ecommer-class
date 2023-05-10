import { Category } from "./Category";
import { Price } from "./Price";

export const Sidebar = ({handleClickCategory}) => {
  return (
    <div className=" flex flex-col gap-4">
      <Price />
      <Category handleClickCategory={handleClickCategory}/>
    </div>
  );
};
