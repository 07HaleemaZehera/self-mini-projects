import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AddtCartData,
  getFilter_product_Men,
  getMen_Json_Data,
  getMen_Sorting_product,
  kidsTypes,
} from "../../Redux/Actions/actionProducts";
import { addSearch } from "../../Redux/Actions/actionSearch";
import Styles from "../../Styles/StylesProduct.module.css";
import Navbar from "../Navbar/Navbar";

const Mens = () => {
  const dispatch = useDispatch();
  const searchs = useSelector((state) => state.searchs.searchs);
  if (searchs.length >= 1) {
    dispatch(getFilter_product_Men(searchs));
    dispatch(addSearch([]));
  }

  const handleFilter = (data) => {
    const menData = data.target.value;
    dispatch(getFilter_product_Men(menData));
    console.log("data", data);
  };

  const handleSorting = (e) => {
    let value = e.target.value;
    console.log(value);
    dispatch(getMen_Sorting_product(value));
  };

  useEffect(() => {
    dispatch(getMen_Json_Data("Men"));
  }, []);
  const products = useSelector((state) => state.products.men_data);
  console.log("products page", products);
  const handleAddCart = (id) => {
    console.log("id", id);

    dispatch(AddtCartData(id));
  };

  return (
    <>
     <div className={Styles.main_container}>
       <br />
     <div className={Styles.Navbar}>
        <Navbar />
      </div>

      <div className={Styles.filter_div}>
        <div className={Styles.filter_div_left}>
          <div>Filter By Brand</div>
          <div className={Styles.filter_div_left_brand}>
            <select onChange={handleFilter} name="" id="">
              <option>Select brand</option>
              <option value="shirts">Shirts</option>
              <option value="Loungewear">Loungewear</option>
            </select>
          </div>
        </div>
        <div className={Styles.sort_div_right}>
          <div>Sort By Price</div>
          <div>
            <select name="" id="" onChange={handleSorting}>
              <option>Select</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <br></br>

      <div className={Styles.Product_Container}>
        {products.map((ele) => {
          return (
            // <div className={Styles.Product_Child}>
            //   <div className={Styles.Product_Image}>
            //     <img
            //       className={Styles.Product_ImageImg}
            //       src={ele.image_url}
            //       alt=""
            //     />
            //   </div>
            //   <div className={Styles.Product_Description}>
            //     <p>Name : {ele.brand}</p>
            //     <p>Price : {ele.price}</p>
            //     <p>Category : {ele.category}</p>
            //     <p>Color : {ele.color}</p>
            //     <div className={Styles.Product_CartContainer}>
            //       {/* <button className={Styles.Product_Cart}>Add to Cart</button> */}
            //       <button
            //         className={Styles.Product_Cart}
            //         onClick={() => handleAddCart(ele._id)}
            //       >
            //         Add to Cart
            //       </button>
            //     </div>
            //   </div>
            // </div>

            <>
            <div className={Styles.Product_Child}>
              {/* //card */}
              <Link onClick={()=>dispatch(kidsTypes("mens"))} to={`/details/${ele._id}`} className={Styles.decoration}>
                <div className={Styles.Product_Image}>
                  {/* //Image_url */}
                  <img
                    className={Styles.Product_ImageImg}
                    src={ele.image_url}
                    alt=""
                  />
                </div>
                <div className={Styles.Product_Description}>
                  {/* //contnt */}
                  <p>Name: {ele.name}</p>
                  <p>Price : {ele.price}</p>
                  <p> Category: {ele.brand}</p>
                  <p>Color: {ele.color}</p>
                </div>
              </Link>
              <button
                className={Styles.Product_Cart}
                onClick={() => handleAddCart(ele._id)}
              >
                Add to Cart
              </button>
            </div>
          </>

          );
        })}
      </div>
     </div>
    </>
  );
};

export default Mens;

{
  /* <div>
<button onClick={() => handleFilter("shirts")}>Shirts</button>
</div>
<div>
<button onClick={() => handleFilter("Loungewear")}>
  Loungewear
</button>
</div> */
}
