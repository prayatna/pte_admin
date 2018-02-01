import React from 'react';
import {Collapse, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import MenuListsItem from './MenuListsItem';

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
                <NavItem>
                    {/*TODO: change link dynamically. Current state just links to speaking add*/}
                    <Link to="/speaking/add" onClick={this.toggle}>
                        {content.title}    &nbsp;    &nbsp;
                        <i className="fa fa-caret-down"></i>
                    </Link>

                    <Collapse isOpen={this.state.collapse}>
                        <NavItem>
                            {content.itemsInside.map(questionLst => (
                                <MenuListsItem
                                    key={questionLst.idq_type}
                                    passedKey={questionLst.idq_type}
                                    listName={questionLst.q_type}
                                />
                            ))}

                        </NavItem>
                    </Collapse>
                </NavItem>


            </div>
        );
    }
}

export default SubMenuCollapse