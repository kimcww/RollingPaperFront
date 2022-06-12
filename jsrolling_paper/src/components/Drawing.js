import React, { Fragment } from 'react';
// import { createRoot } from 'react-dom/client';
import { Stage, Layer, Line, Image} from 'react-konva';
import { Button, Grid } from '@mui/material'
import axios from 'axios';

export default function Drawing() {
  const [tool, setTool] = React.useState('pen');
  const [lines, setLines] = React.useState([]);
  const isDrawing = React.useRef(false);
  const [inputId, setInputId] = React.useState('')
  const [inputPw, setInputPw] = React.useState('')

  const stageRef = React.useRef(null);

  const handleExport = () => {
    const uri = stageRef.current.toDataURL();   
    console.log(stageRef.current);
    console.log(uri);
  }

  const handleImport = () => {
    }

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };
  const onSubmitDrawingData = () => {

    axios.post('http://172.30.1.15:8080/??', { name: inputId, password: inputPw }).then(function (response) { console.log(response); }).catch(function (error) {
      alert(error);
    });


  }

  return (
    <div>
      <div>
        <Grid container justifyContent="flex-end">
          <select
            value={tool}
            onChange={(e) => {
              setTool(e.target.value);
            }}
          >
            <option value="pen">Pen</option>
            <option value="eraser">Eraser</option>
          </select>
          <Button id='submitDrawing' type='button' onSubmit={onSubmitDrawingData}>Submit</Button>
        </Grid>
      </div>
      <Fragment>
        <button onClick={handleExport}>Click here to log stage data URL</button>
        <button onClick={handleImport}>Import data</button>
        <Stage ref={stageRef}
          width={window.innerWidth}
          height={window.innerHeight}
          onMouseDown={handleMouseDown}
          onMousemove={handleMouseMove}
          onMouseup={handleMouseUp}
        >
          <Layer>
            {lines.map((line, i) => (
              <Line
                key={i}
                points={line.points}
                stroke="#000000"
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
      </Fragment>

    </div>
  );
};