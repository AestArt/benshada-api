import api from '../api/api.js';
import {
  PRODUCTS_ONE,
  PRODUCTS_ONE_SELECTED,
  PRODUCTS_ALL,
  PRODUCT_UPDATE,
  PRODUCT_DELETE
} from './types/productTypes.js';

export const productsAll = () => ({ type: PRODUCTS_ALL, payload: api.get('/products/') });

export const productsOne = (id) => ({
  type: PRODUCTS_ONE,
  payload: api.get(`/products/${id}`)
});

export const productsOneSelected = (payload) => ({
  type: PRODUCTS_ONE_SELECTED,
  payload
});

export const productUpdate = (id, productData) => (dispatch) => {
  const response = dispatch({
    type: PRODUCT_UPDATE,
    payload: api.put(`/products/${id}`, productData)
  });

  return response.then(() => dispatch(productsOne(id)));
};

export const productDelete = (id) => (dispatch) => {
  const response = dispatch({
    type: PRODUCT_DELETE,
    payload: api.delete(`/products/${id}`)
  });

  return response.then(() => dispatch(productsAll()));
};
