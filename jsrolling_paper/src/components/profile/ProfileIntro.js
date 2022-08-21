import css from '../../css/profile/ProfileIntro.module.css';
import React, {useState, useEffect} from 'react';

export default function ProfileIntro(){

    const textareaRef = React.useRef(null);
    const [isEditing, setEditing] = React.useState(false);
    const [editName, setEditButtonName] = React.useState("edit");

    const clickedEdit = () =>{
        if(isEditing == true)
        {
            setEditButtonName("edit");
            setEditing(false);
        }
        else
        {
            setEditButtonName("save");
            setEditing(true);
            setTimeout(textareaRef.current.focus(),100);
        }
    };

    return (
        <div>
            <textarea ref={textareaRef} name = 'profileIntroTextArea'  className={css.profileIntro}></textarea>
            <button name='profileIntroEdit' onClick={clickedEdit}>{editName}</button>
        </div>
    )
};