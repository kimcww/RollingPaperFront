import css from '../../css/profile/ProfileImg.module.css';
import Popup from 'reactjs-popup';
import { useState } from 'react';
import ProfileImageSelecterModal from './ProfileImageSelecterModal';

export default function ProfileImg() {
    const [open, setOpen] = useState(false);
    const [profileURL, setProfileURL] = useState("https://i.imgur.com/ndu6pfe.png");

    const closeModal = () => {
        setOpen(false);
    }
    const openModal = () => {
        setOpen(true);
    }
    return (
        <div className={css.profileImg}>
            <img src={profileURL} className={css.sourceImg} onClick={openModal} ></img>
            <Popup id="" open={open} position="center center" onClose={closeModal} modal>
                <ProfileImageSelecterModal closeEvent={closeModal} setProfileURL={setProfileURL}></ProfileImageSelecterModal>
            </Popup>
        </div>
    )
};