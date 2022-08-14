import React, {useRef} from 'react';
import User from './user.png';
import Send from './sender.png';
import './chat.css';
import { Sidebar } from '../sidebar/side';
export default function Chat(props){
    const inputRef = useRef();
    const handleClick = async() =>{
        if(inputRef.current.value === '' ||inputRef.current.value === null )return;
        setTimeout(()=>{
            inputRef.current.value = '';
        },10)
    }
    
    return(
        <div className="chat-container">
            <div className="container-full">
                <Sidebar/>
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
                            <input type="text" className="text-chat" name="message" ref={inputRef} autoComplete='off' placeholder='Escribe un mensaje aquí'/>
                            <button type="submit" className="btn-send" onClick={() => handleClick()}><img src={Send} className="Send" alt="Send"></img></button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}