import React from 'react';
import {connect} from 'react-redux';
import {postSpeakingQuestion} from "../actions/crudActions";
import AddFormSpeaking from "../components/Speaking/AddFormSpeaking";
import {Container, Row, Col, Card, CardHeader, CardBody} from 'reactstrap';

//container which handles Add Question through form.
class AddSpeakingQuestion extends React.Component {


    getFormData = (fields) => {
        console.log("AddSpeakingQuestion got fields", fields);
        this.props.onAddSpeaking(fields)

    }


    render() {
        const speakingProps = this.props.speakingQuestionsProps

        return (
            <Container fluid>
                <Row>
                    <Col xs="12" sm="6">
                        <Card>
                            <CardHeader>Add {speakingProps.speakingTitle}</CardHeader>
                            <CardBody>

                                {/*main form page is rendered here*/}
                                <AddFormSpeaking
                                    getFormData={fields => this.getFormData(fields)}
                                    speakingProps={speakingProps}

                                />
                            </CardBody>

                        </Card>


                    </Col>
                    <Col xs="12" sm="6">
                        <Card>
                            <CardHeader>Details of form</CardHeader>
                            <CardBody> you can add any thing in this section/ may include description of form fields </CardBody>
                        </Card>

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


