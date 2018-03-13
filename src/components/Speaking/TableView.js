import React from 'react';
import {Table} from 'reactstrap';

const tableView  =  (props) => (

    <Table hover responsive>
        <thead>
        <tr>
            <th>No.</th>
            <th>Question</th>
            <th>Timer</th>
            <th>Count Down</th>
            <th>Image</th>
            <th>Sample Answer</th>
        </tr>
        </thead>
        <tbody>
        {props.questions.map(questionLst => (
            <tr key = {questionLst.idspeaking}>
                <th scope="row">{questionLst.q_no}</th>
                <td>{questionLst.text}</td>
                <td>{questionLst.timer}</td>
                <td>{questionLst.count_down}</td>
                <td>{questionLst.file}</td>
                <td>{questionLst.sample_answer}</td>
            </tr>
        ))}
        </tbody>
    </Table>
);

export default tableView;