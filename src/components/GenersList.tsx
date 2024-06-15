import useGeners from '@/hooks/useGeners'
import getCropImage from '@/services/image-crop'
import { HStack, List, ListItem, Image, Text, Spinner } from '@chakra-ui/react'
import React from 'react'
const GenersList = () => {
    const {geners,error,isLoading} = useGeners()
     if (isLoading) return <Spinner boxSize='50px'/>
    return (
      <>
     {error && <Text>{error}</Text>}
    <List>
        {geners.map(gener=><ListItem key={gener.id} paddingY={2}>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCropImage(gener.image_background)}/>
            <Text fontSize='lg'>{gener.name}</Text>
          </HStack>
          </ListItem>)}
    </List>
    </>
  )
}

export default GenersList