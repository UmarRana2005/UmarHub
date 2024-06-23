import useGeners, { Geners } from '@/hooks/useGeners'
import getCropImage from '@/services/image-crop'
import { HStack, List, ListItem, Image, Text, Spinner, Button, Heading } from '@chakra-ui/react'
interface Props{
  SelectedGener: (gener:Geners)=> void,
  onSelectedGener:Geners|null,
}
const GenersList = ({SelectedGener,onSelectedGener}:Props) => {
    const {data,error,isLoading} = useGeners()
     if (isLoading) return <Spinner boxSize='50px'/>
    return (
      <>
     {error && <Text>{error}</Text>}
     <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
        {data.map(gener=>
          <ListItem key={gener.id} paddingY={2}>
          <HStack>
            <Image boxSize='32px' objectFit='cover' borderRadius={8} src={getCropImage(gener.image_background)}/>
            <Button whiteSpace='normal' textAlign='left' fontWeight={gener.id === onSelectedGener?.id ? 'bold':'normal'} variant='link' onClick={()=>SelectedGener(gener)} fontSize='lg'>{gener.name}</Button>
          </HStack>
          </ListItem>)}
    </List>
    </>
  )
}

export default GenersList