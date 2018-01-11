import axios from 'axios'
import * as types from './actionTypes';

export function fetchMenuItems(){
    return function (dispatch) {
            dispatch({type: types.FETCH_QUESTIONTYPES})

        axios.get('http://pte.novasoftware.com.au:3000/api/questionType')
            .then((response) =>{
                dispatch({type:types.FETCH_QUESTIONTYPES_SUCCESS, payload: response.data})
            })
            .catch((err)=>{

            dispatch({type:types.FETCH_QUESTIONTYPES_FAIL, payload: err})
        })

    }
}


//add questions

//delete questions  can be added here later or create a separate file