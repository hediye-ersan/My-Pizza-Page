import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";

function Home() {

    return(
        <div className='form succes-center bg-img color-white' >
        <div className='home-p'>
        <p>Teknolojik Yemekler</p>
        </div>
        <div className='home-container'>
            <div>KOD</div>
            <div>ACIKTIRIR</div>
            <div>PİZZA,</div>
            <div>DOYURUR</div>
            <Link to ="/orderPizza">
        <Button className='buttons aciktim-button' data-cy='aciktim'>ACIKTIM!</Button>
        </Link>
        </div>
        
        
        </div>
    );
}
export default Home;