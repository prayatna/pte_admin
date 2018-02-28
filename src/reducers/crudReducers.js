import * as actionTypes from '../actions/actionTypes';

const initialState = {
    formItem: {
        file: '',
        q_no: '',
        text: '',
        timer: '',
        count_down: ''
    },
    // formItem: [],
    isPosting: false,
    posted: false,
    isFetching: false,
    fetched: false,
    error: ''

}

const speakingInitialState = {
    isFetching: false,
    fetched: false,
    speakingQuestions: [],
    error: ''
}

export function addSpeaking(state = initialState, action) {

    switch (action.type) {
        case actionTypes.POST_SPEAKING:
            return {
                ...state,
                isPosting: true
            }
        case actionTypes.POST_SPEAKING_SUCCESS:

            return {
                ...state,
                formItem: {
                    fileAttachment: action.payload.file,
                    q_no: action.payload.q_no,
                    text: action.payload.text,
                    timer: action.payload.timer,
                    count_down: action.payload.count_down
                },
                // formItem: action.payload,
                posted: true,
                isPosting: false
            }
        default:
            return state
    }

}


export function speakingQuestions(state = speakingInitialState, action) {

    switch (action.type) {

        case actionTypes.GET_SPEAKING_RA:
            return {
                ...state,
                isFetching: true,
            }

        case actionTypes.GET_SPEAKING_RA_SUCCESS:
            return {
                ...state,
                fetched: true,
                isFetching: false,
                speakingQuestions: action.payload,
            }
        case actionTypes.GET_SPEAKING_RA_FAIL:
            return {
                ...state,
                fetched: false,
                error: action.payload
            }

        default:
            return state
    }
}
