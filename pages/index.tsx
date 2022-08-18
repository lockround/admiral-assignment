import { Box, Flex, Heading, VStack, Container, HStack, AspectRatio, Image, Stack, Text, Divider, Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure
} from '@chakra-ui/react'
import Item from '../components/item';
import data from '../data.json';
import Checkout from '../components/checkout';

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Container maxW='xl'>
      <Flex h={'100vh'} py={10}>
        <VStack w={'full'} p={10} h={'full'} spacing={5} alignItems={'flex-start'} bg={'gray.50'}>
          <Heading size="xl">Order #123456</Heading>
         {data.map(v => <Item {...v} key={v.id} />)}

      

          <VStack w={'full'} >
            <HStack justifyContent={'space-between'} w={'full'}>
              <Text color="gray.600">Subtotal</Text>
              <Heading size="sm">${data.reduce((t,v) => t+v.price,0)}</Heading>
            </HStack>
            <HStack justifyContent={'space-between'} w={'full'}>
              <Text color="gray.600">Shipping</Text>
              <Heading size="sm">${data.reduce((t,v) => t+v.ship,0)}</Heading>
            </HStack>
            <HStack justifyContent={'space-between'} w={'full'}>
              <Text color="gray.600">G.S.T</Text>
              <Heading size="sm">$9.8</Heading>
            </HStack>
            <Divider/>
            <HStack justifyContent={'space-between'} w={'full'}>
              <Text color="gray.600">Total</Text>
              <Heading size="lg">${data.reduce((t,v) => t+v.price,0) + data.reduce((t,v) => t+v.ship,0) + 9.8}</Heading>
            </HStack>
          </VStack>
          <Button onClick={onOpen}>Proceed to pay</Button>
        </VStack>
       
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Checkout/>
          </ModalBody>
        </ModalContent>
      </Modal>
      
    </Container>
  )
}

export default Home
