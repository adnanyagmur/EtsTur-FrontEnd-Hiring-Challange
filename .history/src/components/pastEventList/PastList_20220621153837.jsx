import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Grid,Image,Badge,Box,GridItem,Text,SimpleGrid,Input,InputGroup,Button,InputRightElement} from '@chakra-ui/react';

import  {useNavigate} from 'react-router-dom';

function HomePage() {

  const [eventList, setEventList] = useState([])

  useEffect(()=> {
      axios.get(
        'https://backend.etkinlik.io/api/v2/events',{headers: {
          "X-Etkinlik-Token" : "966d3071605c47ca2a58476b4b0083b1"
        }
      }
        ).then(res => {
          setEventList(res.data);
          //console.log(res.data);
        }).catch(error => console.log(error))
    },[]);

console.log(eventList)

    return(
        <div> 
<div>

<Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'70px 1fr 150px'}
  gridTemplateColumns={'1fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pt='2' pl='80px' bg='purple.600' color='white' area={'header'}>
  <SimpleGrid columns={[null,5]} spacing='40px'>
  <Text  as='span'  fontSize='3xl' >Etkinlik-TR</Text> 
  <InputGroup as='span'  size='md'>
      <Input
        pr='4.5rem'
        bg='white'
        color='black'
        placeholder='Etkinlik İsmi'
      />
      <InputRightElement width='4.5rem'>
        <Button bg='purple.600' mr='2' h='1.75rem' size='sm' /* onClick={handleClick} */>
          Filtrele
        </Button>
      </InputRightElement>
    </InputGroup>
</SimpleGrid>
  
 
  </GridItem>

  <GridItem pl='6' pt='4' pr='6' bg='white' area={'main'} >

  <SimpleGrid columns={[1, null,2, 3,4,5]} spacing='40px'>
 



  {eventList.items?.map((eventList,key)=>
  


  <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={image} alt={name} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
           {price ? ("Ücretli"):("Ücretsiz")}
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
        

/* buraya kart maplancek */
      
  
  )}
  </SimpleGrid>
  </GridItem>
  <GridItem pl='2' bg='gray.200' area={'footer'}>
  <SimpleGrid  columns={1} color='white' >
  <Box pt='3' bg='purple.600' textAlign="center" height='80px'> <Text    fontSize='3xl' >© Copyright ,Designed and built by Adnan YAĞMUR</Text></Box>
  <Box bg='purple.600' textAlign="center" height='80px'><Text    fontSize='3xl' >Bu sitenin API'ı <a href='https://etkinlik.io/'>Etkinlik.io</a> tarafından sağlanmıştır.</Text></Box>
</SimpleGrid>
  </GridItem>
</Grid>


 
      
  
      </div>
        </div>
    )
}

export default HomePage;