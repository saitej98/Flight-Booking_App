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

function Signup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const toast = useToast();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignUp = () => {
    let bookingUsers = JSON.parse(localStorage.getItem("bookingUsers")) || [];
    switch (true) {
      case !name || !email || !password: {
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
        let body = { name, email, password };
        let check = bookingUsers.find((user) => user.email === email);
        switch (true) {
          case check === undefined: {
            bookingUsers.push(body);
            localStorage.setItem("bookingUsers", JSON.stringify(bookingUsers));
            onClose();
            toast({
              position: "top",
              title: "Account created successfully",
              description: "You can now log in",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
            setEmail("");
            setName("");
            setPassword("");
            break;
          }
          default: {
            toast({
              position: "top",
              title: "Account already exists",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
            break;
          }
        }
        break;
    }
  };
  return (
    <>
      <Button color="black" variant="link" onClick={onOpen}>
        SIGN UP
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
            Create a new account
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  ref={firstField}
                  id="name"
                  placeholder="Enter full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="email">Email</FormLabel>
                <InputGroup>
                  <Input
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
                handleSignUp();
              }}
            >
              Sign up
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Signup;
