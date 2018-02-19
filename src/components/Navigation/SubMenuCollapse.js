import React from 'react';
import {Collapse} from 'reactstrap';
import MenuListsItem from './MenuListsItem';
import Item from './SubMenuCollapse.css';
import {Link} from 'react-router-dom';

class SubMenuCollapse extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {collapse: false};
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        const content = this.props.contents;

        return (
            <div>
                {/*TODO: change link dynamically. Current state just links to speaking add*/}
                <li onClick={this.toggle} className="Item">
                    <Link to={`/${content.type}`}>
                        {content.title}    &nbsp;    &nbsp;
                        <i className="fa fa-caret-down"></i>
                    </Link>
                </li>

                <Collapse isOpen={this.state.collapse}>
                    <ul className="Item">
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