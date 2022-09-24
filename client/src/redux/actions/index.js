import axios from 'axios';
import{
    GET_ALL_NOTES,
    DELETE_NOTE,
    EDIT_NOTE
} from "./action_types"

export function getAllNotes(){
    return async function (dispatch){
        const res= await axios.get(`http://localhost:3001/notas`)
        const payload = await res.data
        dispatch({type:GET_ALL_NOTES, payload})
    }
}

export function deleteNote(id){
    return async function(dispatch){
        const res= await axios.delete(`http://localhost:3001/notas/${id}`)
        const payload= await res.data
        dispatch({type:DELETE_NOTE, payload})
    }
}

export function editNote(id){
    return async function(dispatch){
        const res = await axios.put(`http://localhost:3001/notas/${id}`)
        const payload= await res.data
        dispatch({type:EDIT_NOTE, payload})
    }
}