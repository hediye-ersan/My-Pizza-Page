import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import { Form, Label, Input, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const malzemeList = [
  "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Ananas", "Kabak"
]


const initialForm = {
  name: "",
  boyutlar: "Kucuk",
  hamurKalinligi: "",
  malzemeler: [],
  siparisNotu: "",
  terms1: false,
  terms2: false
};

function App() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("")
  
  useEffect(() => {
    if (form.name.length < 3 && form.name.length > 0) {
      setError("İsim en az 3 karakter olmalı.");
    } else {
      setError("");
    }
  }, [form.name]);


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

    if (!form.name || form.name.length < 3) {
      setError("İsim en az 3 karakter olmalı.");
      return; // Hata varsa form gönderilmesin
    }    

    console.log(form);
    setForm(initialForm);// Formu sıfırla
    setError("") 
  };

  const fiyat = 85.50;
  const secimler = form.malzemeler.length * 5;
  const toplam = (fiyat + secimler).toFixed(2); // Toplamı formatla


  return (
    <>
      <div className='header'>
        <h1>Teknolojik Yemekler</h1>
        <div className='gap'>
          <h3>Anasayfa</h3>
          <h3>Seçenekler</h3>
          <h3>Sipariş Oluştur</h3>
        </div></div>
      <div className='form'>
        <div>
          <h2 className='gap'>
            Position Absolute Acı Pizza
          </h2>
          <div className='form-row'>
            <h2>85.50₺</h2>
            <p>4.9</p>
            <p>(200)</p></div>
          <p className='right'>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>

        </div>

        <Form onSubmit={handleSubmit}>

          <div>
            <Label htmlFor="name">Ad-Soyad</Label>
            <Input
              id="name"
              name="name"
              placeholder="Adınızı ve soyadınızı giriniz."
              type="text"
              onChange={handleChange}
              value={form.name}
            />
            {error && <p style={{color:'red'}}>{error}</p>}
          </div>

          <div className='form-row'>
            <div>
              <Label>Boyut Seç</Label>
              <div>
                <Label>
                  <Input
                    type="radio"
                    name="boyut"
                    value="Kucuk"
                    onChange={handleChange}
                    checked={form.boyut === "Kucuk"}
                  />
                  Küçük
                </Label>

                <Label >
                  <Input
                    type="radio"
                    name="boyut"
                    value="Orta"
                    onChange={handleChange}
                    checked={form.boyut === "Orta"}
                  />
                  Orta
                </Label>

                <Label>
                  <Input
                    type="radio"
                    name="boyut"
                    value="Buyuk"
                    onChange={handleChange}
                    checked={form.boyut === "Buyuk"}
                  />
                  Büyük
                </Label>
              </div>
            </div>

            <div>
              <Label htmlFor="hamur">Hamur Seç</Label>
              <Input
                type="select"
                name="hamurKalinligi"
                id="hamur"
                value={form.hamurKalinligi}
                defaultValue={"-1"}
                onChange={handleChange}
              >
                <option value="-1" disabled={true}>Hamur Kalınlığı</option>
                <option value="Ince">İnce</option>
                <option value="Orta">Orta</option>
                <option value="Kalın">Kalın</option>
              </Input>
            </div>
          </div>
          <div>
            <Label htmlFor='malzemeler'>Ek Malzemeler</Label>
            {malzemeList.map((malzeme) => (
              <div key={malzeme}>
                <Label check>
                  <Input
                    id='malzemeler'
                    type="checkbox"
                    name="malzemeler"
                    value={malzeme}
                    onChange={handleChange}
                    checked={form.malzemeler.includes(malzeme)}
                  />
                  {malzeme}
                </Label>
              </div>
            ))}
          </div>
          <div>
            <Label for="siparisNotu">Sipariş Notu</Label>
            <Input
              id="siparisNotu"
              name="siparisNotu"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              type="text"
              onChange={handleChange}
              value={form.siparisNotu}
            />
          </div>

          <div>
            <p>Sipariş Toplamı</p>
            <p>Seçimler: {secimler}₺</p>
            <p>Toplam: {toplam}₺</p>
          </div>
          <div>
            <Button type='button'>Ekleme Çıkarma</Button>
            <Button type='submit' disabled={form.name.length<3}>Sipariş Ver</Button>

          </div>

        </Form>
      </div>
    </>
  )
}

export default App;
