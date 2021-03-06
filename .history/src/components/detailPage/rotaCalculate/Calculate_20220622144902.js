import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Input,
  SkeletonText,

} from '@chakra-ui/react'


import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState, useEffect } from 'react'


const center = { lat: 48.8584, lng: 2.2945 }

const Calculate =({calculate})=> {

  useEffect(() => {
    
    calculateRoute();
  });



  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

 
  const [directionsResponse, setDirectionsResponse] = useState(null)


  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()

  const destiantionRef = useRef()

  if (!isLoaded) {
    return <SkeletonText />
  }

  async function calculateRoute() {
    if (destiantionRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
  }

  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='300px'
      w='550px'
    >
      <Box position='absolute' left={0} top={0} h='100%' w='100%'>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      <Box  color="white" pl="2" pr="2" pt="2">
        <HStack spacing={2} justifyContent='space-between'>
          <Box flexGrow={1} >
            <Autocomplete>
              <Input type='text' placeholder='Konumunuz' ref={originRef} backgroundColor={"purple.500"}   opacity={90}/>
            </Autocomplete>
          </Box>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
              value={String(calculate)}
                type='text'
                placeholder='Destination'
                ref={destiantionRef}
                backgroundColor={"purple.500"}
              />
            </Autocomplete>
          </Box>
          <ButtonGroup>
            <Button colorScheme='pink' type='submit' onClick={calculateRoute}  bg="purple.500"
            h='30px'
            w='100px'>
             ROTANIZ
            </Button>
          </ButtonGroup>
        </HStack>
      </Box>
      
    </Flex>
  )
}

export default Calculate;
