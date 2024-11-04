import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import { FormData, FormGroup, Label, Input, Button } from 'reactstrap';

function App() {
  const [form, setForm] = {
    
      name: Hediye,
      boyut: [Kücük,Orta,Buyuk],
      malzemeler: [Pepperoni,Sosis,KanadaJambonu,TavukIzgara,Soğan,Domates,Misir,Sucuk,Jalepeno,Sarımsak,Biber,Sucuk,Ananas,Kabak],
      siparisNotu: "",
   
  
  }

  return (
    <>

      <div><h1>Teknolojik Yemekler</h1>
        <div>
          <h3>Anasayfa</h3>
          <h3>Seçenekler</h3>
          <h3>Sipariş Oluştur</h3>
        </div></div>

      <div>
        <h2>
          Position Absolute Acı Pizza
        </h2>
        <h1>85.50₺</h1>
        <p>4.9</p>
        <p>(200)</p>
      </div>
      <form>
        <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
        <FormGroup>
        <Label for="name">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter your email"
          type="email"
          onChange={handleChange}
          value={form.email}
        />
      </FormGroup>
      </form>
    </>
  )
}

export default App
