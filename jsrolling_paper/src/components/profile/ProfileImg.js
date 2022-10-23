import css from '../../css/profile/ProfileImg.module.css';
import Popup from 'reactjs-popup';
import { useState } from 'react';
import ProfileImageSelecterModal from './ProfileImageSelecterModal';
import ReactTooltip from 'react-tooltip'

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
            <img data-tip data-for="registerTip" src={profileURL} className={css.sourceImg} onClick={openModal} ></img>
            <ReactTooltip id="registerTip" place="bottom" effect="solid" type = "info">
                프로필을 변경하시려면 클릭
            </ReactTooltip>
            <Popup id="" open={open} position="center center" onClose={closeModal} modal nested>
                <ProfileImageSelecterModal closeEvent={closeModal} setProfileURL={setProfileURL}></ProfileImageSelecterModal>
            </Popup>
        </div>
    )
};