import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, withRouter} from 'react-router-dom';
import SubMenuCollapse from './SubMenuCollapse';
import {Nav, NavItem, Col} from 'reactstrap';
import './MenuList.css';
import 'font-awesome/css/font-awesome.min.css';


class MenuList extends React.Component {

    static propTypes = {
        menuItems: PropTypes.array.isRequired
    };

    render() {

        const {menuItems} = this.props;
        const speakingQuestionsTypes = menuItems.filter(question => question.type === 'speaking')
        const readingQuestionTypes = menuItems.filter(question => question.type === 'reading')

        //Titles are not in the backend so created an object with the necessary details to show up in the side menu
        const menuItemTitle = {
            pteSpeaking: {
                id: 1,
                title: 'PTE Speaking',
                type: 'speaking',
                itemsInside: speakingQuestionsTypes
            },
            pteReading: {
                id: 2,
                title: 'PTE Reading',
                type: 'reading',
                itemsInside: readingQuestionTypes
            },
            pteWriting: {
                id: 3,
                title: 'PTE Writing',
                type: 'writing',
                itemsInside: readingQuestionTypes
            }
        }


        return (
            // Side Menu
            <Col md="12" className="side-nav-container" style={{padding:"0px"}}>
                <Nav vertical >
                    <NavItem ><NavLink to="/"><i className="fa fa-tachometer" style={{color:"darkgrey"}}></i> Dashboard</NavLink></NavItem>

                    <NavItem ><NavLink to="/about">About</NavLink></NavItem>

                    {/*displaying objects with titles*/}
                    {Object.keys(menuItemTitle).map((index, key) =>
                        <SubMenuCollapse
                            key={key}
                            contents={menuItemTitle[index]}

                        />
                    )}


                </Nav>
            </Col>


        )
    }
}


export default withRouter(MenuList);

