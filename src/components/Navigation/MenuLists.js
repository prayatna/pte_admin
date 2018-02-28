import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, withRouter} from 'react-router-dom';
import SubMenuCollapse from './SubMenuCollapse';
import {Nav, NavItem} from 'reactstrap';
import './MenuList.css';


class MenuList extends React.Component {

    static propTypes = {
        menuItems: PropTypes.array.isRequired
    };

    render() {

        const {menuItems} = this.props;
        const speakingQuestionsTypes = menuItems.filter(question => question.type === 'speaking')
        const readingQuestionTypes = menuItems.filter(question => question.type === 'reading')

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
            <div className= "side-nav-container">
                <Nav vertical>
                    <NavItem ><NavLink to="/">Dashboard</NavLink></NavItem>

                    <NavItem ><NavLink to="/about">About</NavLink></NavItem>


                    {Object.keys(menuItemTitle).map((index, key) =>
                        <SubMenuCollapse
                            key={key}
                            contents={menuItemTitle[index]}

                        />
                    )}


                </Nav>
            </div>


        )
    }
}


export default withRouter(MenuList);

