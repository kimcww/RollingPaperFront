import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { Stage, Layer, Line, Image } from 'react-konva';
import { Button, Grid } from '@mui/material'
import axios from 'axios';
import useImage from 'use-image'
import css from '../css/sketch/Drawing.module.css'
import PaintPalette from './sketch/PaintPalette';

class URLImage extends React.Component {
  state = {
    image: null,
  };
  componentDidMount() {
    this.loadImage();
  }
  componentDidUpdate(oldProps) {
    if (oldProps.src !== this.props.src) {
      this.loadImage();
    }
  }
  componentWillUnmount() {
    this.image.removeEventListener('load', this.handleLoad);
  }
  loadImage() {
    // save to "this" to remove "load" handler on unmount
    this.image = new window.Image();
    this.image.src = this.props.src;
    this.image.addEventListener('load', this.handleLoad);
  }
  handleLoad = () => {
    // after setState react-konva will update canvas and redraw the layer
    // because "image" property is changed
    this.setState({
      image: this.image,
    });
    // if you keep same image object during source updates
    // you will have to update layer manually:
    // this.imageNode.getLayer().batchDraw();
  };
  render() {
    return (
      <Image
        x={this.props.x}
        y={this.props.y}
        image={this.state.image}
        ref={(node) => {
          this.imageNode = node;
        }}
      />
    );
  }
}

export default function Drawing(props) {
  const [size,setSize] = React.useState([]);
  const [tool, setTool] = React.useState('pen');
  const [lines, setLines] = React.useState([]);
  const [lineStroke, setStroke] = React.useState('#000000');
  const [lineStrokeWidth, setStrokeWidth] = React.useState(5);
  const isDrawing = React.useRef(false);
  const stageRef = React.useRef(null);
  const layerRef = React.useRef(null);
  
  const changeColor = (color) =>{
    setStroke(color);
  }

  const resizeHandler = () =>{
    const sket = document.querySelector("#sketchman");
    setSize([sket.clientWidth, sket.clientHeight]);
    const a = 10;
  }
  React.useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, []);

  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    console.log(stageRef.current);
    console.log(uri);
  }

  const handleImport = () => {
    const uri = layerRef.current.toDataURL();
    console.log(uri);
  }

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y], lineStroke, lineStrokeWidth }]);
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

  const onSaveData = () => {
    const a = layerRef.current.toJson();
    console.log(a);
  }

  const clickClear= () => {
    layerRef.current.removeChildren();
  }
  function fitsize()
  {


  }
  return (
    <div>
      <div>
        <Grid container justifyContent="flex-end">
          <PaintPalette tool = {tool} setTool = {setTool} changeColor = {changeColor} clickClear = {clickClear} className={css.alignLeft}></PaintPalette>
          <Button id='submitDrawing' className={css.submit} type='button' onClick={onSaveData}>Submit</Button>
        </Grid>
      </div>
      <Fragment>
        {/* <button onClick={handleExport}>Click here to log stage data URL</button>
        <button onClick={handleImport}>Import data</button> */}                    
        <Stage id = 'stage' ref={stageRef}
          // className = {css.stage}
          width = {1000}
          height = {550}
          onMouseDown={handleMouseDown}
          onMousemove={handleMouseMove}
          onMouseup={handleMouseUp}
        >
          <Layer id = 'layer' ref={layerRef}>
            {lines.map((line, i) => (
              <Line
                key={i}
                points={line.points}
                stroke={line.lineStroke}
                strokeWidth={line.lineStrokeWidth}
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