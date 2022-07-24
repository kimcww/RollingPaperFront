import React, {useState, useEffect} from 'react';
import { ReactDOM } from 'react';
import styles from './LoginControl.module.css';

// export default function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) return alert('welcome');
//     else return alert('Try to sign in please'); 
// }

class LoginControl extends React.Component
{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    };

    handleLoginClick(){
        console.log("Try to click login")
        this.setState({isLoggedIn : true});
    }
    handleLogoutClick(){
        console.log("Try to click logout")
        this.setState({isLoggedIn : false});
    }
    setLoggedIn(loggedIn)
    {
        this.setState({isLoggedIn : loggedIn});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        // 질문 2.
        // const로 state를 다시 선언한 이유는 무엇인가요?
        // 바로 if(this.state.isLoggedIn) 으로 접근하지않는 이유는 상수화 시켜서 아래에서 값을 건드리지 못하게끔 하기위함인가요?
        
        let button;
        if (isLoggedIn) {
          button = <button className={styles.button} id = 'logout' onClick={this.handleLogoutClick}>Logout</button>;
        } else {
          button = <button className={styles.button} id = 'login' onClick={this.handleLoginClick}>Login</button>;
        }
    
        return (
          // <div>
            // {/* <Greeting isLoggedIn={isLoggedIn} /> */}
            button
          // </div>
        );
      }
}
export default LoginControl;
