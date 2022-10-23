import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Popup } from 'reactjs-popup';
import css from '../../css/Header.module.css';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

export default function Header(){
    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);
    const user = useSelector((store) => store.user);
    console.log("user =====", user);
    const closeLoginModal = () => {
        setLoginOpen(false);
    }
    const openLoginModal = () => {
        setLoginOpen(true);
    }

    const closeRegisterModal = () => {
        setRegisterOpen(false);
    }
    const openRegisterModal = () => {
        setRegisterOpen(true);
    }

    return (
        <div className={css.header}>
            <div className={css.header_left}>
                <h2>하다사 롤링페이퍼</h2>
            </div>  
            <div className={css.header_right}>
            {
                (function() {
                    if(user){
                        if (user.memberSeq > 0) return (<div>{`${user.memberNm} 님 환영합니다.`}</div>);
                    }
                })()
            }

        
                <button className={css.basic_btn} type='button' name='login' onClick={openLoginModal}>로그인</button>
                <button className={css.basic_btn} type='button' name='register' onClick={openRegisterModal}>회원가입</button>
                <button className={css.basic_btn} type='button' name='share'>공유</button>
            </div>
            <div className={css.actions}>
                    <Popup 
                        open={loginOpen}
                        onClose={closeLoginModal}
                        modal 
                        position = "center center"
                        nested
                    >
                        <Login closeEvent={closeLoginModal}/>
                    </Popup>
                    <Popup 
                        open={registerOpen}
                        onClose={closeRegisterModal}
                        modal 
                        position = "center center"
                        nested
                    >
                        <Register closeEvent={closeRegisterModal}/>
                    </Popup>
            </div>

        </div>
    )
};