import React from 'react';
import PropTypes from 'prop-types'
import {Nav, NavItem} from 'reactstrap'
import 'font-awesome/css/font-awesome.min.css'
import {Link} from 'react-router-dom'
import SubMenuCollapse from './SubMenuCollapse'



class MenuList extends React.Component {


    static propTypes = {
        menuItems: PropTypes.array.isRequired,
        toggleSubMenu: PropTypes.func.isRequired
    }



    render() {

        const {menuItems} = this.props
        const speakingQuestionsTypes = menuItems.filter(question => question.type === 'speaking')
        const readingQuestionTypes = menuItems.filter(question => question.type === 'reading')

        const menuItemTitle ={
            pteSpeaking:{
                title: 'PTE Speaking',
                itemsInside: speakingQuestionsTypes
            },
            pteReading: {
                title: 'PTE Reading',
                itemsInside: readingQuestionTypes
            },
            pteWriting: {
                title: 'PTE Writing',
                itemsInside: readingQuestionTypes
            }
        }

        return (
            <div>

                <p>Practice</p>
                <Nav vertical>
                    <Link to="/">Dashboard</Link>
                    <Link to="/about">About</Link>

                    <NavItem>
                    {Object.keys(menuItemTitle).map((index, key) =>
                        <SubMenuCollapse key={key} contents={menuItemTitle[index]} />
                    )}

                    </NavItem>

                </Nav>
            </div>
        )
    }
}


export default MenuList;

