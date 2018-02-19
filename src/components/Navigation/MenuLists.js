import React from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom';
import SubMenuCollapse from './SubMenuCollapse';
import {Nav} from 'reactstrap';
import {withRouter} from 'react-router-dom';
// import SideBar from './MenuList.css';


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
                title: 'PTE Speaking',
                type:'speaking',
                itemsInside: speakingQuestionsTypes
            },
            pteReading: {
                title: 'PTE Reading',
                type:'reading',
                itemsInside: readingQuestionTypes
            },
            pteWriting: {
                title: 'PTE Writing',
                type:'writing',
                itemsInside: readingQuestionTypes
            }
        }

        return (
            <div>

                <Nav vertical>
                    <Link to="/">Dashboard</Link>
                    <Link to="/about">About</Link>

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

