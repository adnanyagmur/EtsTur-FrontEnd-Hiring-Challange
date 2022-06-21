import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventList from '../eventList/EventList';
import { Grid, Box, GridItem, Text, SimpleGrid, Input, InputGroup, Button, InputRightElement } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
function HomePage() {
  const navigation = useNavigate();

  const handleClick = (() => {
    navigation("/gecmisEtkinlikler")
  })

  const goToDetail=(value)=>{
    navigation("/detailPage", {eventList: value})
  }
 

  const [eventList, setEventList] = useState([])

  useEffect(() => {
    axios.get(
      'https://backend.etkinlik.io/api/v2/events', {
        headers: {
          "X-Etkinlik-Token": "966d3071605c47ca2a58476b4b0083b1"
        }
    }
    ).then(res => {
      setEventList(res.data);
      //console.log(res.data);
    }).catch(error => console.log(error))
  }, []);

  console.log(eventList)

  return (
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
            <SimpleGrid columns={[null, 5]} spacing='40px'>
              <Text as='span' fontSize='3xl' >Etkinlik-TR</Text>
              <InputGroup as='span' size='md'>
                <Input
                  pr='4.5rem'
                  bg='white'
                  color='black'
                  placeholder='Şehir İsmi'
                />
                <InputRightElement width='4.5rem'>
                  <Button bg='purple.600' mr='2' h='1.75rem' size='sm' /* onClick={handleClick} */>
                    Filtrele
                  </Button>
                </InputRightElement>
              </InputGroup>
              <InputGroup as='span' size='md'>
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
              <InputGroup as='span' size='md'>
                <Input
                  pr='4.5rem'
                  bg='white'
                  color='black'
                  placeholder='Tarih Aralığı'
                />
                <InputRightElement width='4.5rem'>
                  <Button bg='purple.600' mr='2' h='1.75rem' size='sm' /* onClick={handleClick} */>
                    Filtrele
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button bg='purple.600' mr='2' h='1.75rem' size='sm' mt="2" border='2px' borderColor='white' onClick={handleClick} >
                Geçmiş Etkinlikler
              </Button>
            </SimpleGrid>


          </GridItem>

          <GridItem pl='6' pt='4' pr='6' bg='white' area={'main'} >

            <SimpleGrid columns={[1, null, 2, 3, 4, 5]} spacing='40px'>




              {eventList.items?.map((eventList, key) =>






                <EventList
                  key={eventList?.id}
                  eventid={eventList?.id}
                  
                  name={eventList?.name}
                  image={eventList?.poster_url}
                  category={eventList?.category?.name}
                  description={eventList?.content?.replace("<br /><br />", " ").replace("<br /><br />", " ").replace("</strong>", " ").replace("<br />", " ")
                    .replace("<strong>", " ").replace("<br /><strong>", " ")
                    .replace("</strong><br />", " ")
                    .replace("</p>", " ").replace("<p>", " ").replace("<p>", " ")
                    .replace("</p>", " ").replace("<br /><br />", " ").replace("<br /><br />", " ").replace("</strong>", " ").replace("<br />", " ")
                    .replace("<strong>", " ").replace("<br /><strong>", " ")
                    .replace("</strong><br />", " ")
                    .replace("</p>", " ").replace("<p>", " ").replace("<p>", " ")
                    .replace("</p>", " ").replace("<br /><br />", " ").replace("<br /><br />", " ").replace("</strong>", " ").replace("<br />", " ")
                    .replace("<strong>", " ").replace("<br /><strong>", " ")
                    .replace("</strong><br />", " ")
                    .replace("</p>", " ").replace("<p>", " ").replace("<p>", " ")
                    .replace("</p>", " ").replace("<br /><br />", " ").replace("<br /><br />", " ").replace("</strong>", " ").replace("<br />", " ")
                    .replace("<strong>", " ").replace("<br /><strong>", " ")
                    .replace("</strong><br />", " ")
                    .replace("</p>", " ").replace("<p>", " ").replace("<p>", " ")
                    .replace("</p>", " ").replace("<br /><br />", " ").replace("<br /><br />", " ").replace("</strong>", " ").replace("<br />", " ")
                    .replace("<strong>", " ").replace("<br /><strong>", " ")
                    .replace("</strong><br />", " ")
                    .replace("</p>", " ").replace("<p>", " ").replace("<p>", " ")
                    .replace("</p>", " ").replace("<br /><br />", " ").replace("<br /><br />", " ").replace("</strong>", " ").replace("<br />", " ")
                    .replace("<strong>", " ").replace("<br /><strong>", " ")
                    .replace("</strong><br />", " ")
                    .replace("</p>", " ").replace("<p>", " ").replace("<p>", " ")
                    .replace("</p>", " ").replace("<br /><br />", " ").replace("<br /><br />", " ").replace("</strong>", " ").replace("<br />", " ")
                    .replace("<strong>", " ").replace("<br /><strong>", " ")
                    .replace("</strong><br />", " ")
                    .replace("</p>", " ").replace("<p>", " ").replace("<p>", " ")
                    .replace("</p>", " ").replace("<br /><br />", " ").replace("<br /><br />", " ").replace("</strong>", " ").replace("<br />", " ")
                    .replace("<strong>", " ").replace("<br /><strong>", " ")
                    .replace("</strong><br />", " ")
                    .replace("</p>", " ").replace("<p>", " ").replace("<p>", " ")                  //////asdasd
                    .replace("</p>", " ").replace("<br /><br />", " ").replace("<br /><br />", " ").replace("</strong>", " ").replace("<br />", " ")
                    .replace("<strong>", " ").replace("<br /><strong>", " ")
                    .replace("</strong><br />", " ")
                    .replace("</p>", "").replace("<p>", " ").replace("<p>", " ")
                    .replace("</p>", " ").replace("<br /><br />", " ").replace("<br /><br />", " ").replace("</strong>", " ").replace("<br />", " ")
                    .replace("<strong>", " ").replace("<br /><strong>", " ")
                    .replace("</strong><br />", " ")
                    .replace("</p>", " ").replace("<p>", " ").replace("<p>", " ")
                    .replace("</p>", " ").replace("<br /><br />", " ").replace("<br /><br />", " ").replace("</strong>", " ").replace("<br />", " ")
                    .replace("<strong>", " ").replace("<br /><strong>", " ")
                    .replace("</strong><br />", " ")
                    .replace("</p>", " ").replace("<p>", " ").replace("<p>", " ")
                    .replace("</p>", " ").replace("<br /><br />", " ").replace("<br /><br />", " ").replace("</strong>", " ").replace("<br />", " ")
                    .replace("<strong>", " ").replace("<br /><strong>", " ")
                    .replace("</strong><br />", " ")
                    .replace("</p>", " ").replace("<p>", " ").replace("<p>", " ")
                    .replace("</p>", " ").replace("<br /><br />", " ").replace("<br /><br />", " ").replace("</strong>", " ").replace("<br />", " ")
                    .replace("<strong>", " ").replace("<br /><strong>", " ")
                    .replace("</strong><br />", " ")
                    .replace("</p>", " ").replace("<p>", " ").replace("<p>", " ")
                    .replace("</p>", " ").replace("<br /><br />", " ").replace("<br /><br />", " ").replace("</strong>", " ").replace("<br />", " ")
                    .replace("<strong>", " ").replace("<br /><strong>", " ")
                    .replace("</strong><br />", " ")
                    .replace("</p>", " ").replace("<p>", " ").replace("<p>", " ")
                    .replace("</p>", " ").replace("<br /><br />", " ").replace("<br /><br />", " ").replace("</strong>", " ").replace("<br />", " ")
                    .replace("<strong>", " ").replace("<br /><strong>", " ")
                    .replace("</strong><br />", " ")
                    .replace("</p>", " ").replace("<p>", " ").replace("<p>", " ")
                    .replace("</p>", " ").replace("<br /><br />", " ").replace("<br /><br />", " ").replace("</strong>", " ").replace("<br />", " ")
                    .replace("<strong>", " ").replace("<br /><strong>", " ")
                    .replace("</strong><br />", " ")
                    .replace("</p>", " ").replace("<p>", " ").replace("<p>", " ")
                    .replace("</p>", " ").replace("<br /><br />", " ").replace("<br /><br />", " ").replace("</strong>", " ").replace("<br />", " ")
                    .replace("<strong>", " ").replace("<br /><strong>", " ")
                    .replace("</strong><br />", " ")
                    .replace("</p>", " ").replace("<p>", " ").replace("<p>", " ")
                    .replace("</p>", " ").replace("<br /><br />", " ").replace("<br /><br />", " ").replace("</strong>", " ").replace("<br />", " ")
                    .replace("<strong>", " ").replace("<br /><strong>", " ")
                    .replace("</strong><br />", " ")
                    .replace("</p>", " ").replace("<p>", " ").replace("<p>", " ")
                    .replace("</p>", " ").replace("<em>", " ").replace("</em>", " ").replace("<br />", " ")
                    .replace("<br />", " ")}
                  price={eventList?.is_free}
                  basTarihi={eventList?.start?.replace("T", "   Time :  ")}
                  bitisTarihi={eventList?.end?.replace("T", "   Time :  ")}
                  venue={eventList?.venue?.name}
                  ticketLink={eventList?.ticket_url}
                  address={eventList?.venue?.address}
                  city={eventList?.venue?.city?.name}
                  district={eventList?.venue?.district?.name}
                  eventList={eventList}
                >

                </EventList>


              )}
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
    </div>
  )
}

export default HomePage;