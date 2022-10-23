import Paper from '@mui/material/Paper';
import css from '../css/Main.module.css';
import Header from './header/Header';
import Home from './home/Home';

export default function Main(){
    return (
     <div>
            <div className={css.container_shadow}>
                <div className={css.container}>
                    <Header/>
                    <Home/>
                </div>
            </div>
       </div>
    )
};