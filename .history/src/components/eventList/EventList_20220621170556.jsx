import {Box,Image,Badge, Button} from '@chakra-ui/react';
/* import  {useNavigate} from 'react-router-dom'; */


const EventList = ({name,eventList, image,basTarihi , category,price,navigation})=> {
/* const navigation = useNavigate(); */
  /*   const handleDetail = (()=>{
        navigation("/detailPage",eventList)
    })  */

    return(
        <div >



      
  <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={image} alt={name} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
           {price == true? ("Ücretli"):("Ücretsiz")}
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
            <Button  bg='purple.600'  onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}  size='md'> Detaylar</Button>
          </Box> 
        </Box>

       
      </Box>
    </Box>
        
             
            

       
    </div>
    )
}

export default EventList;