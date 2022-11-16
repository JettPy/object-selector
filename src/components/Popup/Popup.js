import './Popup.css';

function Popup({ isOpen, onClose }) {

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
          <p>&nbsp; &nbsp;&nbsp;"x": "1306",</p>
          <p>&nbsp; &nbsp;&nbsp;"y": "1110"</p>
          <p>&nbsp;&nbsp;&#125;,</p>
          <p>&nbsp;&nbsp;"size": &#123;</p>
          <p>&nbsp; &nbsp;&nbsp;"width": "794",</p>
          <p>&nbsp; &nbsp;&nbsp;"height": "386"</p>
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
