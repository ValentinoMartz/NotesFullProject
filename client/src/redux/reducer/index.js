import{
    GET_ALL_NOTES,
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
        default:
        return state;
    }
}