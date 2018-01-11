import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import MenuList from "../components/MenuLists";
import {fetchMenuItems} from "../actions/menuAction";
import {Container, Row, Col} from 'reactstrap';
import Header from "../components/Header"
import ContentMainArea from "../components/ContentMainArea"


class App extends Component {

    componentDidMount() {
        this.props.fetchMenuItems()
    }

    render() {
        return (
            <div>
                <Header/>
                <Container fluid>
                    <Row>
                        <MenuList menuItems={this.props.menuItems.items}/>
                        <ContentMainArea/>
                    </Row>
                </Container>
            </div>
        )
    }
}

App.propTypes = {
    menuItems: PropTypes.object.isRequired

}

function mapStateToProps(state) {
    const {menuItems} = state
    return {
        menuItems: menuItems
    }
}


export default connect(mapStateToProps, {fetchMenuItems})(App);