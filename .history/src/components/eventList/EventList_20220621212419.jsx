import {Box,Image,Badge, Button} from '@chakra-ui/react';
import  {useNavigate} from 'react-router-dom';


const EventList = ({name, image,basTarihi , category,price,eventList})=> {
const navigation = useNavigate();


   const handleDetail = (()=>{
    localStorage.clear();
    localStorage.setItem("name",eventList);
    localStorage.setItem("image",eventList);
    localStorage.setItem("category",eventList);
    localStorage.setItem("description",eventList);
    localStorage.setItem("price",eventList);
    localStorage.setItem("basTarih",eventList);
    localStorage.setItem("bitistarihi",eventList);
    localStorage.setItem("venue",eventList);
    localStorage.setItem("ticketLink",eventList);
    localStorage.setItem("address",eventList);
    localStorage.setItem("city",eventList);
    localStorage.setItem("district",eventList);
    navigation("/detailPage");
    }) 

    return(
        <div >



      
  <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={image} alt={name} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
           {price === true? ("Ücretli"):("Ücretsiz")}
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
           Başlangıç Tarihi {basTarihi} 
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {name}
        </Box>

        <Box>
          {category}
        <br></br>
          <Box as='span'   color='white' fontSize='sm'>
            <Button  bg='purple.600'  onClick={handleDetail}  size='md'> Detaylar</Button>
          </Box> 
        </Box>

       
      </Box>
    </Box>
        
             
            

       
    </div>
    )
}

export default EventList;