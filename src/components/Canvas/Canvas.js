import './Canvas.css';
import { useEffect, useRef } from 'react';

function Canvas() {

  const canvasRef = useRef(null);

  useEffect(()=>{
    // const ctx = canvasRef.current.getContext('2d');
    // ctx.rect(100, 50, 150, 75);
    // ctx.stroke();
  }, []);

  return (
    <canvas className='canvas' ref={canvasRef}></canvas>
  );
}

export default Canvas;
