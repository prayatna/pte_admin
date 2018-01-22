import React from 'react';
import PropTypes from 'prop-types'
import { Nav, NavLink, NavItem, Collapse } from 'reactstrap'
import 'font-awesome/css/font-awesome.min.css'
import { Link }from 'react-router-dom'


class MenuList extends React.Component {


    static propTypes = {
        menuItems: PropTypes.array.isRequired,
        toggleSubMenu: PropTypes.func.isRequired,
        collapsed: PropTypes.bool.isRequired
    }


    toggleSubMenu = () => {
        this.props.toggleSubMenu(this.props.collapsed)
    }
    render() {

        const {collapsed, menuItems} = this.props
        const speakingQuestionsTypes = menuItems.filter(question=>question.type === 'speaking')
        const readingQuestionTypes = menuItems.filter(question=>question.type==='reading')

        return (
            <div>
                <p>Practice</p>
                <Nav vertical>
                        <Link to="/">Dashboard</Link>
                    <Link to="/about">About</Link>


                    <NavItem color="secondary"  onClick={this.toggleSubMenu} style={{ marginBottom: '1rem' }}><NavLink href="#">PTE Speaking <i className="fa fa-caret-down"></i></NavLink> </NavItem>
                    <Collapse isOpen={!collapsed}>
                        <NavItem>

                            {speakingQuestionsTypes.map(question =>
                                <NavLink href="#" key={question.idq_type}>{question.q_type}</NavLink>
                            )}
                        </NavItem>
                    </Collapse>

                    <NavItem color="secondary" onClick={this.toggleSubMenu} style={{ marginBottom: '1rem' }}><NavLink href="#">PTE Reading <i className="fa fa-caret-down"></i></NavLink> </NavItem>
                    <Collapse isOpen={!collapsed}>
                        <NavItem>
                            <div>
                            {readingQuestionTypes.map(question =>
                                <NavLink href="#" key={question.idq_type}>{question.q_type}</NavLink>
                            )}

                            </div>
                        </NavItem>
                    </Collapse>

                </Nav>
            </div>
        )
    }
}


export default MenuList;

