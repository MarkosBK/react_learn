import React from "react";
import c from './Message.module.css'

const Message = (props) =>{
    return(
        <div className={c.messageBlock}>
            <span className={c.message}>
                {props.text}
            </span>
        </div>
    )
}

export default Message;