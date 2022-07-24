import css from '../../css/sketch/Sketch.module.css';
import PaintPalette from './PaintPalette';
 
export default function Sketch(){
    return (
        <div className={css.sketch}>
            <PaintPalette></PaintPalette>
        </div>
    )
};