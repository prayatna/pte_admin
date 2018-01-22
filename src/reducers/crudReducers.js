import * as actionTypes from '../actions/actionTypes';

const initialState = {
    formItem: {
        fileAttachment: '',
        audioAttachment: '',
        q_no: '',
        text: ''
    },
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
                formItem:{
                fileAttachment: action.payload.fileAttachment,
                audioAttachment: action.payload.audioAttachment,
                q_no: action.payload.q_no,
                text: action.payload.text
                },
                posted: true,
                isPosting: false
            }
    }
    return state
}

export default addSpeaking
