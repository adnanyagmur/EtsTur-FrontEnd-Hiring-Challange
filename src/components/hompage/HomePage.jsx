import React, {useState, useEffect} from 'react';
import axios from 'axios';
import EventList from '../eventList/EventList';

function HomePage() {

  const [eventList, setEventList] = useState([])

  useEffect(()=> {
      axios.get(
        'https://backend.etkinlik.io/api/v2/events',{headers: {
          "X-Etkinlik-Token" : "966d3071605c47ca2a58476b4b0083b1"
        }
      }
        ).then(res => {
          setEventList(res.data);
          //console.log(res.data);
        }).catch(error => console.log(error))
    },[]);

console.log(eventList)

    return(
        <div> 

      <div>
      {eventList.items?.map((items)=>
   
   <p >{items.category.name}</p>
  )}

    </div>
<div>
  {eventList.items?.map((eventList,key)=>
  
  <EventList key={eventList?.id} 
      name={eventList?.name}
      image={eventList?.poster_url}
      category={eventList?.category?.name}
      description={eventList?.content?.replace("<br /><br />"," ").replace("<br /><br />"," ").replace("</strong>"," ").replace("<br />"," ")
      .replace("<strong>"," ").replace("<br /><strong>"," ")
    .replace("</strong><br />"," ")
  .replace("</p>"," ").replace("<p>"," ").replace("<p>"," ")
.replace("</p>"," ").replace("<br /><br />"," ").replace("<br /><br />"," ").replace("</strong>"," ").replace("<br />"," ")
.replace("<strong>"," ").replace("<br /><strong>"," ")
.replace("</strong><br />"," ")
.replace("</p>"," ").replace("<p>"," ").replace("<p>"," ")
.replace("</p>"," ").replace("<br /><br />"," ").replace("<br /><br />"," ").replace("</strong>"," ").replace("<br />"," ")
.replace("<strong>"," ").replace("<br /><strong>"," ")
.replace("</strong><br />"," ")
.replace("</p>"," ").replace("<p>"," ").replace("<p>"," ")
.replace("</p>"," ").replace("<br /><br />"," ").replace("<br /><br />"," ").replace("</strong>"," ").replace("<br />"," ")
.replace("<strong>"," ").replace("<br /><strong>"," ")
.replace("</strong><br />"," ")
.replace("</p>"," ").replace("<p>"," ").replace("<p>"," ")
.replace("</p>"," ").replace("<br /><br />"," ").replace("<br /><br />"," ").replace("</strong>"," ").replace("<br />"," ")
.replace("<strong>"," ").replace("<br /><strong>"," ")
.replace("</strong><br />"," ")
.replace("</p>"," ").replace("<p>"," ").replace("<p>"," ")
.replace("</p>"," ").replace("<br /><br />"," ").replace("<br /><br />"," ").replace("</strong>"," ").replace("<br />"," ")
.replace("<strong>"," ").replace("<br /><strong>"," ")
.replace("</strong><br />"," ")
.replace("</p>"," ").replace("<p>"," ").replace("<p>"," ")
.replace("</p>"," ").replace("<br /><br />"," ").replace("<br /><br />"," ").replace("</strong>"," ").replace("<br />"," ")
.replace("<strong>"," ").replace("<br /><strong>"," ")
.replace("</strong><br />"," ")
.replace("</p>"," ").replace("<p>"," ").replace("<p>"," ")
.replace("</p>"," ").replace("<br /><br />"," ").replace("<br /><br />"," ").replace("</strong>"," ").replace("<br />"," ")
.replace("<strong>"," ").replace("<br /><strong>"," ")
.replace("</strong><br />"," ")
.replace("</p>"," ").replace("<p>"," ").replace("<p>"," ")                  //////asdasd
.replace("</p>"," ").replace("<br /><br />"," ").replace("<br /><br />"," ").replace("</strong>"," ").replace("<br />"," ")
.replace("<strong>"," ").replace("<br /><strong>"," ")
.replace("</strong><br />"," ")
.replace("</p>","").replace("<p>"," ").replace("<p>"," ")
.replace("</p>"," ").replace("<br /><br />"," ").replace("<br /><br />"," ").replace("</strong>"," ").replace("<br />"," ")
.replace("<strong>"," ").replace("<br /><strong>"," ")
.replace("</strong><br />"," ")
.replace("</p>"," ").replace("<p>"," ").replace("<p>"," ")
.replace("</p>"," ").replace("<br /><br />"," ").replace("<br /><br />"," ").replace("</strong>"," ").replace("<br />"," ")
.replace("<strong>"," ").replace("<br /><strong>"," ")
.replace("</strong><br />"," ")
.replace("</p>"," ").replace("<p>"," ").replace("<p>"," ")
.replace("</p>"," ").replace("<br /><br />"," ").replace("<br /><br />"," ").replace("</strong>"," ").replace("<br />"," ")
.replace("<strong>"," ").replace("<br /><strong>"," ")
.replace("</strong><br />"," ")
.replace("</p>"," ").replace("<p>"," ").replace("<p>"," ")
.replace("</p>"," ").replace("<br /><br />"," ").replace("<br /><br />"," ").replace("</strong>"," ").replace("<br />"," ")
.replace("<strong>"," ").replace("<br /><strong>"," ")
.replace("</strong><br />"," ")
.replace("</p>"," ").replace("<p>"," ").replace("<p>"," ")
.replace("</p>"," ").replace("<br /><br />"," ").replace("<br /><br />"," ").replace("</strong>"," ").replace("<br />"," ")
.replace("<strong>"," ").replace("<br /><strong>"," ")
.replace("</strong><br />"," ")
.replace("</p>"," ").replace("<p>"," ").replace("<p>"," ")
.replace("</p>"," ").replace("<br /><br />"," ").replace("<br /><br />"," ").replace("</strong>"," ").replace("<br />"," ")
.replace("<strong>"," ").replace("<br /><strong>"," ")
.replace("</strong><br />"," ")
.replace("</p>"," ").replace("<p>"," ").replace("<p>"," ")
.replace("</p>"," ").replace("<br /><br />"," ").replace("<br /><br />"," ").replace("</strong>"," ").replace("<br />"," ")
.replace("<strong>"," ").replace("<br /><strong>"," ")
.replace("</strong><br />"," ")
.replace("</p>"," ").replace("<p>"," ").replace("<p>"," ")
.replace("</p>"," ").replace("<br /><br />"," ").replace("<br /><br />"," ").replace("</strong>"," ").replace("<br />"," ")
.replace("<strong>"," ").replace("<br /><strong>"," ")
.replace("</strong><br />"," ")
.replace("</p>"," ").replace("<p>"," ").replace("<p>"," ")
.replace("</p>"," ").replace("<br /><br />"," ").replace("<br /><br />"," ").replace("</strong>"," ").replace("<br />"," ")
.replace("<strong>"," ").replace("<br /><strong>"," ")
.replace("</strong><br />"," ")
.replace("</p>"," ").replace("<p>"," ").replace("<p>"," ")
.replace("</p>"," ").replace("<em>"," ").replace("</em>"," ").replace("<br />"," ")
.replace("<br />"," ")}
      price={eventList?.is_free}
      basTarihi ={eventList?.start?.replace("T","   Time :  ")}
      bitisTarihi ={eventList?.end?.replace("T","   Time :  ")}
      venue ={eventList?.venue?.name}
      ticketLink={eventList?.ticket_url}
      address={eventList?.venue?.address}
      city={eventList?.venue?.city?.name}
      district ={eventList?.venue?.district?.name}
      ></EventList>
  
  )}
      
  
      </div>
        </div>
    )
}

export default HomePage;