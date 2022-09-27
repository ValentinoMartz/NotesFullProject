import axios from "axios";
import {
  GET_ALL_NOTES,
  POST_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
} from "./action_types";

export function getAllNotes(){
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/notas`);
     
      return dispatch({
        type: GET_ALL_NOTES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err, "error del get en front");
    }
  };
}

export function postNote(payload) {
  return async function (dispatch) {
    try{
    const res = await axios.post(`http://localhost:3001/notas`, payload);
    return dispatch({
      type: POST_NOTE
    });
    }catch (err){
      console.log(err, "error post en front")
    }
 
  };
}

export function deleteNote(id) {
  return async function (dispatch) {
    const res = await axios.delete(`http://localhost:3001/notas/${id}`);
    const payload = await res.data;
    dispatch({ type: DELETE_NOTE, payload });
  };
}

export function editNote(id) {
  return async function (dispatch) {
    const res = await axios.put(`http://localhost:3001/notas/${id}`);
   
    dispatch({ type: EDIT_NOTE, payload: res.data });
  };
}
