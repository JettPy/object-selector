import './Popup.css';

function Popup({ isOpen, onClose, x, y, width, height }) {

  return (
    <div className={`popup${isOpen ? " popup_opened" : ""}`}>
      <div className="popup__content">
        <div className='popup__message'>
          <p>&#123;</p>
          <p>&nbsp;"id": "1",</p>
          <p>&nbsp;"object_id": "1",</p>
          <p>&nbsp;"objectClass": "car",</p>
          <p>&nbsp;"region": &#123;</p>
          <p>&nbsp;&nbsp;"origin": &#123;</p>
          <p>&nbsp; &nbsp;&nbsp;"x": "{x}",</p>
          <p>&nbsp; &nbsp;&nbsp;"y": "{y}"</p>
          <p>&nbsp;&nbsp;&#125;,</p>
          <p>&nbsp;&nbsp;"size": &#123;</p>
          <p>&nbsp; &nbsp;&nbsp;"width": "{width}",</p>
          <p>&nbsp; &nbsp;&nbsp;"height": "{height}"</p>
          <p>&nbsp;&nbsp;&#125;</p>
          <p>&nbsp;&#125;</p>
          <p>&#125;</p>
        </div>
        <button className="button" type="button" onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}

export default Popup;
