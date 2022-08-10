import React from 'react';
import User from './user.png';
import Send from './sender.png';
import './chat.css'
export default function Chat(props){
    return(
        <div className="chat-container">
            <div className="chat">
                <div className="header-chat">
                    <img src={User} className="UserImg" alt="UserImg"></img>
                    <div className="username-chat">Boot User ♟ <p>{props.typing}</p></div>
                </div>
                <div className="body-chat">
                    <ul>
                    {props.messages.map((message)=>{
                        return(
                            <li>
                                <div className={message.user}>
                                    <span>{message.message}</span>
                                    <div>{message.hour}</div>
                                </div>
                            </li>
                            
                        )
                    })}
                    </ul>
                </div>
                <div className="bottom-chat">
                    <form className="form-chat" onSubmit={props.onSubmit}>
                        <input type="text" className="text-chat" name="message" autoComplete='off'/>
                        <button type="submit" className="btn-send"><img src={Send} className="Send" alt="Send"></img></button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}