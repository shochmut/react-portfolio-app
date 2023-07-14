import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack bgColor='#f3f4f7' color='#222222' textAlign='left' borderRadius='md'>
      <Image src={imageSrc} alt={title} objectFit='cover' />
      <Heading alignItems='left'>{title}</Heading>
      <Text>{description}</Text>
      <HStack position='left'>
        <Text>See More</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1px" />
      </HStack>
    </VStack>
  );
};

export default Card;
