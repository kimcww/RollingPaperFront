import React, { useState } from 'react';
import axios from 'axios';
import css from '../../css/auth/Login.module.css';
import { loginUser } from '../../features/login/loginSlice';
import { useDispatch } from "react-redux";
import googleLogo from '../../images/loginlogo/google_logo.svg';
import naverLogo from '../../images/loginlogo/naver_logo.png';
import kakaoLogo from '../../images/loginlogo/kakao_logo.png';
import Popup from 'reactjs-popup';
import Register from './Register';
import cookies from 'react-cookies';

axios({
    method: "get",
    url: "url",
    responseType: "type"
}).then(function (response) {
    // response Action
});


export default function Login(props) {
    const dispatch = useDispatch();

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [registerOpen, setRegisterOpen] = useState(false);

    console.log("testestset ", process.env.REACT_APP_API_SERVER);
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");


    const closeRegisterModal = () => {
        setRegisterOpen(false);
    }
    const openRegisterModal = () => {
        setRegisterOpen(true);
    }

    const handleInputId = (e) => {
        setId(e.target.value);
    }

    const handleInputPw = (e) => {
        setPassword(e.target.value);
    }

    const LoginFunc = (e) => {
        e.preventDefault();
        // Loading... 메세지 출력
        setMsg("Loading...");

        // API
        axios.post('/login', { memberId: id, memberPwd: password }, { withCredentials: true })
            .then(res => {
                // 2순위 통신이 끝나야 작동. 통신 이후 클릭이 되도록.
                setLoading(false);
                // Loading... 메세지가 통신이 끝난 후 1.5초 이후 없어짐.
                setTimeout(() => setMsg(""), 1500);
                // code = 데이터 상태

                alert("로그인 성공");
                sessionStorage.setItem("JSESSION", res.headers['jsession']);
                dispatch(loginUser(res.data));
                axios.defaults.headers.common['JSESSION'] = sessionStorage.getItem("JSESSION");
                props.closeEvent();

            }).catch(function (error) {
                alert(error.response.data.message);
            });
        setLoading(true);
    }


    return (
        <div className={css.simple_box}>
            <div className={css.simple_title}>로그인</div>
            <div className={css.simple_content}>간편로그인</div>
            <div className={css.simple_login_box}>
                <div className={css.simple_login_logo}><img src={googleLogo} className={css.simple_login_logo_img} /></div>
                <div className={css.simple_login_logo}><img src={naverLogo} className={css.simple_login_logo_img} /></div>
                <div className={css.simple_login_logo}><img src={kakaoLogo} className={css.simple_login_logo_img} /></div>
            </div>
            <div>
                <div className={css.simple_content}>아이디</div>
                <input placeholder='ID' type='text' name='input_id' value={id} onChange={handleInputId} className={css.simple_login_input} />
            </div>
            <div>
                <div className={css.simple_content}>패스워드</div>
                <input placeholder='Password' type='password' name='input_pw' value={password} onChange={handleInputPw} className={css.simple_login_input} />
            </div>
            <div className={css.simple_button_container}>
                <div className={css.simple_button_box_left}>
                    <button id='login' type='button' onClick={openRegisterModal} className={css.simple_button}>회원가입</button>
                </div>
                <Popup
                    open={registerOpen}
                    onClose={closeRegisterModal}
                    modal
                    position="center center"
                    nested
                >
                    <Register closeEvent={closeRegisterModal} />
                </Popup>
                <div className={css.simple_button_box_right}>
                    <button id='login' type='button' onClick={LoginFunc} className={css.simple_button}>로그인!</button>
                </div>
            </div>
            <div style={{ textAlign: 'right' }}>
                <button id='login' type='button' onClick={props.closeEvent} className={css.simple_button_noborder} >닫기</button>
            </div>
        </div>
    )
}