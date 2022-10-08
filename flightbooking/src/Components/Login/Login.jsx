import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Box,
  Stack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import { User } from "../Context/User";

function Login() {
  const { setLoggedUser } = React.useContext(User);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    let bookingUsers = JSON.parse(localStorage.getItem("bookingUsers")) || [];
    switch (true) {
      case !email || !password: {
        toast({
          position: "top",
          title: "Please fill in all fields",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        break;
      }
      default:
        let check = bookingUsers.find(
          (user) => user.email === email && user.password === password
        );
        switch (true) {
          case check === undefined: {
            toast({
              position: "top",
              title: "Email or password is incorrect",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
            break;
          }
          default:
            localStorage.setItem("loggedUserBooking", JSON.stringify(check));
            onClose();
            toast({
              position: "top",
              title: "You have successfully logged in",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
            setLoggedUser(check);
            setEmail("");
            setPassword("");
            break;
        }
        break;
    }
  };
  return (
    <>
      <Button color="black" variant="link" onClick={onOpen}>
        LOGIN
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Login to your account
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="email">Email</FormLabel>
                <InputGroup>
                  <Input
                    ref={firstField}
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Password</FormLabel>
                <InputGroup>
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Login;
