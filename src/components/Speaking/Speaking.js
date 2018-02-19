import React, {Component} from 'react';
import AddSpeakingQuestion from '../../containers/AddSpeakingQuestion';
import { Route, Link} from 'react-router-dom';


class Speaking extends Component {

    state = {
        showAdd: false
    };

    addQuestionHandler = () => {
        this.setState({
            showAdd: !this.state.showAdd
        })

    };

    render() {
        // const speaking = this.props.speakingQuestionsTypes;
        const match = this.props.match;
        const location = this.props.location;


        // console.log(this.props, "inside speaking component");
        if (this.state.showAdd) {
            return (<div>
                    <div>
                        <h1>Speaking: RA/RS/RL/ASQ </h1>
                        <Route path={`${match.url}/:sectionType`} component={AddSpeakingQuestion}/>
                        {/*<AddSpeakingQuestion/>*/}
                    </div>
                </div>
            );
        }
        else if(!this.state.showAdd && location.pathname !== match.url) {
            return (
                <div>
                    <h1>Speaking: RA/RS/RL/ASQ </h1>
                    <Link to={`${location.pathname}/add`}>
                        <button onClick={this.addQuestionHandler}>ADD Question</button>
                    </Link>

                    <div>List of Questions[readaloud/repeat sentence/ retell lecture/ answer short question]</div>
                    <div>Description of a question [Detail]</div>
                </div>
            );

        }

        else{
            return(
                <div>
                    <div>
                        <h1>Speaking: RA/RS/RL/ASQ </h1>

                    </div>
                </div>
            );
        }

    }


}

export default Speaking;