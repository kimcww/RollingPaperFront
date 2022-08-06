import React, {useState} from 'react'
import './SignUp.module.css';
import { Input } from '@mui/material';
import {Button} from '@mui/material';
import axios from 'axios';

export default function Login(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const onClickSignUp = () =>{
        console.log("clicked sign up");
        axios.post('http://192.168.220.1:8080/registerUser', {name: name, email: email, password : password, confirmPassword: confirmPassword }).then(function (response){console.log(response);}).catch(function (error) {
             alert(error.response.data.message);
          });
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
      }
      const onEmailHandler = (event) => {
          setEmail(event.currentTarget.value);
      }
    
      const onPasswordHandler = (event) => {
          setPassword(event.currentTarget.value);
      }
    
      const onConfirmPasswordHandler = (event) => {
          setConfirmPassword(event.currentTarget.value);
      }
    
      const onSubmit = (event) => {
        event.preventDefault()
        if(name === "")
            return alert('이름을 입력해주세요');
        if(email === "")
            return alert('이메일을 입력해주세요');
        if(password !== confirmPassword) {
          return alert('비밀번호가 일치하지 않습니다.');
        }
      }

    return(
        <div class="loginregister">
            <div><Input fullWidth name="name" type="text" placeholder="이름" value={name} onChange={onNameHandler} class ="loginregister__input"/></div>
            <div><Input fullWidth name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} class="loginregister__input"/></div>
            <div><Input fullWidth name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} class="loginregister__input"/></div>
            <div><Input fullWidth name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} class="loginregister__input"/></div>
            <div><Button fullWidth type="submit" onClick={onSubmit} >계정 생성하기</Button></div>
      </div>
    );
}