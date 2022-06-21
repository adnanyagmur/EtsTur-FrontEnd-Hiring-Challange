
const DetailPage= ()=> {
 

   
    const name = localStorage.getItem("name");
    const image = localStorage.getItem("image");
    const category = localStorage.getItem("category");
    const description = localStorage.getItem("description");
    const price = localStorage.getItem("price");
    const basTarih =  localStorage.getItem("basTarih");
    const bitistarihi = localStorage.getItem("bitistarihi");
    const venue= localStorage.getItem("venue");
    const ticketLink = localStorage.getItem("ticketLink");
    const address = localStorage.getItem("address");
    const district=  localStorage.getItem("district");
   

  
    return(
        <div> 
     {name}  +  {image} + {category} + {description} + {price} + {basTarih}  +{bitistarihi}

     {venue }  + {ticketLink}  + {address} + {district}
        
    
     
        </div>
    )
}

export default DetailPage;