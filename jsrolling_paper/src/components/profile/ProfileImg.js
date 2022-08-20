import css from '../../css/profile/ProfileImg.module.css';
import Popup from 'reactjs-popup';
import { useState } from 'react';
import ProfileImageSelecterModal from './ProfileImageSelecterModal';

export default function ProfileImg() {
    const [open, setOpen] = useState(false);

    const clickedProfileImage = () => {
        setOpen(!open)
    }
    return (
        <div className={css.profileImg} onClick={clickedProfileImage}>
            <Popup open={open} position="center center">
                <ProfileImageSelecterModal></ProfileImageSelecterModal>
            </Popup>
        </div>
    )
};