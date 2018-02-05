import React from 'react';
import {Link} from 'react-router-dom';


const menuListsItem  =  (props) => (
    <li>
        <Link to = "/speaking/" key={props.passedKey}>{props.listName}</Link>
    </li>
);

export default menuListsItem;