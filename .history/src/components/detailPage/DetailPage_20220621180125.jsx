
const DetailPage= ({route})=> {
  ;
    const {name} = route?.params;
    console.log(name)
    return(
        <div> 
            {JSON.stringify(name)}
        
     {eventList?.name}
        </div>
    )
}

export default DetailPage;