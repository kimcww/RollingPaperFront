import styles from './Title.module.css';
import Login from './Login';
import Test from './Test';
import Main from './Main';
import {Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import main from '../Login_v2/js/main'

export default function Title({titleName}) {
    return(
    <Router>
        <header>
        <h1 className = {styles.titleCenter}>
            {titleName}
            <Link to="/*">
                <button className={styles.button}>Home</button>
            </Link>
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