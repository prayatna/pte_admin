import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import MenuList from "../components/Navigation/MenuLists";
import {fetchMenuItems} from "../actions/menuAction";

import {Container, Row, Col} from 'reactstrap';
import Header from "../components/Navigation/Header"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from "../components/Dashboard";
import About from "../components/About";
// import AddSpeakingQuestion from "./AddSpeakingQuestion";
import Speaking from '../components/Speaking/Speaking';

class App extends Component {

    componentDidMount() {
        this.props.fetchMenuItems()

    }

    render() {
        const {menuItems} = this.props;
        const speakingQuestionsTypes = menuItems.items.filter(question => question.type === 'speaking')
        return (

            <Router>
                <div>
                    <Header/>
                    <Container fluid>
                        <Row>
                            <Col xs="2" className="SideBar">
                                <MenuList menuItems={menuItems.items}/>
                            </Col>
                            <Col>
                                <Switch>
                                    <Route exact path="/" component={Dashboard}/>
                                    <Route path="/about" component={About}/>
                                    <Route path="/speaking" component={Speaking}/>
                                    {/*<Route path="/speaking" render={()=><Speaking speakingQuestionsTypes= {speakingQuestionsTypes}/>}/>*/}

                                </Switch>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </Router>
        )
    }
}

App.propTypes = {
    menuItems: PropTypes.object.isRequired,

}

function mapStateToProps(state) {
    const {menuItems} = state
    return {
        menuItems: menuItems,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchMenuItems: () => {
            dispatch(fetchMenuItems())
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);