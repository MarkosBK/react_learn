import React from "react";
import c from './MessagesArea.module.css'
import { sendMessageActionCreator, updateNewMessageContentActionCreator } from './../../../redux/dialogsReducer';
import Message from "../Message/Message";


const MessagesArea = (props) =>{
    let newMessageContent = React.createRef();
    const onSubmitSendForm = () => {
        props.dispatch(sendMessageActionCreator());
    }
    const onChangeNewMessageContent = () => {
        var content = newMessageContent.current.value;
        props.dispatch(updateNewMessageContentActionCreator(content))
    }

    var messages = props.data.messages.map((item)=>{
        return <Message text={item.text}></Message>
    })

    return(
        <div className={c.area}>
            <div className={c.messages}>
                {messages}
            </div> 
            <div className={c.sendform}>
                <button className={c.sendbutton} onClick={onSubmitSendForm}>Send</button>
                <textarea ref={newMessageContent} onChange={onChangeNewMessageContent} value={props.data.newMessageContent} placeholder='Enter your message' className={c.textarea}></textarea>
            </div>
        </div>
    )
}

export default MessagesArea;