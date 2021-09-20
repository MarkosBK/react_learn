import React from "react";
import c from './Contact.module.css'
import { NavLink } from 'react-router-dom';


const Contact = (props) =>{
    const ava = {backgroundImage: 'url(' + props.avatar + ')'}
    return(
        <NavLink className={c.dialog} to={"/dialogs/" + props.userlogin}>
            <div className={c.avatar} style={ava}></div>
            <div className={c.info}>
                <div className={c.name}>{props.username}</div>
                <div className={c.lastMessage}>Hello friend, how are you?Hello friend, how are you?Hello friend, how are you?</div>
            </div>
        </NavLink>
    )
}

export default Contact;