import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";

function Success() {

    return(
        <div className='form succes-center' style={{background:'#CE2829', color:'white'}}>
        <div className='succes-p'><p>Teknolojik Yemekler</p></div>
        <div className='succes-container'>
        <div>TEBRİKLER!</div>
        <div>SİPARİŞİNİZ</div>
        <div>ALINDI!</div>
        </div>
        </div>
    );
}
export default Success;