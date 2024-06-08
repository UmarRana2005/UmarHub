import { Badge } from "@chakra-ui/react";

interface Props {
    Score:number;
}
const CriticScore = ({Score}:Props) => {
    let color = Score>75?'green':Score>60?'yellow':''
  return (
    <>
    <Badge colorScheme={color} fontSize='14px' borderRadius='5px'>{Score}</Badge>
    </>
  )
}

export default CriticScore