import './App.css';
import image from '../../images/image.jpg';
import Canvas from '../Canvas/Canvas.js';
import Popup from '../Popup/Popup.js';
import { useState } from 'react';

function App() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function getSelectedData() {
    setIsPopupOpen(true);
  }

  function closePopUp() {
    setIsPopupOpen(false);
  }

  return (
    <main className='main'>
      <div className='main__container'>
        <img className='main__image' src={image} alt='Изображение с объектом'></img>
        <Canvas></Canvas>
      </div>
      <button className='button' type="button"  onClick={getSelectedData}>Добавить</button>
      <Popup isOpen={isPopupOpen} onClose={closePopUp}></Popup>
    </main>
  );
}

export default App;
