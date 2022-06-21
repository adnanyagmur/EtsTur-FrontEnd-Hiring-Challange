import DetailList from "../detailList/DetailList";

const DetailPage= ({name,eventList, image,basTarihi , category,price})=> {
    
    return(
        <div> 
        {name}
        <DetailList></DetailList>

        </div>
    )
}

export default DetailPage;