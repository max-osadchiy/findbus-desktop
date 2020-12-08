import React from 'react';
import logo_img from './static/img/Logo.svg';
import phone_img from './static/img/phone.svg';
import apple_img from './static/img/apple.svg';
import google_img from './static/img/google.svg';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <img src={logo_img} alt="Logo" />
      <div>
        <div>
          <h1>Хочешь заказать автобус для поездки?</h1>
          <p>Наш сервис поможет это сделать!</p>
          <h3>В FindBus мы свяжем вас с водителями и это решит вашу проблему.</h3>
          <div>
            <img src={apple_img} alt=""/>
            <img src={google_img} alt=""/>
          </div>
        </div>
        <div>
          <img src={phone_img} alt="Phone"/>
        </div>
      </div>
    </div>
  );
}

export default App;
