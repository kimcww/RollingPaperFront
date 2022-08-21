import css from '../../css/profile/Profile.module.css';
import ProfileFriends from './ProfileFriends';
import ProfileImg from './ProfileImg';
import ProfileIntro from './ProfileIntro';
 
export default function Profile(){
    return (
        <div className={css.profile}>
            <ProfileImg></ProfileImg>
            <ProfileIntro></ProfileIntro>
            <ProfileFriends></ProfileFriends>
        </div>
    )
};