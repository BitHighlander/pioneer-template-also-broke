import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  Image,
  MenuButton,
  MenuDivider,
  Icon,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { KeepKeyIcon } from "lib/assets/Icons/KeepKeyIcon";
import { usePioneer } from "lib/context/Pioneer";

const Footer = () => {
  const { state } = usePioneer();
  const { api, user, context } = state;

  const [walletDescriptions, setWalletDescriptions] = useState([]);
  const [walletsAvailable, setWalletsAvailable] = useState([]);
  const [balances, setBalances] = useState([]);
  const [metamaskPaired, setMetamaskPaired] = useState(false);
  const [keepkeyPaired, setKeepkeyPaired] = useState(false);
  const [nativePaired, setNativePaired] = useState(false);
  const [assetContext, setAssetContext] = useState("");
  const [assetContextImage, setAssetContextImage] = useState("");
  const [blockchainContext, setBlockchainContext] = useState("");
  const [blockchainContextImage, setBlockchainContextImage] = useState("");
  // const [pubkeys, setPubkeys] = useState([]);
  // const [walletDescriptions, setWalletDescriptions] = useState([]);
  // const [features, setKeepKeyFeatures] = useState({});

  const setContextWallet = async function (wallet: string) {
    try {
      // eslint-disable-next-line no-console
      console.log("setContextWallet: ", wallet);
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-console
      console.error("header e: ", e);
      // setKeepKeyError("Bridge is offline!");
    }
  };

  const setContextBlockchain = async function (blockchain: string) {
    try {
      // eslint-disable-next-line no-console
      console.log("setContextBlockchain: ", blockchain);
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-console
      console.error("header e: ", e);
      // setKeepKeyError("Bridge is offline!");
    }
  };

  const setContextAsset = async function (asset: string) {
    try {
      // eslint-disable-next-line no-console
      console.log("setContextAsset: ", asset);
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-console
      console.error("header e: ", e);
      // setKeepKeyError("Bridge is offline!");
    }
  };

  const onStart = async function () {
    try {
      // if(!wallet)
      //   await connect();
      // eslint-disable-next-line no-console
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-console
      console.error("header e: ", e);
      // setKeepKeyError("Bridge is offline!");
    }
  };

  const setUser = async function () {
    try {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { wallets, walletDescriptions, balances, pubkeys } = user;
      // eslint-disable-next-line no-console
      console.log("wallets: ", wallets);

      // const walletsAvailable = [
      //   { name: "keepkey", icon: KeepKeyIcon, paired: false },
      //   { name: "metamask", icon: MetaMaskIcon, paired: false },
      //   { name: "tallyho", icon: TallyHoIcon, paired: false },
      //   { name: "xdefi", icon: XDEFIIcon, paired: false },
      //   { name: "keplr", icon: KeplrIcon, paired: false },
      // ];
      //
      // for (let i = 0; i < walletsAvailable.length; i++) {
      //   const wallet = walletsAvailable[i];
      //   // if found, mark it as paired
      //   const match = walletDescriptions.filter(
      //     (e: any) => e.type === wallet.name
      //   );
      //   if (match.length >= 0) {
      //     walletsAvailable[i].paired = true;
      //   }
      // }

      for (let i = 0; i < walletDescriptions.length; i++) {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const wallet = walletDescriptions[i];
        if (wallet.type === "keepkey") {
          wallet.icon = KeepKeyIcon;
        }
        if (wallet.type === "metamask") {
          setMetamaskPaired(true);
        }
        if (wallet.type === "keepkey") {
          setKeepkeyPaired(true);
        }
        if (wallet.type === "native") {
          setNativePaired(true);
        }
        // TODO is it connected currently?
        wallet.paired = true;
        walletDescriptions[i] = wallet;
      }
      // eslint-disable-next-line no-console
      console.log("walletDescriptions: ", walletDescriptions);
      // setWalletsAvailable(walletsAvailable);
      setWalletDescriptions(walletDescriptions);
      setBalances(balances);
      // eslint-disable-next-line no-console
      console.log("walletsAvailable: ", walletsAvailable);

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

  return (
    <Flex
      as="footer"
      width="full"
      align="left"
      alignSelf="flex-end"
      justifyContent="left"
    >
      <Menu>
        {/* <Avatar size="lg" src={PIONEER_ICON}> */}
        {/*  {user?.assetContext} */}
        {/* </Avatar> */}
        {/* <MenuButton>a: {user?.assetContext}</MenuButton> */}
        {/* <MenuButton>b: {user?.blockchainContext}</MenuButton> */}
        <MenuButton
          as={Button}
          rounded="full"
          variant="link"
          cursor="pointer"
          minW={200}
        >
          <Avatar size="lg" src="/assets/png/pioneer.png">
            {api ? (
              <div>
                {!metamaskPaired && !keepkeyPaired && !nativePaired ? (
                  <div>
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </div>
                ) : (
                  <div />
                )}
                {metamaskPaired ? (
                  <div>
                    <AvatarBadge boxSize="1.25em" bg="green.500">
                      <Image rounded="full" src="/assets/png/metamask.png" />
                    </AvatarBadge>
                  </div>
                ) : (
                  <div />
                )}
              </div>
            ) : (
              <AvatarBadge boxSize="1.25em" bg="red.500" />
            )}
          </Avatar>
        </MenuButton>
        <MenuList>
          {/* <MenuItem>{state.username}</MenuItem> */}
          {/* <MenuDivider /> */}
          <MenuItem>
            <SimpleGrid columns={3} row={1}>
              <Card align="center" onClick={() => setContextWallet("native")}>
                <CardBody>
                  <Avatar src="/assets/png/pioneer.png">
                    {nativePaired ? (
                      <div>
                        <AvatarBadge boxSize="1.25em" bg="green.500" />
                      </div>
                    ) : (
                      <div>
                        <AvatarBadge boxSize="1.25em" bg="red.500" />
                      </div>
                    )}
                  </Avatar>
                </CardBody>
                <small>Pioneer</small>
              </Card>
              <Card align="center" onClick={() => setContextWallet("metamask")}>
                <CardBody>
                  <Avatar src="/assets/png/metamask.png">
                    {metamaskPaired ? (
                      <div>
                        <AvatarBadge boxSize="1.25em" bg="green.500" />
                      </div>
                    ) : (
                      <div>
                        <AvatarBadge boxSize="1.25em" bg="red.500" />
                      </div>
                    )}
                  </Avatar>
                </CardBody>
                <small>MetaMask</small>
              </Card>
              <Card align="center" onClick={() => setContextWallet("keepkey")}>
                <CardBody>
                  <Avatar src="/assets/png/keepkey.png">
                    {keepkeyPaired ? (
                      <div>
                        <AvatarBadge boxSize="1.25em" bg="green.500" />
                      </div>
                    ) : (
                      <div>
                        <AvatarBadge boxSize="1.25em" bg="red.500" />
                      </div>
                    )}
                  </Avatar>
                </CardBody>
                <small>KeepKey</small>
              </Card>
            </SimpleGrid>
          </MenuItem>
          <MenuDivider />
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Balances {balances.length}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {balances.map((balance: any) => (
                  <div>
                    <Avatar size="sm" src={balance.image} />
                    <small>symbol: {balance.symbol}</small>
                    <small>balance: {balance.balance}</small>
                  </div>
                ))}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/* <MenuItem>context: {user.context || "not Paired"}</MenuItem> */}
          {/* <MenuDivider /> */}
          {/* <MenuItem>Total Value(usd): {user.totalValueUsd}</MenuItem> */}
        </MenuList>
      </Menu>
      <Text fontSize="xs" />
    </Flex>
  );
};

export default Footer;
