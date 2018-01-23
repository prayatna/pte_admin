import React from 'react';
import {NavLink} from 'reactstrap'


class MenuListsItem extends React.Component {
    render() {
        return (
            <div>
                <NavLink href="#" key={this.props.passedKey}>
                    {this.props.listName}
                </NavLink>
            </div>
        )
    }


}


export default MenuListsItem;