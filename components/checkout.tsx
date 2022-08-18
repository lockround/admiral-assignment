import {Button, Container, FormControl, FormLabel, GridItem, Heading, HStack, Input, SimpleGrid, Text, VStack} from '@chakra-ui/react';
import {AiFillLock} from 'react-icons/ai'


const Checkout = () => {
    return <Container maxW={'container.xl'} p={10}>
        <VStack w={'full'} alignItems={'flex-start'} spacing={10}>
            <VStack alignItems={'flex-start'} spacing={5}>

            <Heading>Your Payment Details</Heading>
            <HStack>
            <AiFillLock/>
          <Text casing={'uppercase'}> Secure Payment</Text>
            </HStack>
            </VStack>
            <SimpleGrid w={'full'} rowGap={10} columns={2} columnGap={10}>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Cardholder Name</FormLabel>
                        <Input placeholder="John Doe"/>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Card Number</FormLabel>
                        <Input placeholder="xxxx xxxx xxxx"/>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Expiry Date</FormLabel>
                        <Input placeholder="MM/YYYY"/>
                    </FormControl>
                    {/* <FormControl>
                        <FormLabel>CVC</FormLabel>
                        <Input placeholder="cvc number"/>
                    </FormControl> */}
                </GridItem>
                <GridItem colSpan={1}>
                  
                    <FormControl>
                        <FormLabel>CVC</FormLabel>
                        <Input placeholder="xxx"/>
                    </FormControl>
                </GridItem>
              
            </SimpleGrid>

            <Button>Checkout</Button>
        </VStack>
    </Container>
}

export default Checkout;