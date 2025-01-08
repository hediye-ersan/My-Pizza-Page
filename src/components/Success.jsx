import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Pizza } from 'lucide-react';


function Success() {
    const location = useLocation();
    const { boyut, hamurKalinligi, malzemeler, toplam } = location.state || {};

    return (
        <div className='form succes-center' style={{ background: '#CE2829', color: 'white' }}>
            <div className='succes-p'><p>Teknolojik Yemekler</p></div>
            <div><h4 className='text-[#FDC913] font-satisfy text-3xl'>🍕 Lezzetin Yolda 🍕</h4></div>
            <div><h2 className='font-roboto text-[4rem] pb-12 border-b border-b-white'>SİPARİŞ ALINDI</h2></div>
            <div className='font-barlow flex flex-col gap-2 py-12'>
                <h3 className='text-[1.5rem] text-center '>Position Absolute Acı Pizza</h3>
                <div className='pl-12 pt-4'>
                    <p><strong>Boyut:</strong> {boyut}</p>
                    <p><strong>Hamur Kalınlığı:</strong> {hamurKalinligi}</p>
                    <p><strong>Malzemeler:</strong> {malzemeler ? malzemeler.join(', ') : "Yok"}</p>
                </div>
            </div>
            <div className='p-12 border border-white rounded-md'>
                <h3 className='text-[1.5rem] text-center'>Sipariş Toplamı</h3>
                <div className='flex justify-between pt-2'>
                    <p>Toplam</p>
                    <p>{toplam}₺</p>
                </div>
            </div>
            <div className="pt-4">
                <Link
                    to="/" className="flex justify-center items-center gap-2 text-xl font-satisfy">
                        
                    <Pizza />     
                    Anasayfaya Dön...
                    
                </Link>
            </div>
        </div>
        
    );
}
export default Success;