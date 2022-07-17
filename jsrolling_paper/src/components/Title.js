import styles from './Title.module.css';
import Login from './Login';
import Test from './Test';
import Main from './Main';
import {Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import SignUp from './SignUp';
import Drawing from './Drawing';
import Counter from '../features/counter/Counter';

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
                <button className={styles.button}>Login</button>
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