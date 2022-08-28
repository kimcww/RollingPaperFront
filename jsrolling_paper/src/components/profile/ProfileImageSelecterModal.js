import React from 'react';
import Popup from 'reactjs-popup';
import css from '../../css/profile/ProfileImageSelecterModal.module.css';

export default function ProfileImageSelecterModal(props) {

    const changeSource = (name) =>{
        props.setProfileURL(document.querySelector('#'+ name).src)
    }
    return (
        // close => (
            <div className={css.modal}>
                <button className={css.close} onClick = {props.closeEvent}>
                    &times;
                </button>
                <div className={css.header}>프로필 선택</div>
                <div className={css.container}>
                    <img id='img1' src='http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg' className={css.containerImg} onDoubleClick ={()=>{props.setProfileURL(document.querySelector('#img1').src)}}></img>
                    <img id='img2' src='https://i.graphicmama.com/uploads/2019/3/5c822b0ee4340-stylish-man-cartoon-vector-character.png' className={css.containerImg} onDoubleClick ={()=>{props.setProfileURL(document.querySelector('#img2').src)}}></img>
                    <img id='img3' src='https://i.graphicmama.com/uploads/2020/9/5f58e3491a2db-Modern-Style-Teenage-Girl-Cartoon-Character.png'className={css.containerImg}></img>
                    <img id='img4' src='https://i.graphicmama.com/uploads/2019/5/5cf0f7eb29ada-tattoed-girl-cartoon-vector-character-2.png'className={css.containerImg}></img>
                </div>
                <div className={css.actions}>
                    <Popup
                        trigger={<button className={css.button}> 설정 </button>}
                        position="top center"
                        nested
                    >
                        <span>
                            프로필 변경완료
                        </span>
                    </Popup>
                </div>
            </div>
        )
    // )
};