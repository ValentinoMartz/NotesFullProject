import axios from 'axios';
import{
    GET_ALL_NOTES,
} from "./action_types"

export function getAllNotes(){
    return async function (dispatch){
        const res= await axios.get(`http://localhost:3001/notas`)
        const payload = await res.data
        dispatch({type:GET_ALL_NOTES, payload})
    }
}