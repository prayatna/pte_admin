import React from 'react';
import {connect} from 'react-redux';
import {postSpeakingQuestion} from "../actions/crudActions";
import AddFormSpeaking from "../components/Speaking/AddFormSpeaking";


class AddSpeakingQuestion extends React.Component {


    getFormData = (fields) => {
        console.log("App got fields", fields);
        this.props.onAddSpeaking(fields)

    }


    render() {
        const speakingProps = this.props.speakingQuestionsProps

        return (
            <div>
                <h1>Add {speakingProps.speakingTitle} Question</h1>
                <AddFormSpeaking
                    getFormData={fields => this.getFormData(fields)}
                    speakingProps = {speakingProps}

                />
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        formAddSpeaking: state.addSpeaking
    }


}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddSpeaking: (values) => dispatch(postSpeakingQuestion(values))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AddSpeakingQuestion)


