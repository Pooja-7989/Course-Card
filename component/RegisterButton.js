import React,{useState} from 'react'
import Button from './Button';
import Popup from './Popup';
import Register from './register';

export default function RegisterButton() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  }
  return (

      <div className="App">
      <Button onClick={togglePopup} />
      {isPopupOpen && (
        <Popup onClose={togglePopup}>
          <Register />
        </Popup>
      )}
    </div>
  )
}
