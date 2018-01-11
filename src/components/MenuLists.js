import React from 'react';
import PropTypes from 'prop-types'
import {Nav, NavLink, NavItem} from 'reactstrap'


const MenuList = ({menuItems}) => {
    return (


        <div>
            <p>List Based</p>
            <Nav vertical>
                <NavItem>
                    <NavLink href="#">Another Link</NavLink>
                </NavItem>

                {menuItems.map(question =>
                    <NavLink href="#" key={question.idq_type}>{question.q_type}</NavLink>
                )}

            </Nav>

        </div>
    );
};

MenuList.propTypes = {
    menuItems: PropTypes.array.isRequired
};

export default MenuList;

