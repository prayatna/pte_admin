import React, {Component} from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

//form component

// TODO: pass form data through Redux

class AddFormSpeaking extends Component {
    state = {
        file: '',
        q_no: '',
        count_down: '',
        timer: '',
        text: '',
        q_type_idq_type: this.props.speakingProps.speakingId,
        sample_answer: '',
        speakingId: '',
        speakingTitle: ''
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    fileChange = (e) => {

        for (let size = 0; size < e.target.files.length; size++) {
            console.log('Selected file:', e.target.files[size]);
            let file = e.target.files[size];
            console.log("uploading screenshot file...", file);
            this.setState({
                [e.target.name]: e.target.files[size]
            })
            // Do necessary request to upload here.......

        }

    }

    onSubmit = (e) => {

        //NOTE: no any confirmation is shown if the form has been succeffuly submitted.
        // just used console.log to see if it was successful

        //TODO: after form submit redirect to previous page/ list of questions page

        console.log(e);
        e.preventDefault();
        console.log(this.state);

        //always append form data by creating a new FormData else the File upload feature won;t work properly
        let data = new FormData();
        data.append('file', this.state.file);
        data.append('q_no', this.state.q_no);
        data.append('count_down', this.state.count_down);
        data.append('timer', this.state.timer);
        data.append('text', this.state.text);
        data.append('q_type_idq_type', this.state.q_type_idq_type);
        data.append('file', this.state.sample_answer);

        console.log("this is after new form data", data.values());
        this.props.getFormData(data);

        this.setState({
            file: '',
            q_no: '',
            count_down: '',
            timer: '',
            text: '',
            q_type_idq_type: '',
            sample_answer: ''

        });
    };


    render() {
        console.log(this.props.speakingProps.speakingTitle);

        //TODO: Input Validation
        return (
            <div>

                <Form encType="multipart/form-data">
                    <FormGroup>

                        <Label for="q_type_idq_type">{this.props.speakingProps.speakingTitle}</Label>
                        <Input plaintext
                               name="q_type_idq_type"
                               id="q_type_idq_type"
                               defaultValue={this.state.q_type_idq_type}>
                            Id: {this.state.q_type_idq_type}
                        </Input>
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
                               placeholder="count down "
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

                    <FormGroup>
                        <Label for="sampleAnswer">Sample Answer Attachment</Label>
                        <Input type="file"
                               name="sample_answer"
                               id="sampleAnswer"
                               placeholder="Sample Answer"
                               onChange={e => this.fileChange(e)}
                        />
                    </FormGroup>

                    <FormGroup check row>
                        <Button onClick={(e) => this.onSubmit(e)} type="submit" color="success">Submit</Button>
                    </FormGroup>
                </Form>


            </div>
        )
    }
}


export default AddFormSpeaking;

