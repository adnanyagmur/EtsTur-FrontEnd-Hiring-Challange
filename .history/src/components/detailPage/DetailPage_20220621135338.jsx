import DetailList from "../detailList/DetailList";

const DetailPage= (props)=> {
    
    return(
        <div> 
        {props?.name}
        <DetailList></DetailList>

        </div>
    )
}

export default DetailPage;