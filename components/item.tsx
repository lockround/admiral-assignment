import { Box, Flex, Heading, VStack, Container, HStack, AspectRatio, Image, Stack, Text, Divider, Button } from '@chakra-ui/react'

interface ItemInterface {
    name?: string;
    description?: string;
    price?: number;
}

const Item = ({name,description,price}: ItemInterface) => {
    return  <HStack spacing={6} alignItems={'center'} w={'full'}>
    <AspectRatio ratio={1} w={24}>
      <Image src="https://picsum.photos/100" alt="Order"/>
    </AspectRatio>
    <Stack w={'full'} spacing={0} justifyContent={'space-between'} alignItems={'center'}>
      <VStack w={'full'} spacing={0} alignItems={'flex-start'}>
        <Heading size="md">{name}</Heading>
        <Text color={'gray.600'}>{description}</Text>
      </VStack>
    </Stack>
      <Heading size="sm" textAlign={'end'}>${price}</Heading>
  </HStack>
}

export default Item;