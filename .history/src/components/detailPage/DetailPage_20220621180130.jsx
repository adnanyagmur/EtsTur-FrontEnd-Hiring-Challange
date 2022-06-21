
const DetailPage= ({route})=> {
  ;
    const {name} = route?.params;
    console.log(name)
    return(
        <div> 
            {JSON.stringify(name)}
        
     
        </div>
    )
}

export default DetailPage;