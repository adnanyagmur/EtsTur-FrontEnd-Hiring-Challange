
const DetailPage= ()=> {
 

   
    const name = localStorage.getItem("name",name);
    const image = localStorage.getItem("image",image);
    const category = localStorage.getItem("category",category);
    const description = localStorage.getItem("description",description);
    const price = localStorage.getItem("price",price);
    const basTarih =  localStorage.getItem("basTarih",basTarih);
    const bitistarihi = localStorage.getItem("bitistarihi",bitistarihi);
    const venue= localStorage.getItem("venue",venue);
    const ticketLink = localStorage.getItem("ticketLink",ticketLink);
    const address = localStorage.getItem("address",address);
    const district=  localStorage.getItem("district",district);
   

    console.log("data:"+data)
    return(
        <div> 
     {name}  +  {image} + {category} + {description} + {price} + {basTarih}  +{bitistarihi}

     {venue }  + {ticketLink}  + {address} + {district}
        
    
     
        </div>
    )
}

export default DetailPage;