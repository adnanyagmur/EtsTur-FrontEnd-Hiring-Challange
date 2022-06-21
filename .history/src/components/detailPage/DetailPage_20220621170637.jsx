

const DetailPage= ({ route, navigation })=> {
    const { itemId, otherParam } = route.params;
    return(
        <div> 
        
        itemId: {JSON.stringify(itemId)}

        </div>
    )
}

export default DetailPage;