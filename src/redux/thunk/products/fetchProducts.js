import { loadProducts } from "../../actionCreators/productActions";

const loadProductData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://moon-tech-server-tau.vercel.app/products");

    const data = await res.json();

    if (data.data.length) {
      dispatch(loadProducts(data.data));
    }
  };
};

export default loadProductData;
