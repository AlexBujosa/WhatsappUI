import React from 'react';
import AcceptImg from './ico-accept.png';
import Programmer from './programmer.png';
import './modal.css'
export default function Modal(props){
    return(
        <div className="full-block">
            <div className="Modal">
                <div className="container">
                    <div className="modal-header">
                        <img src={Programmer} className='programmerImg' alt="programmerImg"></img>
                    </div>
                    <div className="modal-middle">
                        <img src={AcceptImg} className='acceptImg' alt="acceptImg"></img>
                        <div>Agree to terms and conditions</div>
                    </div>
                    <div className="modal-body">
                        <div className="modal-info">
                            This chat application was created to learn how <span className="send">the send message </span>
                            buttons works and <span className="send">how to display in the screen.</span>
                        </div>
                        <div className="modal-copyrights">
                            ⒸCopyRight all rights reserved 2022
                        </div>
                        <div className="modal-button">
                            <form onSubmit={props.onSubmit}>
                                <input type="submit" value="Ok" className="button-form"/>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}