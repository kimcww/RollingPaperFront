import css from '../../css/spring/Spring.module.css';
export default function Spring(){
    return (
        <div className={css.spring}>
            <div className={css.container_1}>
                {springIconArray()}
            </div>
            <div className={css.container_2}>
                {springIconArray()}
            </div>
        </div>
    )
};

function springIconArray(){
    let array = [];
    for(let i=0; i < 5; i++){
        array.push(<div className={css.springIcon}><div class={css.springIconWhite}></div></div>);
    }
    return array;
}