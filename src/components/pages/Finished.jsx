import Steps from "../layouts/Steps";
import { Container, Box, Flex, Image } from "@mantine/core";
import finished from "../../assets/images/icon-thank-you.svg";

const Finished = () => {
  return (
    <Container mt={50} h={{ md: "85vh" }} bg="hsl(0, 0%, 100%)" className="rounded-md shadow">
      <Flex
        align="center"
        justify="flex-start"
        pt={15}
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        gap={50}
      >
        <Box w="30%">
          <Steps />
        </Box>

        <Box w="60%">
          <Flex direction="column" align="center" justify="center" gap={20}>
            <Image src={finished} alt="finished" w={100} />
            <h1 className="text-2xl font-bold">Thank you! </h1>
            <p className="text-center text-gray-500">
              Thanks for confirming your subscription! We hope you have fun using our platform. If
              you ever need support, please feel free to email us at support@loremgaming.com.
            </p>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Finished;
