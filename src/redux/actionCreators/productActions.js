import {
  ADD_PRODUCT,
  ADD_TO_CART,
  LOAD_PRODUCT,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
} from "../actionTypes/actionTypes";

export const loadProducts = (data) => {
  return {
    type: LOAD_PRODUCT,
    payload: data,
  };
};
export const addProducts = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};
export const removeProducts = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};
