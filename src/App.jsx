import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const malzemeList = [
  "Pepperoni", "Sosis", "KanadaJambonu", "TavukIzgara", "Soğan", "Domates", "Misir", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Sucuk", "Ananas", "Kabak"
]


const initialForm = {
  name: "",
  boyutlar: "Kucuk",
  hamurKalinligi:"",
  malzemeler: [],
  siparisNotu: "",
  terms1: false,
  terms2: false
};

function App() {
  const [form, setForm] = useState(initialForm);



  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setForm((prevForm) => {
        const updatedMalzemeler = checked
          ? [...prevForm.malzemeler, value]
          : prevForm.malzemeler.filter(malzeme => malzeme !== value);

        return { ...prevForm, malzemeler: updatedMalzemeler };
      });
    } else {
      setForm((prevForm) => ({ ...prevForm, [name]: type === 'checkbox' ? checked : value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    setForm(initialForm); // Formu sıfırla
  };



  return (
    <>

      <div><h1>Teknolojik Yemekler</h1>
        <div className='head'>
          <h3>Anasayfa</h3>
          <h3>Seçenekler</h3>
          <h3>Sipariş Oluştur</h3>
        </div></div>

      <div>
        <h2>
          Position Absolute Acı Pizza
        </h2>
        <div className='head2'>
          <h1>85.50₺</h1>
          <p>4.9</p>
          <p>(200)</p></div>

      </div>
      <form onSubmit={handleSubmit}>
        <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
        <FormGroup>
          <Label for="name">Ad-Soyad</Label>
          <Input
            id="name"
            name="name"
            placeholder="Adınızı ve soyadınızı giriniz."
            type="text"
            onChange={handleChange}
            value={form.name}
          />
        </FormGroup>
        <FormGroup>
          <Label>Boyut Seç</Label>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="boyut"
                value="Kucuk"
                onChange={handleChange}
                checked={form.boyut === "Kucuk"}
              />
              Küçük
            </Label>            
          </FormGroup>
          
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="boyut"
                value="Orta"
                onChange={handleChange}
                checked={form.boyut === "Orta"}
              />
              Orta
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="boyut"
                value="Buyuk"
                onChange={handleChange}
                checked={form.boyut === "Buyuk"}
              />
              Büyük
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="hamur">Hamur Seç</Label>
          <Input 
            type="select" 
            name="hamurKalinligi" 
            id="hamur" 
            value={form.hamurKalinligi} 
            onChange={handleChange}
          >
            <option value="">Hamur Kalınlığı</option>
            <option value="Ince">İnce</option>
            <option value="Orta">Orta</option>
            <option value="Kalın">Kalın</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Ek Malzemeler</Label>
          {malzemeList.map((malzeme) => (
            <FormGroup check key={malzeme}>
              <Label check>
                <Input
                  type="checkbox"
                  name="malzemeler"
                  value={malzeme}
                  onChange={handleChange}
                  checked={form.malzemeler.includes(malzeme)}
                />
                {malzeme}
              </Label>
            </FormGroup>
          ))}
        </FormGroup>
        <FormGroup>
          <Label for="not">Sipariş Notu</Label>
          <Input
            id="not"
            name="not"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            type="text"
            onChange={handleChange}
            value={form.siparisNotu}
          />
        </FormGroup>
      </form>
    </>
  )
}

export default App;
