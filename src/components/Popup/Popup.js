import './Popup.css';
import { useEffect, useRef } from 'react';

function Popup({ isOpen, onClose, x, y, width, height }) {

  const popupRef = useRef(null);
  const contentRef = useRef(null);

  function closePopup(event) {
    if (event.key === 'Escape') {
      onClose();
    }
  }

  function stopPropagation(event) {
    event.stopPropagation();
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', closePopup);
      popupRef.current.addEventListener('mousedown', onClose);
      contentRef.current.addEventListener('mousedown', stopPropagation);
    } else {
      document.removeEventListener('keydown', closePopup);
      popupRef.current.removeEventListener('mousedown', onClose);
      contentRef.current.removeEventListener('mousedown', stopPropagation);
    }
  }, [isOpen]);

  return (
    <div className={`popup${isOpen ? " popup_opened" : ""}`} ref={popupRef}>
      <div className="popup__content" ref={contentRef}>
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
