
const DetailList = ({bitisTarihi,address, description,price,city,district ,ticketLink,venue})=> {

    return(
        <div> 

<div >

<p > ETKİNLİK BİTİŞ TARİHİ: {bitisTarihi} </p>
<p>ETKİNLİK YERİ : {venue}</p>
<p>ETKİNLİK YERİNİN ADRESİ : {address}    {district} /  {city}</p>
<a href={ticketLink}> BİLET ALMAK İÇİN TIKLAYINIZ</a>
<p >AÇIKLAMA : {description}</p>
<p > ETKİNLİK ÜCRETSİZ Mİ? : {String(price).toLocaleUpperCase()} </p>






</div>

        </div>
    )
}

export default DetailList;