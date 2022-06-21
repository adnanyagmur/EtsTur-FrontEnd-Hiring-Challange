
const DetailPage= ()=> {
 

    const data = localStorage.getItem("event")

    console.log("data:"+data)
    return(
        <div> 
     
        {localStorage.getItem("name")}
     
        </div>
    )
}

export default DetailPage;