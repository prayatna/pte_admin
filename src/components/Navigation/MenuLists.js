import React from 'react';
import PropTypes from 'prop-types'
import 'font-awesome/css/font-awesome.min.css'
import {Link} from 'react-router-dom'
import SubMenuCollapse from './SubMenuCollapse'
import classes from './MenuList.css'
import SideMenuBar from "../../SideMenuBar";



class MenuList extends React.Component {


    static propTypes = {
        menuItems: PropTypes.array.isRequired
    };



    render() {

        const {menuItems} = this.props;
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
console.log(this.props)
        return (
            <div className="SideBar">


                <nav>
                    <Link to="/">Dashboard</Link>
                    <Link to="/about">About</Link>


                    {Object.keys(menuItemTitle).map((index, key) =>
                        <SubMenuCollapse key={key} contents={menuItemTitle[index]} />
                    )}



                </nav>
            </div>
        )
    }
}


export default MenuList;

