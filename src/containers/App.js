import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import MenuList from "../components/Navigation/MenuLists";
import {fetchMenuItems} from "../actions/menuAction";

import {Grid, Col, Row} from 'react-bootstrap'
import Header from "../components/Navigation/Header"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from "../components/Dashboard";
import About from "../components/About";
// import AddSpeakingQuestion from "./AddSpeakingQuestion";
import Speaking from '../components/Speaking/Speaking';
import './App.css';

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
                    <Grid fluid style={{paddingTop: "50px"}}>

                        <Row>
                        <Col xs={6} md={2} style={{padding: "0px"}}>
                            <MenuList menuItems={menuItems.items}/>
                        </Col>

                        <Col xs={6} md={10}>
                            <Switch>
                                <Route exact path="/" component={Dashboard}/>
                                <Route path="/about" component={About}/>
                                {/*<Route path="/speaking" component={Speaking}/>*/}
                                <Route path="/speaking/:id"
                                       render={() => <Speaking speakingQuestionsTypes={speakingQuestionsTypes}/>}/>
                            </Switch>
                        </Col>
                        </Row>
                    </Grid>

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