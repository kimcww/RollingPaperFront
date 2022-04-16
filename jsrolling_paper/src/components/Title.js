import styles from './Title.module.css';
import Login from './Login';
import Test from './Test';
import Main from './Main';
import {Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";

export default function Title({titleName}) {
    return(
    <Router>
        <header>
        <h1 className = {styles.titleCenter}>
            <Link to='/*'>{titleName}</Link>
            <Link to="/Login">
                <button className={styles.button}>Login</button>  
            </Link>
        </h1>
        </header>
        <hr />
        <Routes>
            <Route path = "/*" element={<Main/>} />
            <Route path = "/Login" element={<Login/>} />
        </Routes>
    </Router>
    )
};