import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {FormLabel } from '@mui/material';
import { Input } from '@mui/material';
import {Button} from '@mui/material';
import styles from './Login.module.css';

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
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    const handleInputId = (e) =>{
        setInputId(e.target.value);
    }

    const handleInputPw= (e) =>{
        setInputPw(e.target.value);
    }

    const onClickLogin = () => {
        console.log('click login');
        axios.post('http://172.30.1.15:8080/loginUser', {name: inputId, password : inputPw}).then(function (response){console.log(response);}).catch(function (error) {
            alert(error);
          });
    }

    return (
        <div>
            <div>
                <Input padd fullWidth className= {styles.Center} placeholder='ID' type = 'text' name ='input_id' value = {inputId} onChange = {handleInputId} />
            </div>
            <div>
                <Input fullWidth placeholder='Password' type = 'password' name ='input_pw' value = {inputPw} onChange = {handleInputPw} />
            </div>
            <div>
                <Button fullWidth id='login' type='button' onClick = {onClickLogin}>Login</Button>
            </div>
        </div>
    )
}