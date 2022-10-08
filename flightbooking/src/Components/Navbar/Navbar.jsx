import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import { User } from "../Context/User";
function Navbar() {
  const { loggedUser, setLoggedUser } = React.useContext(User);
  const handleLogout = () => {
    setLoggedUser({});
    localStorage.removeItem("loggedUserBooking");
  };
  return (
    <Box
      w="100%"
      p={5}
      style={{
        paddingLeft: "50px",
        paddingRight: "50px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "right",
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        backgroundColor: "rgba(255, 255, 255, 0.444)",
      }}
    >
      {loggedUser.name ? (
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>
            <Heading size="md" fontWeight={500}>
              Welcome {loggedUser.name}
            </Heading>
          </Box>

          <Button
            onClick={() => {
              handleLogout();
            }}
            color="black"
            variant="link"
          >
            LOGOUT
          </Button>
        </Box>
      ) : (
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            gap: "30px",
          }}
        >
          <Login />
          <Signup />
        </Box>
      )}
    </Box>
  );
}

export default Navbar;
