import React from 'react';
import {Link} from 'react-router-dom';
const menuListsItem  =  (props) => (

    <li>

        {/*<Link to = "/speaking" key={props.passedKey}>{props.listName}</Link>*/}
        <Link to ={`/${props.questionType}/${props.passedKey}`} key = {props.passedKey}>{props.listName}</Link>
        {/*{console.log(props,"inside menulist check router")}*/}
    </li>


);

export default menuListsItem;