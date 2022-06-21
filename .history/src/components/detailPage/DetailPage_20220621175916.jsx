
const DetailPage= ({route})=> {
  ;
    const {eventList} = route.params;
    console.log(eventList?.name)
    return(
        <div> 
            {JSON.stringify(eventList?.name)}
        
     {eventList?.name}
        </div>
    )
}

export default DetailPage;