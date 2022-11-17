import './App.css';
import image from '../../images/image.jpg';
import Canvas from '../Canvas/Canvas.js';
import Popup from '../Popup/Popup.js';
import { useState, useEffect } from 'react';
import { imageData } from '../../data.js';

function App() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [height, setHeight] = useState(imageData.height);
  const [width, setWidth] = useState(imageData.width);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [curWidth, setCurWidth] = useState(1000);

  function getSelectedData() {
    setIsPopupOpen(true);
  }

  function closePopUp() {
    setIsPopupOpen(false);
  }

  function setData(left, top, right, bottom) {
    if (right < left) {
      setX(right);
      setWidth(left - right);
    } else {
      setX(left);
      setWidth(right - left);
    }
    if (bottom < top) {
      setY(bottom);
      setHeight(top - bottom);
    } else {
      setY(top);
      setHeight(bottom - top);
    }
  }

  function reset() {
    setX(0);
    setY(0);
    setHeight(imageData.height);
    setWidth(imageData.width);
  }

  function setCurrentWidth() {
    const width = window.innerWidth;
    if (width > 1100) {
      setCurWidth(1000);
    } else if (width > 900) {
      setCurWidth(800);
    } else if (width > 700) {
      setCurWidth(600);
    } else if (width > 500) {
      setCurWidth(400);
    } else if (width > 350) {
      setCurWidth(300);
    } else {
      setCurWidth(200);
    }
    reset();
  }

  useEffect(() => {
    setCurrentWidth();
    window.addEventListener('resize', setCurrentWidth);
  }, []);

  return (
    <main className='main'>
      <div className='main__container'>
        <img className='main__image' src={image} alt='Изображение с объектом'></img>
        <Canvas
          origWidth={imageData.width}
          origHeight={imageData.height}
          curWidth={curWidth}
          setData={setData}
        >
        </Canvas>
      </div>
      <button className='button' type="button" onClick={getSelectedData}>Добавить</button>
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopUp}
        x={x}
        y={y}
        width={width}
        height={height}
      >
      </Popup>
    </main>
  );
}

export default App;
