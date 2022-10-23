import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Counter from '../features/counter/Counter';
import Login from './Auth/Login';
import Drawing from './Drawing';
import LoginControl from './LoginControl';
import SignUp from './SignUp';
import styles from './Title.module.css';

export default function Title({titleName}) {
    return(
    <Router>
        <header>
        <h1 className = {styles.titleCenter}>
            <Link to='/'>{titleName}</Link>
            <Link to="/Sign_up">
                <button className={styles.button}>SignUp</button>
            </Link>
            <Link to="/Login">
                {/* <button className={styles.button}>Login</button> */}
                <LoginControl/>
            </Link>
        </h1>
        </header>
        <hr />
        <Routes>
            <Route path = "/" element={<Drawing/>} />
            <Route path = "/Login" element={<Login/>} />
            <Route path = "/sign_up" element = {<SignUp/>} />
            <Route path = "/counter" element = {<Counter/>} />
        </Routes>
    </Router>
    )
};