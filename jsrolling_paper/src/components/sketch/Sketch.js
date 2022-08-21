import css from '../../css/sketch/Sketch.module.css';
import Drawing from '../Drawing';

export default function Sketch(){

    
    return (  
        <div id = 'sketchman' className={css.sketch}>
            <Drawing className={css.sketch} ></Drawing>
        </div>
    )
};