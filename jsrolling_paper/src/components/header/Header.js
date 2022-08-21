import css from '../../css/Header.module.css';
import btn from '../../css/common/btn.css';

export default function Header(){
    return (
        <div className={css.header}>
            <div className={css.header_left}>
                <h2>하다사 롤링페이퍼</h2>
            </div>  
            <div className={css.header_right}>
                <button className={css.basic_btn} type='button' name='login'>로그인</button>
                <button className={css.basic_btn} type='button' name='register'>회원가입</button>
                <button className={css.basic_btn} type='button' name='share'>공유</button>
            </div>
        </div>
    )
};