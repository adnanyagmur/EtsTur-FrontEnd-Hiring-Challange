

const DetailPage= ({route,navigation})=> {
   
    const {eventList} = route.params;
    console.log(eventList?.name)
    return(
        <div> 
        
     {eventList?.name}
        </div>
    )
}

export default DetailPage;