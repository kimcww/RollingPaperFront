import css from '../../css/sketch/PaintPalette.module.css';
import { Button, Grid } from '@mui/material'
import { RGB } from 'konva/lib/filters/RGB';
import { red } from '@mui/material/colors';

export default function PaintPalette(props) {
    return (
        <div className={css.paintPalette} >
            <Button className={css.button} style={{ background: 'black' }} onClick={()=>{props.changeColor('#000000')}}></Button>
            <Button className={css.button} style={{ background: 'red' }} onClick={()=>{props.changeColor('#DB3E1C')}}></Button>
            <Button className={css.button} style={{ background: 'blue' }} onClick={()=>{props.changeColor('#00FFFF')}}></Button>
            <Button className={css.button} style={{ background: 'yellow' }} onClick={()=>{props.changeColor('#ffff00')}}></Button>
        </div>
    )
};