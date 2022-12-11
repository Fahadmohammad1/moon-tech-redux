import { addProducts } from "../../actionCreators/productActions";

const addProductData = (product) => {
  return async (dispatch, getState) => {
    const res = await fetch("https://moon-tech-server-tau.vercel.app/product", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = res.json();

    if (data.acknowledged) {
      dispatch(
        addProducts({
          ...product,
          _id: data.insertedId,
        })
      );
    }
  };
};

export default addProductData;
