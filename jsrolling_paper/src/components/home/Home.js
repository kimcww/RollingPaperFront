import css from '../../css/Home.module.css';
import Profile from '../profile/Profile';
import Sketch from '../sketch/Sketch';
 
export default function Home(){
    return (
        <div className={css.home}>
            <div className={css.profile_container}>
                <Profile></Profile>  
            </div>
            <div className={css.sketch_container}>
                <Sketch></Sketch>
            </div>
        </div>
    )
};