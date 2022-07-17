import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {FormLabel } from '@mui/material';
import { Input } from '@mui/material';
import {Button} from '@mui/material';
import styles from './Login.module.css';
import  {loginUser}from '../features/login/loginSlice';
import { useDispatch } from "react-redux";

axios({
    method: "get",
    url: "url",
    responseType: "type"
}).then(function (response) {
    // response Action
});

const API = axios.create({
    baseURL : "http://172.30.1.23:8300",
    headers: {
        "Content-Type ": "application/json",
    },
    withCredentials: true,
})

export default function Login(){
    const dispatch = useDispatch();

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    const handleInputId = (e) =>{
        setId(e.target.value);
    }

    const handleInputPw= (e) =>{
        setPassword(e.target.value);
    }

    const onClickLogin = () => {
        console.log('click login');
        axios.post('http://172.30.1.15:8080/loginUser', {name: id, password : password}).then(function (response){console.log(response);}).catch(function (error) {
            alert(error);
          });
    }
    const LoginFunc = (e) => {
        e.preventDefault();
        // Loading... 메세지 출력
        setMsg("Loading...");

        // API
        let body = {
            id,
            password
        }
        axios.post('http://172.30.1.57:8300/login', {memberId: id, memberPwd : password})
        .then(res => {
            // 2순위 통신이 끝나야 작동. 통신 이후 클릭이 되도록.
            setLoading(false);
            // Loading... 메세지가 통신이 끝난 후 1.5초 이후 없어짐.
            setTimeout(() => setMsg(""), 1500);
            // code = 데이터 상태
            const code = res.data.code;
            if (code === 400) {
                // 비어있는
                alert("비어있는 내용입니다.")
            } else if (code === 401) {
                // 존재하지 않는 id
                alert("존재하지 않는 id입니다.")
            } else if (code === 402) {
                // 비밀번호가 틀렸을때
                alert("비밀번호가 일치하지 않습니다.")
            } else {
                alert("login 성공");
                console.log("res = ",res);
                dispatch(loginUser(res.data.userInfo));
            }
        })
        // 1순위 로그인 버튼을 누르면 클릭이 안되도록.
        setLoading(true);
    }
    return (
        <div>
            <div>
                <Input padd fullWidth className= {styles.Center} placeholder='ID' type = 'text' name ='input_id' value = {id} onChange = {handleInputId} />
            </div>
            <div>
                <Input fullWidth placeholder='Password' type = 'password' name ='input_pw' value = {password} onChange = {handleInputPw} />
            </div>
            <div>
                <Button fullWidth id='login' type='button' onClick = {LoginFunc}>Login</Button>
            </div>
        </div>
    )
}