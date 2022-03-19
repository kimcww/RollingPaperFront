import styles from './Title.module.css';
import Login from './Login';

export default function Title() {
    function showLoginPage()
    {
        alert("Login 하실래요?");
    }
    return <div>
        <h1 style={
            { color: '#f00', borderRight: "12px solid #000", marginBottom: "50px", opacity: 1 }}>
            Rolling Paper
            <button onClick={showLoginPage}>login </button>    
            <button>sign-in </button>
        </h1>
    </div>
};