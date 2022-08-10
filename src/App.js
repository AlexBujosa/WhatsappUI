import React, {useState} from 'react';
import Modal from './components/modal/modal';
import Chat from './components/chat/Chat';
import './app.css';
//import axios from 'axios';
let map = new Map();
map.set("hola", ["Hey, que tal?", "Hola", "Como estas?", "klk"]);
map.set("bien y tu?", ["Todo bien", ["Aqui chilling", "Que de ti bro?"]]);
map.set("bien y tu", ["Todo bien", ["Aqui chilling", "Que de ti bro?"]]);
map.set("como estas?", ["Todo bien", "Aqui chilling. Que de ti bro?"]);
map.set("como estas", ["Todo bien", "Aqui chilling. Que de ti bro?"]);
map.set("como estás?", ["Todo bien", "Aqui chilling. Que de ti bro?"]);
map.set("¿como estás?", ["Todo bien", "Aqui chilling. Que de ti bro?"]);
map.set("bien", "Que bueno");
map.set("excelente", "😃🙂🙂🙂");

function rtnMessage(newMessage){
  var values = map.get(newMessage);
  if(typeof(values) === 'object'){

      let max = values.length;
      let message = values[Math.floor(Math.random() * max)]
      return message;
  }
  else if(typeof(values) === 'string'){
    return values;
  }

}
function rtnHour(hour, minute){
  let strHour = "";
  let strMinute = "";
  let morLt = (hour >= 12) ? "p. m." : "a. m.";
  if(hour === 0 || hour === 12){
    strHour = "12";
  }else{
    strHour = (hour % 12).toString()
  }

  if(minute < 10){
    strMinute = "0"+(minute);
  }else{
    strMinute = minute;
  }
  return strHour+":"+strMinute+" "+morLt;

}

export default function App(){
  const [disabled, setDisabled] = useState(true);
  const [messages, SetMessages] = useState([]);
  const [isTyping, SetisTyping] = useState("");
 
  const waitRespond = async (newMessage) =>{
      const d = new Date();
      let hour = d.getHours();
      let minute = d.getMinutes();
      let strHour = rtnHour(hour,minute);
      SetisTyping("Escribiendo...");
      setTimeout(() =>{
        SetMessages((oldMessages)=>{
          oldMessages =[...oldMessages, {user:"Other", message:rtnMessage(newMessage.toLowerCase()), hour: strHour}]
          return oldMessages;
        })
        SetisTyping("");
      },3000);
      
};

  const sendMessage = (e)=>{
    e.preventDefault();
    const d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes()
    let strFullHour = rtnHour(hour, minute);
    var newMessage = e.target.message.value;
    SetMessages((oldMessages)=>{
      oldMessages = [...oldMessages, {user:"Me", message: newMessage, hour: strFullHour}];
      return oldMessages;
    })
    waitRespond(newMessage);
  }
  const enabledChat = (e)=>{
    e.preventDefault();
    setDisabled((oldDisabled)=>{
      return !oldDisabled;
    })
  }
  return(
    <div className="app">
        <Chat onSubmit={(e) => sendMessage(e)} messages = {messages} typing={isTyping}/>
        {disabled && <Modal onSubmit={(e) =>enabledChat(e)}/>}
    </div>
  )
}