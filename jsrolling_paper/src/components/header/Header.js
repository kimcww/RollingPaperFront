import axios from 'axios';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Popup } from 'reactjs-popup';
import css from '../../css/Header.module.css';
import { clearUser } from '../../features/login/loginSlice';
import Login from '../Auth/Login';
import Register from '../Auth/Register';


export default function Header() {
    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

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

    const logOutFunc = (e) => {
        e.preventDefault();
        // Loading... 메세지 출력

        axios.post('/logout')
            .then(res => {
                // 2순위 통신이 끝나야 작동. 통신 이후 클릭이 되도록.
                setLoading(false);

                // code = 데이터 상태
                const code = res.status;
                if (code === 200) {
                    alert("로그아웃 완료");
                    console.log(res.headers);
                    sessionStorage.setItem("JSESSION", res.headers['jsession']);
                    dispatch(clearUser());
                }
            })
        // 1순위 로그인 버튼을 누르면 클릭이 안되도록.
        setLoading(true);
    }

    return (
        <div className={css.header}>
            <div className={css.header_left}>
                <h2>하다사 롤링페이퍼</h2>
            </div>
            <div className={css.header_right}>
                {user.isLogin &&
                    <div>{`${user.memberNm} 님 환영합니다.`}</div>}
                {!user.isLogin &&
                    <button className={css.basic_btn} type='button' name='login' onClick={openLoginModal}>로그인
                        <Popup
                            open={loginOpen}
                            onClose={closeLoginModal}
                            modal
                            position="center center"
                            nested
                        >
                            <Login closeEvent={closeLoginModal} />
                        </Popup></button>}
                {user.isLogin &&
                    <button className={css.basic_btn} onClick={logOutFunc}>로그아웃!</button>}
                {!user.isLogin &&
                    <button className={css.basic_btn} type='button' name='register' onClick={openRegisterModal}>회원가입
                        <Popup
                            open={registerOpen}
                            onClose={closeRegisterModal}
                            modal
                            position="center center"
                            nested
                        >
                            <Register closeEvent={closeRegisterModal} />
                        </Popup></button>}
                <button className={css.basic_btn} type='button' name='share'>공유</button>
            </div>
        </div>
    )
};