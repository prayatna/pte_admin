import React from 'react';
import {Navbar} from 'react-bootstrap';


const header = () => (
        <Navbar fixedTop collapseOnSelect fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">PTE</a>
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
);

export default header;

