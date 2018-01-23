import axios from 'axios'
import * as types from './actionTypes';

export function postSpeakingQuestion(data) {
    console.log(data, " this is ACtion " + data.q_no)
    return function (dispatch) {
        dispatch({type: types.POST_SPEAKING})

        axios.post('http://pte.novasoftware.com.au:3000/api/speaking', data)
            .then((response) => {
                console.log(response);
                dispatch({type: types.POST_SPEAKING_SUCCESS,
                payload: data})
            })
            .catch((err) => {

                dispatch({type: types.FETCH_QUESTIONTYPES_FAIL, payload: err})
            })

    }
}