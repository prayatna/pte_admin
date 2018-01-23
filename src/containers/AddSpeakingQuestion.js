import React from 'react';
import {connect} from 'react-redux';
import { postSpeakingQuestion } from "../actions/crudActions";
import AddFormSpeaking from "../components/AddFormSpeaking";


class AddSpeakingQuestion extends React.Component {

getFormData = (fields) =>{
    console.log("App got fields", fields);
    this.props.onAddSpeaking(fields)

}

    render() {

        return (
            <div>
                <h1>Add Speaking Question</h1>
                <AddFormSpeaking getFormData = {fields => this.getFormData(fields)}/>
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
        // onAddSpeaking: () => dispatch(postSpeakingQuestion(this.props.formAddSpeaking))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AddSpeakingQuestion)


