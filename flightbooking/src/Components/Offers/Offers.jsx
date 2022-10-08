import React from "react";
import {
  Heading,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

function Offers() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button width={250} ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Offers
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Offers</DrawerHeader>

          <DrawerBody>
            <Box
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <Box
                onClick={() => {
                  setOffer("ff10");
                  onClose();
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  border: "2px solid #E7F6F2",
                  paddingBottom: "5px",
                  cursor: "pointer",
                }}
              >
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "17px",
                    textAlign: "center",
                    backgroundColor: "#E7F6F2",
                    border: "2px solid #E7F6F2",
                    margin: "auto",
                    width: "100%",
                  }}
                >
                  First Flight
                </p>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Heading as="h5" size="sm" fontWeight={400}>
                    Get 10% off
                  </Heading>
                  <Heading as="h5" size="sm" fontWeight={500}>
                    ff10
                  </Heading>
                </Box>
              </Box>
              <Box
                onClick={() => {
                  setOffer("f2f08");
                  onClose();
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  border: "2px solid #E7F6F2",
                  paddingBottom: "5px",
                  cursor: "pointer",
                }}
              >
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "17px",
                    textAlign: "center",
                    backgroundColor: "#E7F6F2",
                    border: "2px solid #E7F6F2",
                    margin: "auto",
                    width: "100%",
                  }}
                >
                  Second Flight
                </p>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Heading as="h5" size="sm" fontWeight={400}>
                    Get 8% off
                  </Heading>
                  <Heading as="h5" size="sm" fontWeight={500}>
                    f2f08
                  </Heading>
                </Box>
              </Box>
              <Box
                onClick={() => {
                  setOffer("f3f06");
                  onClose();
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  border: "2px solid #E7F6F2",
                  paddingBottom: "5px",
                  cursor: "pointer",
                }}
              >
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "17px",
                    textAlign: "center",
                    backgroundColor: "#E7F6F2",
                    border: "2px solid #E7F6F2",
                    margin: "auto",
                    width: "100%",
                  }}
                >
                  Third Flight
                </p>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Heading as="h5" size="sm" fontWeight={400}>
                    Get 6% off
                  </Heading>
                  <Heading as="h5" size="sm" fontWeight={500}>
                    f3f06
                  </Heading>
                </Box>
              </Box>
              <Box
                onClick={() => {
                  setOffer("freecff");
                  onClose();
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  border: "2px solid #E7F6F2",
                  paddingBottom: "5px",
                  cursor: "pointer",
                }}
              >
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "17px",
                    textAlign: "center",
                    backgroundColor: "#E7F6F2",
                    border: "2px solid #E7F6F2",
                    margin: "auto",
                    width: "100%",
                  }}
                >
                  Free Drink
                </p>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Heading as="h5" size="sm" fontWeight={400}>
                    Get free coffee
                  </Heading>
                  <Heading as="h5" size="sm" fontWeight={500}>
                    freecff
                  </Heading>
                </Box>
              </Box>
              <Box
                onClick={() => {
                  setOffer("getfrfd");
                  onClose();
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  border: "2px solid #E7F6F2",
                  paddingBottom: "5px",
                  cursor: "pointer",
                }}
              >
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "17px",
                    textAlign: "center",
                    backgroundColor: "#E7F6F2",
                    border: "2px solid #E7F6F2",
                    margin: "auto",
                    width: "100%",
                  }}
                >
                  Free Food
                </p>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Heading as="h5" size="sm" fontWeight={400}>
                    Get free food
                  </Heading>
                  <Heading as="h5" size="sm" fontWeight={500}>
                    getfrfd
                  </Heading>
                </Box>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Offers;
