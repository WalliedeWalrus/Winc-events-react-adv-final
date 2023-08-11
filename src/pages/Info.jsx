import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="info-container">
      <div className="info-text">
        <Heading className="info-welcome-text">
          <br></br> Welcome to Winc events!
        </Heading>
        <Text lineHeight={7} fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)">
          <Text mt="1rem">
            Winc events is an event management company that organizes all kinds
            of exciting experiences for everyone! From bungee jumping and hiking
            adventures to sporty or relaxing travel events. Look at our events
            page and see for yourself !<br></br>
            <br></br>
          </Text>
        </Text>

        <Flex
          flexDirection={["column"]}
          flexWrap="wrap"
          justifyContent={"space-between"}
          gap={"1rem"}
        >
          <Box>
            <Heading className="info-welcome-text"> Adress</Heading>
            <Text
              mt="1rem"
              color="gray.600"
              lineHeight={7}
              fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
            >
              Street 123 <Text>1234 AB somewhere</Text>
              <Text>The Netherlands</Text>
            </Text>
          </Box>

          <Box>
            <Heading color="black">Contact</Heading>{" "}
            <Text
              color="gray.600"
              lineHeight={7}
              fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
            >
              <Text mt="1rem">+31 (0)12 34 56 789</Text>
              info@wincevents.com
              <Text>We like to hear from you</Text>
            </Text>
          </Box>
        </Flex>

        <div className="info-box">
          <Heading>Are you ready for some action ?</Heading>{" "}
          <Heading>Come and join us now</Heading>
          <Link to="/events">
            <Button mt="2rem" colorScheme="gray" color="green">
              Find your Winc event here
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
