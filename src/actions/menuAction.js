import axios from 'axios'
import * as types from './actionTypes';

//Fetch question types to load for menubar
export function fetchMenuItems() {
    return function (dispatch) {
        dispatch({type: types.FETCH_QUESTIONTYPES})

        axios.get('http://pte.novasoftware.com.au:3000/api/questionType')
            .then((response) => {
                dispatch({type: types.FETCH_QUESTIONTYPES_SUCCESS, payload: response.data})
            })
            .catch((err) => {

                dispatch({type: types.FETCH_QUESTIONTYPES_FAIL, payload: err})
            })

    }
}

export function toggleSubMenu(collapsed) {
    return {
            type: types.TOGGLE_SUBMENU_VISIBILITY,
            payload:!collapsed

    }
}

