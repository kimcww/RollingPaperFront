import React from 'react';
import Popup from 'reactjs-popup';
import css from '../../css/profile/ProfileImageSelecterModal.module.css';

export default function ProfileImageSelecterModal() {

    return (
        <div className={css.modal}>
            <button className={css.close} >
                &times;
            </button>
            <div className={css.header}>프로필 선택</div>
            <div className={css.content}>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
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
};