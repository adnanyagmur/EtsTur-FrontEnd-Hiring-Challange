
const EventList = ({name,address,city,district ,ticketLink,venue, image,bitisTarihi,basTarihi , category, description,price})=> {

    return(
        <div >
        <div >
            <div >
                <img src={image} alt="crypto"></img>
                <h1>{name}</h1>
                <p > KATEGORİSİ : {category}</p>
            </div>
            <div >
                <p >AÇIKLAMA : {description}</p>
                
              
                    <p > ETKİNLİK ÜCRETSİZ Mİ? : {String(price).toLocaleUpperCase()} </p>
                    <p > ETKİNLİK BAŞLANGİÇ TARİHİ: {basTarihi}</p>
                    <p > ETKİNLİK BİTİŞ TARİHİ: {bitisTarihi} </p>
                    <p>ETKİNLİK YERİ : {venue}</p>
                    <p>ETKİNLİK YERİNİN ADRESİ : {address}    {district} /  {city}</p>


                    <a href={ticketLink}> BİLET ALMAK İÇİN TIKLAYINIZ</a>



                

                    

            </div>
        </div>
    </div>
    )
}

export default EventList;