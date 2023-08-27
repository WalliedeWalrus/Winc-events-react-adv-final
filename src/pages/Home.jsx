import {} from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <Box position="relative" h="100vh">
        <div className="home-front">
          <img src="/mountain8.jpg" alt="the world is not enough"></img>
        </div>

        <div className="home-front-text">
          <h1>Are you ready for some action ?</h1>
          <h2>Welcome to the Winc event planner</h2>
          <div className="home-front-button">
            <Link to="/events">
              <Button mt="2rem" colorScheme="gray" color="green">
                Find your Winc event here
              </Button>
            </Link>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Home;
