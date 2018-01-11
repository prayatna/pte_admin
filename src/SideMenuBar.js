import React from 'react';
import './SideMenuBar.css';
import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';


class SideMenuBar extends React.Component {


    render() {
        return (
            <div>

                <div className="w3-sidebar w3-bar-block w3-blue-grey w3-card">
                    <Link className="w3-bar-item w3-button" exact to="/"> Dashboard</Link>
                    <button className="w3-button w3-block w3-left-align" data-toggle="collapse"
                            data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        PTE Materials &nbsp;&nbsp;&nbsp;<i className="fa fa-caret-down"></i>
                    </button>
                    <div id="collapseExample" className="collapse">
                        <Link to="/speaking" className="w3-bar-item w3-button">Speaking</Link>
                        <Link to="/reading" className="w3-bar-item w3-button">Reading</Link>
                        <Link to="/writing" className="w3-bar-item w3-button">Writing</Link>
                        <Link to="/listening" className="w3-bar-item w3-button">Listening</Link>
                    </div>

                    <button className="w3-button w3-block w3-left-align" data-toggle="collapse"
                            data-target="#collapseSpeaking" aria-expanded="false" aria-controls="collapseExample">
                        PTE口语 Speaking&nbsp;&nbsp;&nbsp;<i className="fa fa-caret-down"></i>
                    </button>
                    <div id="collapseSpeaking" className="collapse">
                        <Link to="/speaking" className="w3-bar-item w3-button">Read Aloud (RA)</Link>
                        <Link to="/reading" className="w3-bar-item w3-button">Repeat Sentence (RS)</Link>
                        <Link to="/writing" className="w3-bar-item w3-button">Describe Image (DI)</Link>
                        <Link to="/listening" className="w3-bar-item w3-button">Retell Lecture (RL)</Link>
                        <Link to="/listening" className="w3-bar-item w3-button">Answer Short Questions(ASQ)</Link>

                    </div>

                    <button className="w3-button w3-block w3-left-align" data-toggle="collapse"
                            data-target="#collapseWriting" aria-expanded="false" aria-controls="collapseExample">
                        PTE写作 Writing&nbsp;&nbsp;&nbsp;<i className="fa fa-caret-down"></i>
                    </button>
                    <div id="collapseWriting" className="collapse">
                        <Link to="/writing" className="w3-bar-item w3-button">Summarise Written Text(SWT)</Link>
                        <Link to="/reading" className="w3-bar-item w3-button">Write Essay (WE)</Link>
                    </div>

                    <button className="w3-button w3-block w3-left-align" data-toggle="collapse"
                            data-target="#collapseReading" aria-expanded="false" aria-controls="collapseExample">
                        PTE阅读 Reading&nbsp;&nbsp;&nbsp;<i className="fa fa-caret-down"></i>
                    </button>
                    <div id="collapseReading" className="collapse">
                        <Link to="/speaking" className="w3-bar-item w3-button">Reorder Paragraphs (RP)</Link>
                        <Link to="/reading" className="w3-bar-item w3-button">Fill in the blanks (FIB-R)</Link>
                    </div>

                    <a href="#" className="w3-bar-item w3-button">Settings</a>

                </div>


            </div>


        );
    }
}

export default SideMenuBar