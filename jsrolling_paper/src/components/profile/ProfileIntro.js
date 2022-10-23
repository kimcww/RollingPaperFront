import css from '../../css/profile/ProfileIntro.module.css';
import React, {useState, useEffect} from 'react';

export default function ProfileIntro(){

    const textareaRef = React.useRef(null);
    const [isEditing, setEditing] = React.useState(false);
    const [editName, setEditButtonName] = React.useState("edit");
    const [isReadOnly, setReadOnly] = React.useState(true);

    const clickedEdit = () =>{
        if(isEditing == true)
        {
            setEditButtonName("edit");
            setEditing(false);
            setReadOnly(true);
        }
        else
        {
            setEditButtonName("save");
            setEditing(true);
            setReadOnly(false);
            setTimeout(textareaRef.current.focus(),100);
        }
    };

    return (
        <div>
            <textarea readOnly={isReadOnly} ref={textareaRef} name = 'profileIntroTextArea'  className={css.profileIntro}></textarea>
            <button name='profileIntroEdit' onClick={clickedEdit}>{editName}</button>
        </div>
    )
};