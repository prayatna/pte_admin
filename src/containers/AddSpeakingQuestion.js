import React from 'react';
import {connect} from 'react-redux';
import {postSpeakingQuestion} from "../actions/crudActions";
import AddFormSpeaking from "../components/Speaking/AddFormSpeaking";
import {Container, Row, Col, Card, CardHeader, CardBody} from 'reactstrap';


class AddSpeakingQuestion extends React.Component {


    getFormData = (fields) => {
        console.log("App got fields", fields);
        this.props.onAddSpeaking(fields)

    }


    render() {
        const speakingProps = this.props.speakingQuestionsProps

        return (
            <Container fluid>
                <Row>
                    <h1>Add {speakingProps.speakingTitle} Question</h1>
                    <Col xs="12" sm="6">
                        <Card>
                            <CardHeader tag="h3">Add {speakingProps.speakingTitle}</CardHeader>
                            <CardBody>
                               test
                            </CardBody>

                        </Card>
                        <AddFormSpeaking
                            getFormData={fields => this.getFormData(fields)}
                            speakingProps={speakingProps}

                        />

                    </Col>
                    <Col xs="12" sm="6">
                        Details of form
                    </Col>

                </Row>

            </Container>

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


