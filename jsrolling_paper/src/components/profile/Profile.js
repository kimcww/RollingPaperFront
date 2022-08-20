import css from '../../css/profile/Profile.module.css';
import ProfileFriends from './ProfileFriends';
import ProfileImg from './ProfileImg';
import ProfileIntro from './ProfileIntro';
 
const clickedProfileImage = () =>
{
    console.log("hello")
}
export default function Profile(){
    return (
        <div className={css.profile}>
            <ProfileImg onClicked={clickedProfileImage}></ProfileImg>
            <ProfileIntro></ProfileIntro>
            <ProfileFriends></ProfileFriends>
        </div>
    )
};