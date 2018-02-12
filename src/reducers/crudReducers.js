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

}

const addSpeaking = (state = initialState, action) => {

    switch (action.types) {
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

export default addSpeaking
