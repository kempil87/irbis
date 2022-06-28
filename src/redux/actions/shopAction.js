import {api} from "../../base/axios";
import {shopSlice} from "../reducers/ShopSlice";
export const fetchShop = () => async (dispatch) => {

  try {
    dispatch(shopSlice.actions.productFetching())
    const res = await api.get('/products')
    dispatch(shopSlice.actions.productFetchingSuccess(res.data))
  } catch (e) {
    dispatch(shopSlice.actions.productFetchingError("Ошибка запроса"))
  }
}
