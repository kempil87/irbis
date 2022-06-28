import {newsSlice} from "../reducers/NewsSlice";
import {api} from "../../base/axios";
import {useParams} from "react-router-dom";

export const fetchNews = () => async (dispatch) => {

  try {
    dispatch(newsSlice.actions.newsFetching())
    const res = await api.get('/news')
    dispatch(newsSlice.actions.newsFetchingSuccess(res.data))
  } catch (e) {
    dispatch(newsSlice.actions.newsFetchingError("Ошибка запроса"))
  }
}


// export const fetchNewsIn = () => async (dispatch) => {
//
//   try {
//
//     dispatch(newsSlice.actions.newsInFetching())
//     const {_id} = useParams()
//     const res = await api.get(`/news/${_id}`)
//
//     dispatch(newsSlice.actions.newsInFetchingSuccess(res.data))
//     console.log(res.data,100000)
//   } catch (e) {
//     console.log('er')
//     dispatch(newsSlice.actions.newsInFetchingError("Ошибка запроса"))
//   }
// }