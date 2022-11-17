import { useEffect, useRef } from 'react';
import './Canvas.css';

function Canvas({ origWidth, origHeight, curWidth, setData }) {

  const canvasRef = useRef(null);

  useEffect(() => {
    canvasRef.current.width = origWidth;
    canvasRef.current.height = origHeight;
    const ctx = canvasRef.current.getContext('2d');
    let left, right, top, bottom = 0;
    const k = origWidth / curWidth;
    ctx.strokeStyle = 'yellow';
    if (k < 2) {
      ctx.lineWidth = 2;
    } else if (k < 5) {
      ctx.lineWidth = 5;
    } else if (k < 10) {
      ctx.lineWidth = 10;
    } else {
      ctx.lineWidth = 15;
    }
    canvasRef.current.onmousedown = function (event) {
      left = Math.round(event.offsetX * k);
      top = Math.round(event.offsetY * k);
      canvasRef.current.onmousemove = function (event) {
        right = Math.round(event.offsetX * k);
        bottom = Math.round(event.offsetY * k);
        ctx.clearRect(0, 0, origWidth, origHeight);
        ctx.beginPath();
        ctx.rect(left, top, right - left, bottom - top);
        ctx.stroke();
      };

      canvasRef.current.onmouseup = function () {
        canvasRef.current.onmousemove = null;
        canvasRef.current.onmouseup = null;
        setData(left, top, right, bottom);
      };
    }
  }, [curWidth]);

  return (
    <canvas className='canvas' ref={canvasRef}></canvas>
  );
}

export default Canvas;
