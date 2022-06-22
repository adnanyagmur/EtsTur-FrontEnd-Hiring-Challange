import {
    Box,
    Flex,
    HStack,
    Input,
    SkeletonText,
  
  } from '@chakra-ui/react';

  
  import {
    useJsApiLoader,
    GoogleMap,
    Autocomplete,
    DirectionsRenderer,
  } from '@react-google-maps/api'
  import { useRef, useState, useEffect } from 'react'
  
  const center = { lat: 48.8584, lng: 2.2945 }
  
  const Tekinput = ({calculate})=> {
  
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
    /*  @type React.MutableRefObject<HTMLInputElement> 
    const destiantionRef = useRef() */
  
    if (!isLoaded) {
      return <SkeletonText />
    }
  
   
  
    async function calculateRoute() {
      
      // eslint-disable-next-line no-undef
      const directionsService = new google.maps.DirectionsService()
      const results = await directionsService.route({
        origin: originRef.current.value,
        destination:originRef.current.value ,
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
        w='500px'
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
        <Box>
          <HStack spacing={2} justifyContent='space-between'>
            <Box flexGrow={1} pt="2" color={"white"}>
              <Autocomplete>
                <Input type='text' placeholder='Origin'  ref={originRef}   backgroundColor={"purple.500"} value={String(calculate)}  opacity={90}/>
              </Autocomplete>
            </Box>
         
          </HStack>
        </Box>
      </Flex>
    )
  }
  
  export default Tekinput;