import React from 'react';
import {NavLink} from 'react-router-dom';
import './MenuListItem.css';

const menuListsItem = (props) => (

    //TODO: style the selected link as an active link
    <li className="sub-item">

        {/*<Link to = "/speaking" key={props.passedKey}>{props.listName}</Link>*/}
        <NavLink to ={`/${props.questionType}/${props.passedKey}`} key = {props.passedKey}>{props.listName}</NavLink>
        {/*{console.log(props,"inside menulist check router")}*/}
    </li>




);

export default menuListsItem;