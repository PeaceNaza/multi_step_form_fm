import Steps from "../layouts/Steps";
import { Container, Box, Flex, Image, Title, Text } from "@mantine/core";
import finished from "../../assets/images/icon-thank-you.svg";

const Finished = () => {
  return (
    <Container
      mt={{ base: 0, md: 50 }}
      w={{ base: "90vw", md: "60vw" }}
      h={{ base: "57vh", md: "85vh" }}
      bg="hsl(0, 0%, 100%)"
      className="top  rounded-md shadow-md"
    >
      <Flex
        align={{ base: "center", md: "flex-start" }}
        justify="flex-start"
        pt={15}
        direction={{ base: "column", md: "row" }}
        gap={{ base: 0, md: 20, lg: 10 }}
      >
        <Box display={{ base: "none", md: "block" }}>
          <Steps />
        </Box>
        <Box>
          <Flex direction="column" align="center" justify="center" gap={20}>
            <Image src={finished} alt="finished" w={60} mt={{ base: 50, md: 130 }} />
            <Title order={2}>Thank you! </Title>
            <Text
              px={{ base: 10, md: 80 }}
              c="hsl(231, 11%, 63%)"
              className="mt-[-10px] text-center tracking-tight md:text-sm"
            >
              Thanks for confirming your subscription! We hope you have fun using our platform. If
              you ever need support, please feel free to email us at support@loremgaming.com.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Finished;
