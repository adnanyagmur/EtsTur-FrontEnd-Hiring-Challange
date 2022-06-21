

import { Grid, Image, Box, GridItem, Text, SimpleGrid, Button} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Calculate from './rotaCalculate/Calculate.js';
import AdrsMap from './addressMap/AdrsMap.jsx'


const DetailPage = () => {



    const name = localStorage.getItem("name");
    const image = localStorage.getItem("image");
    const category = localStorage.getItem("category");
    const description = localStorage.getItem("description");
    const price = localStorage.getItem("price");
    const basTarih = localStorage.getItem("basTarih");
    const bitistarihi = localStorage.getItem("bitistarihi");
    const venue = localStorage.getItem("venue");
    const ticketLink = localStorage.getItem("ticketLink");
    const address = localStorage.getItem("address");
    const district = localStorage.getItem("district");


    const navigation = useNavigate();
    const handleClick = () => {
        navigation("/")
    }


    return (
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
                    <SimpleGrid columns={[null, 5]} spacing='40px'>
                        <Text as='span' fontSize='3xl' >Etkinlik-TR</Text>
                        <div></div>
                        <div></div>
                        <div></div>
                        <Button bg='purple.600' w="200px" mr='2' h='1.75rem' size='sm' mt="2" border='2px' borderColor='white' onClick={handleClick} >
                            Anasayfaya Dön
                        </Button>
                    </SimpleGrid>


                </GridItem>

                <GridItem pt='4' pr='6' bg='white' area={'main'} >

                    <SimpleGrid columns={[null, 1]} spacing='40px'>




                        <Grid
                            h='750px'
                            templateRows='repeat(2, 1fr)'
                            templateColumns='repeat(5, 1fr)'
                            gap={5}
                        >
                            <GridItem rowSpan={2} colSpan={1} bg='tomato' >
                            <Text>  {name}</Text>
                                <Text>  {category}</Text>
                                <Text>  {price}</Text>
                                <Image src={image} ></Image>
                            </GridItem>
                            <GridItem colSpan={4} bg='tomato' >
                                <Text> {description} </Text>
                                <Text>  {basTarih} </Text>
                                <Text>  {bitistarihi}</Text>

                                <Text> {venue} </Text>
                                <Text> {ticketLink} </Text>
                                <Text> {address} </Text>
                                <Text> {district} </Text>
                            </GridItem>


                            <GridItem pl="7"  colSpan={2} bg='papayawhip' >
                            <Text> Bulunduğunuz konumu girerek rotanızı görebilirisiniz: </Text> <Calculate 
                            calculate={address}
                            ></Calculate> </GridItem>

                            <GridItem pl="7" colSpan={2} bg='papayawhip' >
                            <Text> Etkinlik adresinin haritadaki konumu: </Text>
                                <AdrsMap calculate={address} ></AdrsMap>
                            </GridItem>
                        </Grid>


                    </SimpleGrid>
                </GridItem>
                <GridItem pl='2' bg='gray.200' area={'footer'}>
                    <SimpleGrid columns={1} color='white' >
                        <Box pt='3' bg='purple.600' textAlign="center" height='80px'> <Text fontSize='3xl' >© Copyright ,Designed and built by Adnan YAĞMUR</Text></Box>
                        <Box bg='purple.600' textAlign="center" height='80px'><Text fontSize='3xl' >Bu sitenin API'ı <a href='https://etkinlik.io/'>Etkinlik.io</a> tarafından sağlanmıştır.</Text></Box>
                    </SimpleGrid>
                </GridItem>
            </Grid>


        </div>
    )
}

export default DetailPage;