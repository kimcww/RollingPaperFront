import React, {useState} from 'react'
import css from '../../css/auth/Register.module.css';
import axios from 'axios';

export default function Register(){
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
        <div className={css.simple_box}>
            <div className = {css.simple_title} style={{marginTop:'30px', marginBottom:'50px'}}>회원 가입</div>
            <div className = {css.simple_input_margin}>
                <div className = {css.simple_content}>이메일</div>
                <input type="email" name="email" placeholder="" value={email} onChange={onEmailHandler} className = {css.simple_login_input}/>                    
            </div>
            <div className = {css.simple_input_margin}>
                <div className = {css.simple_content}>이름</div>
                <input type="text" placeholder="이름" value={name} onChange={onNameHandler} className = {css.simple_login_input} />
            </div>
            <div className = {css.simple_input_margin}>
                <div className = {css.simple_content}>비밀번호</div>
                <input type="password" name="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} className = {css.simple_login_input}/>
            </div>
            <div className = {css.simple_input_margin}>
                <div className = {css.simple_content}>비밀번호 확인</div>
                <input type="password" name="confirmPassword" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} className = {css.simple_login_input}/>
            </div>
            <div className = {css.simple_input_margin}>
                <button fullWidth type="submit" onClick={onSubmit} className = {css.simple_button} >가입하기</button>
            </div>
            <div style={{textAlign:'right'}}>
                <button id='login' type='button' className={css.simple_button_noborder} >닫기</button>
            </div>
      </div>
    );
}