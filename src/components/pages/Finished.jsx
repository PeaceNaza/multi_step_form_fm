import Steps from "../layouts/Steps";
import { Container, Box, Flex, Image } from "@mantine/core";
import finished from "../../assets/images/icon-thank-you.svg";

const Finished = () => {
  return (
   

        <Box>
          <Flex direction="column" align="center" justify="center" gap={20}>
            <Image src={finished} alt="finished" w={100} />
            <h1 className="text-2xl font-bold">Thank you! </h1>
            <p className="text-center text-gray-500">
              Thanks for confirming your subscription! We hope you have fun using our platform. If
              you ever need support, please feel free to email us at support@loremgaming.com.
            </p>
          </Flex>
        </Box>
      
  );
};

export default Finished;
