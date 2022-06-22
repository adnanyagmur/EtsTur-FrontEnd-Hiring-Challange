import React from 'react';

import {Grid,Image,Badge,Box,GridItem,Text,SimpleGrid,Input,InputGroup,Button,InputRightElement} from '@chakra-ui/react';
import Logo from "../assets/NewLogo.jpg"
import  {useNavigate} from 'react-router-dom';
import Data from '../../pastApi/json';


function HomePage() {
const navigation = useNavigate();
const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}
const handleClick = (()=> {
    navigation("/")
})

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
  width={breakpoints}
>
  <GridItem w={breakpoints} pt='2' pl='80px' bg='purple.600' color='white' area={'header'}>
  <SimpleGrid  w={breakpoints} columns={[null,3]} spacing='40px'>
  <Text  w={breakpoints} as='span'  fontSize='3xl' width={{ base: '100%', sm: '50%', md: '25%' }} >Etkinlik-TR</Text> 
  <InputGroup  w={breakpoints} as='span'  size='md'>
      <Input
       w={breakpoints}
        pr='4.5rem'
        bg='white'
        color='black'
        placeholder='Etkinlik İsmi'
      />
      <InputRightElement  w={breakpoints}>
        <Button bg='purple.600' mr='2' h='1.75rem' size='sm' /* onClick={handleClick} */>
          Filtrele
        </Button>
      </InputRightElement>
    </InputGroup>
    <Button bg='purple.600' mr='2' h='1.75rem' size='sm' mt="2" border='2px' borderColor='white' onClick={handleClick} >
          Gelecek Etkinlikler
        </Button>
</SimpleGrid>
  
 
  </GridItem>

  <GridItem pl='6' pt='4' pr='6' bg='white' area={'main'} >

  <SimpleGrid columns={[1, null,2, 3,4,5]} spacing='40px'>
 



  {Data?.map((data)=>
  


  <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={Logo} alt="geçmiş-etkinlik" />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
           {data.UCRETLENDIRME}
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
           Başlangıç Tarihi {data.ETKINLIK_BASLAMA_TARIHI} 
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {data.ETKINLIK_ADI}
        </Box>

        <Box>
          {data.ETKINLIK_TURU}
        </Box>

       
      </Box>
    </Box>
        

/* buraya kart maplancek */
      
  
  )}
  </SimpleGrid>
  </GridItem>
  <GridItem width={{ base: '100%', sm: '50%', md: '25%' }} pl='2' bg='gray.200' area={'footer'}>
  <SimpleGrid width={{ base: '100%', sm: '50%', md: '25%' }} columns={1} color='white' >
  <Box width={{ base: '100%', sm: '50%', md: '25%' }} pt='3' bg='purple.600' textAlign="center" height='80px'> <Text    fontSize={{ base: '24px', md: '40px', lg: '56px' }} >© Copyright ,Designed and built by Adnan YAĞMUR</Text>
  <Text   fontSize={{ base: '24px', md: '40px', lg: '56px' }} >Bu sitenin API'ı <a href='https://etkinlik.io/'>Etkinlik.io</a> tarafından sağlanmıştır.</Text></Box>
 
</SimpleGrid>
  </GridItem>
</Grid>


 
      
  
      </div>
        </div>
    )
}

export default HomePage;