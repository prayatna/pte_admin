import React, {Component} from 'react';
import AddSpeakingQuestion from '../../containers/AddSpeakingQuestion';



class Speaking extends Component {

    state = {
        showAdd: false
    };
    addQuestionHandler = () => {
        this.setState({
            showAdd: !this.state.showAdd
        })

    }
speaking = this.props.speakingQuestionsTypes;

    render() {
        if (this.state.showAdd) {

            return (<div>
                    <div>
                        <h1>Speaking: RA/RS/RL/ASQ </h1>
                        <AddSpeakingQuestion/>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <h1>Speaking: RA/RS/RL/ASQ </h1>
                    <button onClick={this.addQuestionHandler}>ADD Question</button>
                    <div>List of Questions[readaloud/repeat sentence/ retell lecture/ answer short question]</div>
                    <div>Description of a question [Detail]</div>
                </div>
            );


        }


    }


}

export default Speaking;