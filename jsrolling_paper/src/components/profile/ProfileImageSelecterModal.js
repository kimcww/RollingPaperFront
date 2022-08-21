import React from 'react';
import Popup from 'reactjs-popup';
import css from '../../css/profile/ProfileImageSelecterModal.module.css';

export default function ProfileImageSelecterModal(props) {

    return (
        // close => (
            <div className={css.modal}>
                <button className={css.close} onClick = {props.closeEvent}>
                    &times;
                </button>
                <div className={css.header}>프로필 선택</div>
                <div className={css.container}>
                    <img src='https://i.imgur.com/ndu6pfe.png' className={css.containerImg}></img>
                    <img src='https://i.imgur.com/ndu6pfe.png' className={css.containerImg}></img>
                    <img src='https://i.imgur.com/ndu6pfe.png'className={css.containerImg}></img>
                    <img src='https://i.imgur.com/ndu6pfe.png'className={css.containerImg}></img>
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