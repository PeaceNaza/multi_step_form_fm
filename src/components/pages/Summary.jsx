import React from "react";
import { Container, Flex, Box, Title, Text, Anchor, Group } from "@mantine/core";
import Steps from "../layouts/Steps";
import Button from "../layouts/Buttons";
import { useNavigate } from "react-router-dom";
import Finished from "./Finished";

const Summary = () => {
  const navigate = useNavigate();

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
        <Box w="28%">
          <Steps />
        </Box>

        <Box w="60%">
          <Title order={2} ff="Ubuntu">
            Finishing up
          </Title>
          <Text size="sm" c="hsl(231, 11%, 63%)">
            Double check everything looks OK before confirming.
          </Text>

          <Box mt={50} p={20} bg="hsl(217, 100%, 97%)" className="rounded-md shadow" my={20}>
            <Flex align="center" justify="space-between">
              <Text>Plan</Text>
              <Text>$10/mo</Text>
            </Flex>
            <Anchor>Change</Anchor>
            <hr />
            <Flex align="center" justify="space-between">
              <Text>Add-ons</Text>
              <Text>$2/mo</Text>
            </Flex>
          </Box>
          <Group justify="space-between">
            <Text>Total(monthly)</Text>
            <Text>$12/mo</Text>
          </Group>
          <Group justify="space-between" mt={50}>
            <Button variant="tertiary" onClick={() => navigate(-1)}>
              Go Back
            </Button>
            <Button variant="primary" onClick={() => navigate("/finished")}>
              Finish
            </Button>
          </Group>
        </Box>
      </Flex>
    </Container>
  );
};

export default Summary;
