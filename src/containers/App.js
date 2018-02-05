import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import MenuList from "../components/Navigation/MenuLists";
import {fetchMenuItems} from "../actions/menuAction";

import {Container, Row, Col} from 'reactstrap';
import Header from "../components/Navigation/Header"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Dashboard from "../components/Dashboard";
import About from "../components/About";
// import AddSpeakingQuestion from "./AddSpeakingQuestion";
import Speaking from '../components/Speaking/Speaking';
import footer from 'App.css';

class App extends Component {

    componentDidMount() {
        this.props.fetchMenuItems()

    }

    render() {
        const {menuItems} = this.props;


        return (

            <Router>
                <div>
                    <Header/>
                    <div>
                        <div>
                            <Col xs="2">

                                <MenuList menuItems={menuItems.items}/>

                            </Col>
                            <Col>

                                <Route exact path="/" component={Dashboard}/>
                                <Route path="/about" component={About}/>
                                {/*<Route path="/speaking/add" component={AddSpeakingQuestion}/>*/}
                                <Route path="/speaking/" component = {Speaking}/>

                            </Col>

                        </div>
                    </div>
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