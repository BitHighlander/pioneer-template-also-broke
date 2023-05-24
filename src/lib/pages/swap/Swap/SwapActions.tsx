import { SettingsIcon, ChevronDownIcon, ArrowDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  Input,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  StackDivider,
  ModalFooter,
  Card,
  Stack,
  Heading,
  CardFooter,
  CardBody,
  Avatar,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

// @ts-ignore
import etherLogo from "lib/assets/png/etherLogo.png";
import { usePioneer } from "lib/context/Pioneer";

export const SwapActions = () => {
  const { state } = usePioneer();
  const { api, user } = state;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [balances, setBalances] = useState([{}]);
  const [pubkeys, setPubkeys] = useState([]);
  const [input, setInput] = useState({});
  const [output, setOutput] = useState({});

  const setUser = async function () {
    try {
      const { balances, pubkeys } = user;
      setBalances(balances);
      setPubkeys(pubkeys);

      // eslint-disable-next-line no-console
      console.log("balances: ", balances);

      // eslint-disable-next-line no-console
      console.log("pubkeys: ", pubkeys);
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-console
      console.error("header e: ", e);
      // setKeepKeyError("Bridge is offline!");
    }
  };

  // onStart()
  useEffect(() => {
    setUser();
  }, [user]); // once on startup

  const onSelectInput = async function () {
    try {
      // eslint-disable-next-line no-console
      console.log("onSelectInput: ");
      onOpen();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  const onSelectOutput = async function () {
    try {
      // eslint-disable-next-line no-console
      console.log("onSelectOutput: ");
      onOpen();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  const onSubmitSelect = async function () {
    try {
      // eslint-disable-next-line no-console
      console.log("onSubmitSelect: ");
      onOpen();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  const onSelectPrimary = async function () {
    try {
      // eslint-disable-next-line no-console
      console.log("onSubmitPrimary: ");
      onOpen();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  return (
    <Box
      w="30.62rem"
      mx="auto"
      mt="5.25rem"
      boxShadow="rgb(0 0 0 / 8%) 0rem 0.37rem 0.62rem"
      borderRadius="1.37rem"
    >
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Coin Select</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/*{balances.map((balance) => (*/}
            {/*  <Card>*/}
            {/*    <Avatar src={balance.image} />*/}
            {/*    <CardBody>*/}
            {/*      <Heading size="md">{balance.blockchain}</Heading>*/}
            {/*      <Text py="2">*/}
            {/*        {balance.amount} {balance.symbol}*/}
            {/*      </Text>*/}
            {/*    </CardBody>*/}
            {/*    <CardFooter>*/}
            {/*      <Button variant="solid" colorScheme="blue">*/}
            {/*        select*/}
            {/*      </Button>*/}
            {/*    </CardFooter>*/}
            {/*  </Card>*/}
            {/*))}*/}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={() => onSubmitSelect} variant="green">
              Select Coin
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex
        alignItems="center"
        p="1rem 1.25rem 0.5rem"
        bg="white"
        color="rgb(86, 90, 105)"
        justifyContent="space-between"
        borderRadius="1.37rem 1.37rem 0 0"
      >
        <Text color="black" fontWeight="500">
          Swap
        </Text>
        <SettingsIcon
          fontSize="1.25rem"
          cursor="pointer"
          _hover={{ color: "rgb(128,128,128)" }}
        />
      </Flex>

      <Box p="0.5rem" bg="white" borderRadius="0 0 1.37rem 1.37rem">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          bg="rgb(247, 248, 250)"
          p="1rem 1rem 1.7rem"
          borderRadius="1.25rem"
          border="0.06rem solid rgb(237, 238, 242)"
          _hover={{ border: "0.06rem solid rgb(211,211,211)" }}
        >
          <Box>
            <Button
              bg="white"
              borderRadius="1.12rem"
              boxShadow="rgb(0 0 0 / 8%) 0rem 5.25rem 0.62rem"
              fontWeight="500"
              mr="0.5rem"
              rightIcon={
                <ChevronDownIcon fontSize="1.37rem" cursor="pointer" />
              }
              onClick={onSelectInput}
            >
              <Image
                boxSize="1.5rem"
                src={etherLogo}
                alt="Ether Logo"
                mr="0.5rem"
              />
              ETH
            </Button>
          </Box>
          <Box>
            <Input
              placeholder="0.0"
              fontWeight="500"
              fontSize="1.5rem"
              width="100%"
              size="19rem"
              textAlign="right"
              bg="rgb(247, 248, 250)"
              outline="none"
              border="none"
              focusBorderColor="none"
              type="number"
            />
          </Box>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          bg="rgb(247, 248, 250)"
          pos="relative"
          p="1rem 1rem 1.7rem"
          borderRadius="1.25rem"
          mt="0.25rem"
          border="0.06rem solid rgb(237, 238, 242)"
          _hover={{ border: "0.06rem solid rgb(211,211,211)" }}
        >
          <Box>
            <Button
              bg="rgb(232, 0, 111)"
              color="white"
              p="0rem 1rem"
              borderRadius="1.12rem"
              boxShadow="rgb(0 0 0 / 8%) 0rem 5.25rem 0.62rem"
              _hover={{ bg: "rgb(207, 0, 99)" }}
              rightIcon={
                <ChevronDownIcon fontSize="1.37rem" cursor="pointer" />
              }
              onClick={onSelectOutput}
            >
              Select a token
            </Button>
          </Box>
          <Flex
            alignItems="center"
            justifyContent="center"
            bg="white"
            p="0.18rem"
            borderRadius="0.75rem"
            pos="relative"
            top="-2.37rem"
            left="2.5rem"
          >
            <ArrowDownIcon
              bg="rgb(247, 248, 250)"
              color="rgb(128,128,128)"
              h="1.5rem"
              width="1.62rem"
              borderRadius="0.75rem"
            />
          </Flex>
          <Box>
            <Input
              placeholder="0.0"
              fontSize="1.5rem"
              width="100%"
              size="19rem"
              textAlign="right"
              bg="rgb(247, 248, 250)"
              outline="none"
              border="none"
              focusBorderColor="none"
              type="number"
            />
          </Box>
        </Flex>

        <Box mt="0.5rem">
          <Button
            color="rgb(213, 0, 102)"
            bg="rgb(253, 234, 241)"
            width="100%"
            p="1.62rem"
            borderRadius="1.25rem"
            _hover={{ bg: "rgb(251, 211, 225)" }}
            onClick={onSelectPrimary}
          >
            Connect Wallet
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
