import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import MenuList from "../components/MenuLists";
import {fetchMenuItems, toggleSubMenu} from "../actions/menuAction";

import {Container, Row, Col} from 'reactstrap';
import Header from "../components/Header"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Dashboard from "../components/Dashboard";
import About from "../components/About";
import AddSpeakingQuestion from "./AddSpeakingQuestion";
// import addSpeaking from "../reducers/crudReducers";


class App extends Component {

    componentDidMount() {
        this.props.fetchMenuItems()

    }



    render() {
        const {toggleSubMenu, menuItems, subMenuCollapse} = this.props


        return (

            <Router>
                <div>
                    <Header/>
                    <Container fluid>
                        <Row>
                            <Col xs="2">

                                <MenuList menuItems={menuItems.items}
                                toggleSubMenu={() => toggleSubMenu(subMenuCollapse.collapsed)}
                                collapsed={subMenuCollapse.collapsed}/>

                            </Col>
                            <Col>
                                {/*<ContentMainArea/>*/}
                                {/*<AddSpeakingQuestion/>*/}

                {/*TODO iterata a component and enable toggle*/}
                                {/*{Object.keys(menuItems.items).map((key, index) =>*/}
                                    {/*<SubMenuCollapse key={index} menuItems={menuItems.items[key]}*/}
                                                     {/*toggleSubMenu={() => toggleSubMenu(subMenuCollapse.collapsed)}*/}
                                                     {/*collapsed={subMenuCollapse.collapsed === menuItems.items[key]}/>*/}
                                {/*)}*/}
                                <Route exact path="/" component={Dashboard}/>
                                <Route path="/about" component={About}/>
                                <Route path = "/speaking/add" component = {AddSpeakingQuestion}/>

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
    toggleSubMenu: PropTypes.func.isRequired,

}

function mapStateToProps(state) {
    const {menuItems, subMenuCollapse} = state
    return {
        menuItems: menuItems,
        subMenuCollapse: subMenuCollapse,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleSubMenu: (collapsed) => {
            dispatch(toggleSubMenu(collapsed))
        },
        fetchMenuItems: () => {
            dispatch(fetchMenuItems())
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);