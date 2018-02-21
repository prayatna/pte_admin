import axios from 'axios'
import * as types from './actionTypes';

//show speaking question
export function getSpeakingQuestion(questionType) {
    return function (dispatch) {
        dispatch({type: types.GET_SPEAKING_RA})

        axios.get('http://pte.novasoftware.com.au:3000/api1/speaking/' + questionType)
            .then((response) => {
                console.log(response);
                dispatch({
                    type: types.GET_SPEAKING_RA_SUCCESS,
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: types.GET_SPEAKING_RA_FAIL,
                    payload: err
                })
            })
    }
}


//add speaking questions
export function postSpeakingQuestion(data) {
    return function (dispatch) {
        dispatch({type: types.POST_SPEAKING})

        axios.post('http://pte.novasoftware.com.au:3000/api/speaking', data)
            .then((response) => {
                console.log(response);
                dispatch({
                    type: types.POST_SPEAKING_SUCCESS,
                    payload: data
                })
            })
            .catch((err) => {

                dispatch({type: types.FETCH_QUESTIONTYPES_FAIL, payload: err})
            })

    }
}


//delete or edit questions  can be added here later or create a separate file