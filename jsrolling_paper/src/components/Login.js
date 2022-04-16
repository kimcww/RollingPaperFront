import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
        axios.post('http://172.30.1.23:8300/test', {id: inputId, password : inputPw}).then(function (response){console.log(response);}).catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <div>
                <label htmlFor = 'input_id'>ID :</label>
                <input type = 'text' name ='input_id' value = {inputId} onChange = {handleInputId} />
            </div>
            <div>
                <label htmlFor = 'input_pw'>PW :</label>
                <input type = 'text' name ='input_pw' value = {inputPw} onChange = {handleInputPw} />
            </div>
            <div>
                <button id='login' type='button' onClick = {onClickLogin}>Login</button>
            </div>
        </div>
    )
    
   
        
}