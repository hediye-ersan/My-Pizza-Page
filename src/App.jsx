import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import { Form, Label, Input, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyForm from './components/MyForm';


function App() {

  return (
    <>
      <div className='header'>
        <h1>Teknolojik Yemekler</h1>
        <div className='form gap'>
          <h5>Anasayfa</h5>
          <h5>Seçenekler</h5>
          <h5>Sipariş Oluştur</h5>
        </div></div>
      <div className='form'>
        <div>
          <h2>
            Position Absolute Acı Pizza
          </h2>
          <div className='form-row'>
            <h2>85.50₺</h2>
            <p>4.9</p>
            <p>(200)</p></div>
          <p className='justify'>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>

        </div>
        <MyForm />
      </div>
    </>
  )
}

export default App;
