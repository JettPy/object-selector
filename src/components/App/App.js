import './App.css';
import image from '../../images/image.jpg';
import Canvas from '../Canvas/Canvas.js';
import Popup from '../Popup/Popup';

function App() {

  function getSelectedData() {
    console.log('Тест')
  }

  return (
    <main className='main'>
      <div className='main__container'>
        <img className='main__image' src={image} alt='Изображение с объектом'></img>
        <Canvas></Canvas>
      </div>
      <button className='main_add-button button' onClick={getSelectedData}>Добавить</button>
      <Popup></Popup>
    </main>
  );
}

export default App;
