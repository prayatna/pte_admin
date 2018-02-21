import React, {Component} from 'react';
import AddSpeakingQuestion from '../../containers/AddSpeakingQuestion';
import {Route, Link, withRouter} from 'react-router-dom';
import DisplaySpeakingQuestions from '../../containers/DisplaySpeakingQuestions';


class Speaking extends Component {

    state = {
        showAdd: false,
    };

    speakingProps = {
        speakingTitle: '',
        speakingId: ''
    }

    addQuestionHandler = () => {
        this.setState({
            showAdd: !this.state.showAdd
        })

    };

    getSpeakingQuestionType = () => {
        const match = this.props.match;
        const speakingQuestion = this.props.speakingQuestionsTypes;
        for (let i = 0; i < speakingQuestion.length; i++) {
            if (speakingQuestion[i].idq_type.toString() === match.params.id) {
                    this.speakingProps.speakingTitle = speakingQuestion[i].q_type;
                    this.speakingProps.speakingId = i+1;

            }
        }
    }

    render() {
        this.getSpeakingQuestionType();
        const match = this.props.match;
        const location = this.props.location;

        if (!this.state.showAdd) {
            return (
                <div>
                    <div>
                        <h1>Speaking: {this.speakingProps.speakingTitle} </h1>
                        <Link to={`${location.pathname}/add`}>
                            <button onClick={this.addQuestionHandler}>ADD Question</button>
                        </Link>
                        <div>
                            <DisplaySpeakingQuestions questionTypeId = {this.speakingProps.speakingId}/>

                        </div>
                        <div>Description of a question [Detail]</div>


                        {/*<Route path={`${match.url}/`} component={AddSpeakingQuestion}/>*/}
                    </div>

                </div>


            );
        }

        if(this.state.showAdd){
            return (
                <div>
                    <div>
                        <h1>Speaking Section</h1>
                        <Link to={`${match.url}`}>
                            <button onClick={this.addQuestionHandler}>ADD Question</button>
                        </Link>
                        {/*<Route path={`${match.url}/`} component={AddSpeakingQuestion}/>*/}
                        <Route path={`${match.url}/`} render={()=><AddSpeakingQuestion speakingQuestionsProps= {this.speakingProps}/>}/>

                    </div>

                </div>


            );
        }

    }


}

export default withRouter(Speaking);