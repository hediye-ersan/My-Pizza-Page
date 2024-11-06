import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";

function Home() {

    return(
        <div>
        <h3>Teknolojik Yemekler</h3>
        <p>KOD ACIKTIRIR PİZZA, DOYURUR</p>
        <Link to ="/my-form">
        <Button>Acıktım!</Button>
        </Link>
        </div>
    );
}
export default Home;