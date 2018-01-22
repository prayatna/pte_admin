import React from 'react';
import { ListGroupItem, Collapse, Button } from 'reactstrap';
import PropTypes from "prop-types";

class SubMenuCollapse extends React.Component {

    static propTypes = {
        menuItems: PropTypes.object.isRequired,
        toggleSubMenu: PropTypes.func.isRequired,
        collapsed: PropTypes.bool.isRequired
    }


    toggleSubMenu = () => {
        this.props.toggleSubMenu(this.props.collapsed)
    }


    render() {
        const {menuItems, collapsed } = this.props;

        return (
            <ListGroupItem>
                <div>
                    <Button onClick={this.toggleSubMenu}>
                        <strong>{menuItems.q_type}</strong>
                    </Button>
                    <Collapse isOpen={collapsed}>{menuItems.type}</Collapse>
                </div>
            </ListGroupItem>
        );
    }
}

export default SubMenuCollapse