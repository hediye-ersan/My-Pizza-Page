import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";




function Home() {

    return (
        <div>
            <div className='form succes-center bg-img color-white' >
                <div className='home-p'>
                    <p>Teknolojik Yemekler</p>
                </div>
                <div className='home-container'>
                    <div>KOD</div>
                    <div>ACIKTIRIR</div>
                    <div>PİZZA,</div>
                    <div>DOYURUR</div>
                    <Link to="/orderPizza">
                        <Button className='buttons aciktim-button' data-cy='aciktim'>ACIKTIM!</Button>
                    </Link>
                </div>
            </div>
            <nav className='form items'>
                <div className="item" >
                    <img src='/icons/1.svg' />
                    <h4>YENİ! Kore</h4></div>

                <div className="item">
                    <img src='/icons/2.svg' />
                    <h4>Pizza</h4></div>

                <div className="item">
                    <img src='/icons/3.svg' />
                    <h4>Burger</h4></div>

                <div className="item">
                    <img src='/icons/4.svg' />
                    <h4>Kızartmalar</h4></div>

                <div className="item">
                    <img src='/icons/5.svg' />
                    <h4>Fast food</h4></div>

                <div className="item">
                    <img src='/icons/6.svg' />
                    <h4>Gazlı içecek</h4></div>
            </nav>

            <main className='form beige'>
                <div className='bg-lezzetus padding-card'>
                    <p className='lezzetus'>
                        Özel <br />
                        Lezzetus <br />
                    </p>
                    <h4 className='white'>
                        Position:Absolute Acı Burger
                    </h4>
                    <Link to='orderPizza'>
                        <Button className='btn-siparis' >SİPARİŞ VER</Button>
                    </Link>
                </div>


                <div className='bg-burger padding-card'>
                    <p className='lezzetus' style={{ fontSize: '2rem', fontFamily: 'Barlow' }}>
                        Hackathlon<br />
                        Burger Menü<br />
                    </p>

                    <Button className='btn-siparis' >SİPARİŞ VER</Button>

                </div>

                <div className='bg-npm'>
                    <p className='lezzetus' style={{ fontSize: '2rem', fontFamily: 'Barlow', color: 'black' }}>
                        <span style={{ color: '#CE2829;' }}>Çoooook</span> hızlı<br />
                        npm gibi kurye<br />
                    </p>


                    <Button className='btn-siparis' >SİPARİŞ VER</Button>

                </div>
            </main>

            <section className='form beige'>
                <div style={{ paddingTop: '3rem' }}>
                    <p className='npm-p'>en çok paketlenen menüler</p>
                    <p className='npm-p2'>
                        Acıktıran <br />
                        Kodlara Doyuran<br />
                        Lezzetler <br />
                    </p>
                </div>
                <nav className='form items' >

                    <div className="item item-border" >
                        <img src='/icons/1.svg' />
                        <h4>YENİ! Kore</h4></div>

                    <div className="item item-border">
                        <img src='/icons/2.svg' />
                        <h4>Pizza</h4></div>

                    <div className="item item-border">
                        <img src='/icons/3.svg' />
                        <h4>Burger</h4></div>

                    <div className="item item-border">
                        <img src='/icons/4.svg' />
                        <h4>Kızartmalar</h4></div>

                    <div className="item item-border">
                        <img src='/icons/5.svg' />
                        <h4>Fast food</h4></div>

                    <div className="item item-border">
                        <img src='/icons/6.svg' />
                        <h4>Gazlı içecek</h4></div>
                </nav>
                <div className='pizzalar justify-center'>
                    <div className='pizza-bg'>
                        <img src='/pictures/food-1.png' />
                        <p className='barlow pizza-p
                        '>Terminal Pizza
                        </p>
                        <div className='pizza-detay'>
                            <p>4.9</p>
                            <p>(200)</p>
                            <b>60</b>
                        </div>
                    </div>

                    <div className='pizza-bg'>
                        <img src='/pictures/food-2.png' />
                        <p className='barlow pizza-p
                        '>Position Absolute Acı Pizza
                        </p>
                        <div className='pizza-detay'>
                            <p>4.9</p>
                            <p>(200)</p>
                            <b>60</b>
                        </div>
                    </div>
                    <div className='pizza-bg'>
                        <img src='/pictures/food-3.png' />
                        <p className='barlow pizza-p
                        '>useeffect Tavuklu Burger
                        </p>
                        <div className='pizza-detay'>
                            <p>4.9</p>
                            <p>(200)</p>
                            <b>60</b>
                        </div>
                    </div>
                </div>
            </section>
            <footer className='form'>
                <h2 style={{ fontFamily: 'Londrina Solid' }}>
                    Teknolojik Yemekler
                </h2>
                <div className='iletisim'>
                    <div className='flex'>
                        <img src='/pictures/icons/icon-1.png' />
                        <p>341 Londonderry Road,
                            Istanbul Türkiye</p>
                    </div>
                    <div className='flex'>
                        <img src='/pictures/icons/icon-2.png' />
                        <p>aciktim@teknolojikyemekler.com</p>
                    </div>
                    <div className='flex'>
                        <img src='/pictures/icons/icon-3.png' />
                        <p>+90 216 123 45 67</p>
                    </div>
                </div>

                <div>
                    <h3>
                        Hot Menu
                    </h3>
                    <div className='iletisim'>
                    <p>Terminal Pizza</p>
                    <p>5 Kişilik Hackathlon Pizza</p>
                    <p>useEffect Tavuklu Pizza</p>
                    <p>Beyaz  Console Frosty</p>
                    <p>Testler Geçti Mutlu Burger</p>
                    <p>Position Absolute Acı Burger</p>
                    </div>
                </div>

                <div className='insta'>
                    <h3>
                        Instagram
                    </h3>
                    <div className='insta-img'>
                    <img src='/insta/li-0.png'/>
                    <img src='/insta/li-1.png'/>
                    <img src='/insta/li-2.png'/>
                    <img src='/insta/li-3.png'/>
                    <img src='/insta/li-4.png'/>
                    <img src='/insta/li-5.png'/>
                    </div>
                </div>

            </footer>

        </div>
    );
}
export default Home;