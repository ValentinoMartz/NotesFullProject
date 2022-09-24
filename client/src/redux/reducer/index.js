import{
    GET_ALL_NOTES,
    DELETE_NOTE
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
        case DELETE_NOTE: return{
            ...state
        }

        default:
        return state;
    }
}