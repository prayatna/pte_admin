import * as types from '../actions/actionTypes';
const  initialState={
    isFetching: false,
    fetched: false,
    items: [],
    error: ''
}


export default function menuItems(state = initialState, action){

    switch (action.type) {

        case types.FETCH_QUESTIONTYPES:
            return {...state,
                isFetching: true,
            }

        case types.FETCH_QUESTIONTYPES_SUCCESS:
            return {
                ...state,
                fetched: true,
                isFetching: false,
                items: action.payload,
            }
        case types.FETCH_QUESTIONTYPES_FAIL:
            return{
                ...state,
                fetched: false,
                error: action.payload
            }

        default:
            return state
    }
}


