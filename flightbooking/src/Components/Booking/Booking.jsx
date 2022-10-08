import React from "react";
import Offers from "../Offers/Offers";
import {
  Box,
  Select,
  Input,
  Heading,
  Button,
  useToast,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { User } from "../Context/User";

const allCites = [];

let cityData = [
  {
    City: "The Valley",
  },
  {
    City: "Bełk",
  },
  {
    City: "Praia de Mira",
  },
  {
    City: "Kemlya",
  },
  {
    City: "Zeguo",
  },
  {
    City: "Le Mans",
  },
  {
    City: "Melekeok Village",
  },
  {
    City: "Żabbar",
  },
  {
    City: "Yanling",
  },
  {
    City: "Cajicá",
  },
  {
    City: "Aubagne",
  },
  {
    City: "Lela",
  },
  {
    City: "Karlovy Vary",
  },
  {
    City: "Sukogunungkrajan",
  },
  {
    City: "Casselman",
  },
  {
    City: "Ketapang",
  },
  {
    City: "Tarata",
  },
  {
    City: "Solna",
  },
  {
    City: "Orléans",
  },
  {
    City: "Bancar",
  },
  {
    City: "Sangkalputung",
  },
  {
    City: "Winneba",
  },
  {
    City: "Yuecheng",
  },
  {
    City: "Lilio",
  },
  {
    City: "Machachi",
  },
  {
    City: "Zhangqing",
  },
  {
    City: "Banjar Mambalkajanan",
  },
  {
    City: "Gandara",
  },
  {
    City: "Shkodër",
  },
  {
    City: "Lalībela",
  },
  {
    City: "Alua",
  },
  {
    City: "Wucheng",
  },
  {
    City: "Xihongmen",
  },
  {
    City: "Soito",
  },
  {
    City: "Kilkís",
  },
  {
    City: "Gllogjan",
  },
  {
    City: "Nglorogan",
  },
  {
    City: "Pasirjaya",
  },
  {
    City: "Shuangshipu",
  },
  {
    City: "Alejal",
  },
  {
    City: "El Carmen",
  },
  {
    City: "Cicurug",
  },
  {
    City: "Sanjiazi",
  },
  {
    City: "Pinheiros",
  },
  {
    City: "Jiangyin",
  },
  {
    City: "Dayong",
  },
  {
    City: "Sanjiazi",
  },
  {
    City: "Santa Barbara",
  },
  {
    City: "Aguisan",
  },
  {
    City: "Zhujiatai",
  },
];

cityData.forEach((city) => {
  allCites.push(city.City);
});

function Booking() {
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [dDate, setDDate] = React.useState("");
  const [aDate, setADate] = React.useState("");
  const [offer, setOffer] = React.useState("");
  const [dPrice, setDPrice] = React.useState("");
  const [price, setPrice] = React.useState("");
  const toast = useToast();

  React.useEffect(() => {
    getOffer();
    getPrice();
  }, [offer, setOffer, dDate, aDate, setPrice, from, to, setFrom, setTo]);

  const { loggedUser } = React.useContext(User);
  const handleBookOne = () => {
    loggedUser.name
      ? toast({
          position: "top",
          title: "Fill all the fields",
          status: "error",
          duration: 2000,
          isClosable: true,
        })
      : toast({
          position: "top",
          title: "Please login or register to book a trip",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
  };

  const handleBook = () => {
    loggedUser.name
      ? callPopUp()
      : toast({
          position: "top",
          title: "Please login or register to book a trip",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
  };
  const callPopUp = () => {
    toast({
      position: "top",
      title: "Ticket booked successfully",
      description: "Details are sent to your email",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    setFrom("");
    setTo("");
    setDDate("");
    setADate("");
    setOffer("");
    setDPrice("");
    setPrice("");
  };

  const handleDDate = (date) => {
    switch (date) {
      case "":
        setADate("");
        break;
      default:
        let currentDate = new Date();
        let givenDate = new Date(date);
        switch (true) {
          case currentDate.getTime() <= givenDate.getTime():
            setDDate(date);
            let aD = new Date(givenDate.setHours(givenDate.getHours() + 8));
            aD = aD.toJSON();
            aD = aD.slice(0, aD.length - 8);
            setADate(aD);
            break;
          default:
            setDDate("");
            break;
        }
        break;
    }
  };
  const getPrice = () => {
    // console.log('called getPrice');
    let a = allCites.indexOf(from);
    let b = allCites.indexOf(to);
    let d = new Date(dDate);
    let currDate = new Date();
    let month = Math.abs(d.getMonth() - currDate.getMonth());
    switch (month) {
      case 0:
        setPrice((a + b) * 1000);
        break;
      default:
        setPrice(
          (a + b) * 1000 - Math.round(((a + b) * 1000 * (month * 0.5)) / 100)
        );
        break;
    }
  };

  const getOffer = () => {
    switch (offer) {
      case "ff10":
        setDPrice(Math.round((price * 90) / 100));
        break;
      case "f2f08":
        setDPrice(Math.round((price * 92) / 100));
        break;
      case "f3f06":
        setDPrice(Math.round((price * 94) / 100));
        break;
      default:
        setDPrice("");
        break;
    }
  };

  return (
    <div>
      <Box>
        <Box
          bg={"rgba(255, 255, 255, 0.744)"}
          style={{
            width: "800px",
            margin: "auto",
            padding: "20px",
            marginTop: "100px",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              justifyContent: "space-around",
            }}
          >
            <Box
              width={337}
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <Heading as="h5" size="sm">
                From
              </Heading>
              <Select
                icon={<ArrowDownIcon />}
                placeholder="Select City"
                value={from}
                onChange={(e) => {
                  e.target.value === to ? setFrom("") : setFrom(e.target.value);
                }}
              >
                {allCites.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </Select>
              <Input
                value={dDate}
                onChange={(e) => {
                  handleDDate(e.target.value);
                }}
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
            </Box>

            <Box
              width={337}
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <Heading as="h5" size="sm">
                To
              </Heading>
              <Select
                icon={<ArrowDownIcon />}
                placeholder="Select City"
                value={to}
                onChange={(e) => {
                  e.target.value === from ? setTo("") : setTo(e.target.value);
                }}
              >
                {allCites.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </Select>
              <Input
                value={aDate}
                onChange={() => {
                  handleDDate(dDate);
                }}
                disabled={dDate && to && from ? true : false}
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Offers setOffer={setOffer} getOffer={getOffer} />
            <Input
              placeholder="Enter Coupon Code"
              value={offer}
              width={430}
              onChange={(e) => {
                setOffer(e.target.value);
              }}
            />
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <Box
              opacity={dDate && aDate && to && from ? 100 : 0}
              style={{
                width: "300px",
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              <span
                style={{ margin: "auto", marginLeft: "0", marginRight: "0" }}
              >
                Payable price
              </span>
              {price ? (
                <span
                  style={{
                    margin: "auto",
                    marginLeft: "0",
                    marginRight: "0",
                    textDecoration: dPrice ? "line-through" : "none",
                    color: "red",
                    fontWeight: dPrice ? "0" : "500",
                  }}
                >
                  {price}
                </span>
              ) : null}
              {dPrice ? (
                <span
                  style={{
                    margin: "auto",
                    marginLeft: "0",
                    marginRight: "0",
                    color: "green",
                    fontWeight: "500",
                  }}
                >
                  {dPrice}
                </span>
              ) : null}
            </Box>
            <Button
              onClick={() => {
                // handleBook();
                from && to && dDate && aDate ? handleBook() : handleBookOne();
              }}
              width={250}
              colorScheme="teal"
            >
              Book Ticket
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Booking;
