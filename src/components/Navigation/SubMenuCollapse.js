import React, {Component} from 'react';
import {Collapse, NavItem} from 'reactstrap';
import MenuListsItem from './MenuListsItem';
import './SubMenuCollapse.css';
import 'font-awesome/css/font-awesome.min.css';


//Collapsible component for sidebar

class SubMenuCollapse extends Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {collapse: false};
    }

//Used a toggle from Reactstrap

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        const content = this.props.contents;

        return (
            <div>
                <NavItem onClick={this.toggle} className="item">
                    {/*/!*<Link to={`/${content.type}/`}>*!/*/}
                    <a href="#">{content.title}</a>   &nbsp;    &nbsp;
                    <i className="fa fa-caret-down" style={{color:"darkgrey"}}></i>
                    {/*/!*</Link>*!/*/}
                </NavItem>

                {/*Collapsible items are toggled from here*/}
                <Collapse isOpen={this.state.collapse}>
                    <ul >
                        {content.itemsInside.map(questionLst => (
                            <MenuListsItem
                                key={questionLst.idq_type}
                                passedKey={questionLst.idq_type}
                                listName={questionLst.q_type}
                                questionType={questionLst.type}
                                match={this.props.match}
                            />
                        ))}

                    </ul>
                </Collapse>


            </div>
        );
    }
}

export default SubMenuCollapse