import styles from './Drawing.module.css';
import React from 'react';
// import {createRoot} from 'react-dom/client';
import { Stage, Layer, Line, Text } from 'react-konva';

export default function Drawing (){
    const [tool, setTool] = React.useState('pen');
    const [lines, setLines] = React.useState([]);
    const isDrawing = React.useRef(false);

    const handleMouseDown = (e) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setLines([...lines, {tool, points: [pos.x , pos.y]}]);

    };

    const handleMouseMove = (e) => {
        if(!isDrawing.current){
            return;
        }
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        let lastLine = lines[lines.length-1];
        
        lastLine.points = lastLine.points.concat([point.x, point.y]);

        lines.splice(lines.length -1, 1, lastLine);
        setLines(lines.concat());

    }
    const handleMouseUP = () => {
        isDrawing.current = false;
    }
    return(
        <div>
            <Stage  
                width = {window.innerWidth}
                height = {window.innerHeight}
                onMouseDown = {handleMouseDown}
                onMouseMove = {handleMouseMove}
                onMouseup = {handleMouseUP}
            >
                <Layer>
                    <Text text="Your drawing board" x={5} y={30} />
                    {lines.map((line, i) => (
                    <Line
                    key={i}
                    points={line.points}
                    stroke="#df4b26"
                    strokeWidth={5}
                    tension={0.5}
                    lineCap="round"
                    globalCompositeOperation={
                        line.tool === 'eraser' ? 'destination-out' : 'source-over'
                    }
                    />
                ))}
                </Layer>
            </Stage>
            <select
                value={tool}
                onChange={(e) => {
                setTool(e.target.value);
                }}
            >
                <option value="pen">Pen</option>
                <option value="eraser">Eraser</option>
            </select>
        </div>
    )
};