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
            <div className='form items'>
                <div className="item" >
                    <img src='/icons/1.svg'/>
                    <h4>YENİ! Kore</h4></div>

                <div className="item">
                <img src='/icons/2.svg'/>
                    <h4>Pizza</h4></div>

                <div className="item">
                <img src='/icons/3.svg'/>
                    <h4>Burger</h4></div>

                <div className="item">
                <img src='/icons/4.svg'/>
                    <h4>Kızartmalar</h4></div>

                <div className="item">
                <img src='/icons/5.svg'/>
                    <h4>Fast food</h4></div>

                <div className="item">
                <img src='/icons/6.svg'/>
                    <h4>Gazlı içecek</h4></div>
            </div>

        </div>
    );
}
export default Home;