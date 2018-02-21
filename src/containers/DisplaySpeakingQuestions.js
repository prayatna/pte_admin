import React, { Component } from 'react';
import { getSpeakingQuestion } from '../actions/crudActions';
import { connect } from 'react-redux';
import TableView from '../components/TableView';
import PropTypes from "prop-types";

class DisplaySpeakingQuestions extends Component {


    componentDidMount(){
        this.props.fetchSpeakingQuestion(this.props.questionTypeId);
    }

    render(){
        console.log(this.props);
        const state = this.props.speakingQuestions;
        const questions = this.props.speakingQuestions.speakingQuestions;

        if(state.isFetching && !state.fetched){
            return (
                <div>Loading</div>
            )
        }
        else{
            return(
                <div>
                    <TableView
                    questions = {questions}
                    />
                </div>
            );
        }


    }
}


DisplaySpeakingQuestions.propTypes = {
    speakingQuestions: PropTypes.object.isRequired,

}

function mapStateToProps(state) {
    const {speakingQuestions} = state
    return {
        speakingQuestions: speakingQuestions,
    }
}



function mapDispatchToProps(dispatch) {
    return {
        fetchSpeakingQuestion: (id) => {
            dispatch(getSpeakingQuestion(id))
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(DisplaySpeakingQuestions);