import React,{useState, useRef} from 'react';
import User from './user.png';
import './side.css';
import { IconState } from './icon-state/icon';
import { NewChatIcon } from './icon-newchat/newchatico';
import { ThreeDots } from './icon-threedots/threedots';
import Arrowpng from './arrow.png';
import { useEffect } from 'react';
import { MyChat } from './chats/mychat';
export function Sidebar(){
    const inputRef = useRef();
    const [searchString, SetSearchString] = useState("");
    const [isClicked, SetisClicked] = useState(false);
    useEffect(() => {
        setInterval(()=>{
            if (document.activeElement === inputRef.current) {
                inputRef.current.placeholder="";
                SetisClicked(true);
              }else if(inputRef.current.value === "" ){
                SetisClicked(false);
                inputRef.current.placeholder="Busca un chat o inicia uno nuevo";
              }
        },100)
        return
        
    },[])
    const handleClick = ()=>{
        SetisClicked((oldClicked)=>{
            if(oldClicked && inputRef.current.value !== ""){
                SetSearchString("");
            }else if(!oldClicked){
                inputRef.current.focus();
            }
            return !oldClicked;
        })
    }
    const inputChange = (e)=>{
        var inputValue = e.target.value;
        var length = e.target.value.length;
        SetSearchString(inputValue);
        if(length > 0){
            SetisClicked(true);
        }
    }
    return(
        <div className="sidebar">
            <div className="header-sidebar">
                <img src={User} className="UserImg" alt="UserImg"/>
                <IconState />
                <NewChatIcon/>
                <ThreeDots/>
            </div>
            <div className="searching-chat">
                    <div className="container-search-chat">
                        <button onClick={()=>handleClick()}>
                            {!isClicked &&
                            <span>
                                <svg viewBox="0 0 24 24" width="24" height="24" className="">
                                    <path fill="#95A5A6" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z">
                                    </path>
                                </svg>
                            </span>} 
                            {isClicked && <img src={Arrowpng} alt="arrowpng" className="arrowpng"/>}
                        </button>
                                
                        <form>
                            <input type="text" className="input-search" ref={inputRef} placeholder='Busca un chat o inicia uno nuevo' value={searchString} onChange={(e)=>inputChange(e) }/>
                        </form>
                    </div>
                    <div className="no-read-chat">
                        <button>
                            <span data-testid="filter" data-icon="filter" className="">
                                <svg viewBox="0 0 24 24" width="20" height="20" preserveAspectRatio="xMidYMid meet" className="">
                                    <path fill="currentColor" d="M10 18.1h4v-2h-4v2zm-7-12v2h18v-2H3zm3 7h12v-2H6v2z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
            </div>
            <div className="body-sidebar">
                <div className="our-chat">
                    <div className="archive">
                        <button>
                            <span data-testid="archived" data-icon="archived" className="">
                                <svg width="30" height="30" viewBox="0 0 20 20" fill="none" className="">
                                    <path d="m18.54 3.23-1.39-1.68C16.88 1.21 16.47 1 16 1H4c-.47 0-.88.21-1.16.55L1.46 3.23C1.17 3.57 1 4.02 1 4.5V17c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4.5c0-.48-.17-.93-.46-1.27ZM4.24 3h11.52l.81.97H3.44l.8-.97ZM3 17V6h14v11H3Zm8.45-9h-2.9v3H6l4 4 4-4h-2.55V8Z" fill="currentColor"></path>
                                </svg>
                            </span>
                        </button>
                        <div className="archive-info">
                            <p>Archivados</p>
                            <b>0</b>
                        </div>
                    </div>
                    <MyChat type={"Group"} status={"Seen"} />
                    <MyChat type={"Person"} status={"Arrived"}/>
                    <MyChat type={"Person"} status={"Traveling"}/>
                </div>
            </div>
        </div>
        
    )
}