import DetailList from "../detailList/DetailList";

const DetailPage= (bilgiler)=> {
    
    return(
        <div> 
        {bilgiler?.name}
        <DetailList></DetailList>

        </div>
    )
}

export default DetailPage;