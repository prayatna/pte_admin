import React, {Component} from 'react';
import {Form, FormGroup, Input, Label, Button, Col} from 'reactstrap'


class AddFormSpeaking extends Component {
    state = {
        file: '',
        q_no: '',
        count_down: '',
        timer: '',
        text: '',
        q_type_idq_type: '1'
    }


    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    fileChange = (e) => {
        const file = e.target.files[0];
        this.setState({
            file: file
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.getFormData(this.state);

        this.setState({
            file: '',
            q_no: '',
            count_down: '',
            timer: '',
            text: '',
            q_type_idq_type:''

        });
    };


    render() {
        return (
            <div>

                <Form encType="multipart/form-data">
                    <FormGroup>
                        <Label for="q_type_idq_type">Read Aloud (RA)</Label>
                        <Input type="text"
                               name="q_type_idq_type"
                               id="q_type_idq_type"
                               placeholder="Read Aloud"
                               defaultValue={this.state.q_type_idq_type}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="fileAttachment">File Attachment</Label>
                        <Input type="file"
                               name="file"
                               id="fileAttachment"
                               placeholder="with a placeholder"
                                onChange={e => this.fileChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="q_no">Question No</Label>
                        <Input type="text"
                               name="q_no"
                               id="q_no"
                               placeholder="question no"
                               value={this.state.q_no} onChange={e => this.change(e)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="timer">Time</Label>
                        <Input type="text"
                               name="timer"
                               id="timer"
                               placeholder="timer "
                               value={this.state.timer} onChange={e => this.change(e)}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="q_no">Count Down</Label>
                        <Input type="text"
                               name="count_down"
                               id="count_down"
                               placeholder="count donw "
                               value={this.state.count_down} onChange={e => this.change(e)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="text">Question Text</Label>

                        <Input type="text"
                               name="text" id="text"
                               placeholder="Text "
                               value={this.state.text}
                               onChange={e => this.change(e)}/>
                    </FormGroup>
                    <FormGroup check row>
                        <Col>
                            <Button onClick={(e) => this.onSubmit(e)} type="submit" color="success">Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}


export default AddFormSpeaking;

