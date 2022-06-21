
import  {useNavigate} from 'react-router-dom';
const DetailPage= ({route,navigation})=> {
    const navigation = useNavigate();
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