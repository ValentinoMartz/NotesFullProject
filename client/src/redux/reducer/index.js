import{
    GET_ALL_NOTES,
    POST_NOTE,
    DELETE_NOTE,
    EDIT_NOTE,
} from "../actions/action_types"

const initialState ={
    notas:[],
}
export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case  GET_ALL_NOTES: return{
            ...state,
            notas:payload,
        }

        case POST_NOTE: return {
            ...state,
        }

        case DELETE_NOTE: return{
            ...state
        }
        case EDIT_NOTE: return {
            ...state,
            notas:payload

        } 

        default:
        return state;
    }
}