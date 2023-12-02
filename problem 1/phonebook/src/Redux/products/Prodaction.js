import axios from "axios";
import { GET_PRODUCT } from "./ProdactionTypes";


const url = `${'https://dark-cyan-gosling-tutu.cyclic.app'}/phone/`
// const url = `http://localhost:4000/phone/`

export const postData = (data) => async (dispatch) => {
  try{
    let res = await axios.post(`${url}post`, data)
    console.log(res)
  }catch(err){
    console.log(err)
  }
}


export const patchDate = (data, id) => async (dispatch) => {
  try{
    let res = await axios.patch(`${url}patch/${id}`, data)
    console.log(res)
  }catch(err){
    console.log(err)
  }
}
export const searchData = (data) => async (dispatch) => {
  if(data == ""){
    GetProduct()
  }
  try{
    let res = await axios.post(`${url}search`, {data})
    dispatch({ type: GET_PRODUCT, payload: res.data.data });
  }catch(err){
    console.log(err)
  }
}


export const GetProduct = () => async (dispatch) => {
  try{
    let res = await axios(url)
    dispatch({ type: GET_PRODUCT, payload: res.data.data });
  }catch(err){
    console.log(err)
  }
};


export const DeleteProduct = (data) => async (dispatch) => {
    try{
    let res = await axios.delete(`${url}delete/${data["_id"]}`)
    let res1 = await axios(url)
    dispatch({ type: GET_PRODUCT, payload: res1.data.data });
  }catch(err){
    console.log(err)
  }

};