import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Label, Input, Button, Toast }
    from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const malzemeList = [
    "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Ananas", "Kabak"
]
const boyutlar = [
    "Küçük", "Orta", "Büyük"
]

const initialForm = {
    name: "",
    boyut: "",
    hamurKalinligi: "",
    malzemeler: [],
    siparisNotu: "",
    terms1: false,
    terms2: false
};

function OrderPizza() {
    const [form, setForm] = useState(initialForm);
    const [formErrors, setFormErrors] = useState({});
    const [toplam, setToplam] = useState(0)
    const [quantity, setQuantity] = useState(1);

    const history = useHistory();

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };


    useEffect(() => {
        const fiyat = 85.50;
        const secimler = form.malzemeler.length * 5;
        const toplamFiyat = (fiyat + secimler);
        const total = (toplamFiyat * quantity).toFixed(2);
        setToplam(total);
    }, [form.malzemeler, quantity]);

    useEffect(() => {
        const errors = {};

        if (form.name.length < 3 && form.name.length > 0) {
            errors.name = "İsim en az 3 karakter olmalı.";
        }

        if (form.malzemeler.length < 4) {
            errors.malzemeler = "En az 4 malzeme seçmelisiniz.(5₺)";
        }

        if (form.malzemeler.length > 10) {
            errors.malzemeler = "En fazla 10 malzeme seçebilirsiniz.";
        }

        setFormErrors(errors); // Hata mesajlarını güncelle
    }, [form]);


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


    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("Form gönderiliyor:", form);

        axios.post('https://reqres.in/api/pizza')
            .then(function (response) {
                // handle success
                console.log(response);
                toast.success('Siparişiniz başarıyla alındı!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setForm(initialForm);
                setFormErrors({});

                setTimeout(() => {
                    history.push({
                        pathname: "/success",
                        state: {
                            boyut: form.boyut,
                            hamurKalinligi: form.hamurKalinligi,
                            malzemeler: form.malzemeler,
                            siparisNotu: form.siparisNotu,
                            seçimler: form.malzemeler.length,
                            toplam: toplam,

                        }
                    });
                }, 2000);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                toast.error("Bir hata oluştu. Lütfen tekrar deneyin.", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeButton: false,
                    draggable: false,
                    pauseOnHover: true
                });
            })
            .finally(function () {
                // always executed
            });


    };


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <div className='header'>
                    <h1>Teknolojik Yemekler</h1>
                </div>
                <div className='form'>
                    <div className='secimler beige'>
                        <img className='img-center terminal-pizza'src='/pictures/form-banner.png'/>
                        <div className='form gap'>
                            <Link to="/" style={{ textDecoration: 'none' }} className="h5" data-cy='anasayfa'>Anasayfa</Link>


                            <h5>Sipariş Oluştur</h5>
                        </div>
                        <h2>
                            Position Absolute Acı Pizza
                        </h2>
                        <div className='form-row'>
                            <h2>85.50₺</h2>
                            <p>4.9</p>
                            <p>(200)</p></div>
                        <p className='justify'>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>

                    </div>


                    <div className='form-space'>
                        <Label htmlFor="name">Ad-Soyad</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Adınızı ve soyadınızı giriniz."
                            type="text"
                            onChange={handleChange}
                            value={form.name}
                            data-cy="input-name"
                        />
                        {formErrors.name && <p style={{ color: 'red' }}>{formErrors.name}</p>}
                    </div>

                    <div className='form-row form-space'>
                        <div>
                            <Label>Boyut Seç</Label>
                            <div className='column'>
                                {boyutlar.map((boyut) => (
                                    <Label key={boyut}>
                                        <input
                                            type='radio'
                                            name='boyut'
                                            value={boyut}
                                            onChange={handleChange}
                                            checked={form.boyut === boyut}
                                            data-cy={`input-size-${boyut.toLowerCase()}`}
                                        />
                                        {boyut}
                                    </Label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="hamur">Hamur Seç</Label>
                            <Input
                                type="select"
                                name="hamurKalinligi"
                                id="hamur"
                                value={form.hamurKalinligi}
                                onChange={handleChange}
                                data-cy="input-hamur"
                            >
                                <option value="-1" disabled>Hamur Kalınlığı</option>
                                <option value="Ince">İnce</option>
                                <option value="Orta">Orta</option>
                                <option value="Kalın">Kalın</option>
                            </Input>
                        </div>
                    </div>
                    <div className='malzeme-container form-space'>
                        <Label htmlFor='malzemeler'>Ek Malzemeler</Label>
                        {formErrors.malzemeler && (
                            <p>{formErrors.malzemeler}</p>)}
                        {malzemeList.map((malzeme) => (
                            <div key={malzeme}>
                                <Label check style={{ margin: '0.5rem 0', position: 'relative'  }}>
                                    <Input 
                                        id='malzemeler'
                                        type="checkbox"
                                        name="malzemeler"
                                        value={malzeme}
                                        onChange={handleChange}
                                        data-cy={`input-${malzeme.toLowerCase()}`}
                                        checked={form.malzemeler.includes(malzeme)}
                                        disabled={form.malzemeler.length >= 10 && !form.malzemeler.includes(malzeme)}

                                    />
                                    {malzeme}

                                </Label>
                            </div>
                        ))}

                    </div>
                    <div>
                        <Label htmlFor="siparisNotu">Sipariş Notu</Label>
                        <Input
                            className='beige'
                            id="siparisNotu"
                            name="siparisNotu"
                            placeholder="Siparişine eklemek istediğin bir not var mı?"
                            type="textarea"
                            onChange={handleChange}
                            value={form.siparisNotu}
                        />
                    </div>

                    <div className='barlow siparis-toplam'>
                        <p>Sipariş Toplamı</p>
                        <p>Seçimler: {(form.malzemeler.length * 5).toFixed(2)}₺</p>
                        <p style={{ color: 'red' }}>Toplam: {toplam}₺</p>
                    </div>
                    <div className='form-row'>

                        <div class="product-buttons form-row">
                            <Button type='button' className='buttons' onClick={handleDecrement}>-</Button>
                            <div>{quantity}</div>
                            <Button type='button' className='buttons' onClick={handleIncrement}>+</Button>
                        </div>


                        <Button className='buttons' type='submit' data-cy="siparis-ver" disabled={form.name.length < 3 || !form.boyut || form.malzemeler.length < 4 || form.malzemeler.length > 10}>Sipariş Ver</Button>

                    </div>
                </div>
            </Form>
            
        </>
    )
}

export default OrderPizza;
