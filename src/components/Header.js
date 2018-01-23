import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

export default class Header extends React.Component {

    render() {
        return (
            <div>
                <Navbar color = "faded" light  >
                    <NavbarBrand href="/" className="mr-auto">PTE</NavbarBrand>
                </Navbar>
            </div>
        );
    }
}