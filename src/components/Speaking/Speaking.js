import React, {Component} from 'react';
import AddSpeakingQuestion from '../../containers/AddSpeakingQuestion';
import {Route, Link, withRouter} from 'react-router-dom';
import DisplaySpeakingQuestions from '../../containers/DisplaySpeakingQuestions';
import {Container, Row, Col, Card, CardHeader, CardBody, Button} from 'reactstrap';
import './Speaking.css';

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


// keep info of speaking question type to use later
    getSpeakingQuestionType = () => {
        const match = this.props.match;
        const speakingQuestion = this.props.speakingQuestionsTypes;
        for (let i = 0; i < speakingQuestion.length; i++) {
            if (speakingQuestion[i].idq_type.toString() === match.params.id) {
                this.speakingProps.speakingTitle = speakingQuestion[i].q_type;
                this.speakingProps.speakingId = i + 1;
            }
        }

    }

    render() {
        this.getSpeakingQuestionType();

        //to get the routes working we need match info and location info
        const match = this.props.match;
        const location = this.props.location;

        //TODO: find a better way to use it as a template rather than rendering same thing with just IF condition

        if (!this.state.showAdd) {
            return (
                <div>
                    <Container fluid>
                        <Row>
                            <Col>
                                <h3>Speaking: {this.speakingProps.speakingTitle} </h3>
                            </Col>
                            <Col>
                                <Link to={`${location.pathname}/add`}>
                                    <Button color="info" onClick={this.addQuestionHandler}>ADD Question</Button>
                                </Link>
                            </Col>

                        </Row>
                        <Row>
                        <Col>
                            <Card>
                                <CardHeader tag="h6"> List of Questions</CardHeader>
                                <CardBody>
                                    <DisplaySpeakingQuestions questionTypeId={match.params.id}/>
                                </CardBody>
                            </Card>
                        </Col>
                        </Row>


                        {/*<Route path={`${match.url}/`} component={AddSpeakingQuestion}/>*/}

                    </Container>

                </div>


            );
        }

        else{
            return (

                <div>
                    <Container fluid>
                        <Row>
                            <Col>
                                <h3>Speaking Section</h3>
                            </Col>
                            <Col>

                                {/*Close button for the form*/}
                                <Link to={`${match.url}`}>
                                    <Button color="danger" onClick={this.addQuestionHandler}>X</Button>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {/*TODO: idea: maybe create a backdrop to add a question*/}
                                <Route path={`${match.url}/`}
                                       render={() => <AddSpeakingQuestion
                                           speakingQuestionsProps={this.speakingProps}/>}/>

                            {/*<Route path={`${match.url}/`} component={AddSpeakingQuestion}/>*/}

                            </Col>
                        </Row>
                    </Container>
                </div>


            );
        }

    }


}

export default withRouter(Speaking);