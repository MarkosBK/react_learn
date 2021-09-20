import React from "react";
import c from './Dialogs.module.css'
import Contact from "./Contact/Contact";
import MessagesArea from './MessagesArea/MessagesArea';


const Dialogs = (props) =>{
    var contacts = props.data.contacts.map((item)=>{
        return <Contact username={item.username} avatar={item.avatar} userlogin={item.userlogin}></Contact>
    })

    return(
        <div className={c.content}>
            <div className={c.dialogs}>
                { contacts }
            </div>

            <div className={c.messages}>
                <MessagesArea dispatch={props.dispatch} data={props.data}></MessagesArea>
            </div>
        </div>
        
    )
}

export default Dialogs;