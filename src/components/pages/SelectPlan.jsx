import { Text, Box, Flex, Container, Group } from "@mantine/core";
import Button from "../layouts/Buttons";
import Steps from "../layouts/Steps";
import { useNavigate } from "react-router-dom";

const SelectPlan = () => {
  const navigate = useNavigate();

  return (
    <Container
      size="75%"
      mt={90}
      h={{ md: "80vh" }}
      bg="hsl(0, 0%, 100%)"
      className="rounded-md shadow"
    >
      <Flex
        justify="flex-start"
        pt={15}
        direction={{ base: "column", md: "row", xs: "column" }}
        wrap="wrap"
        gap={50}
      >
        <Steps />

        <Box>
          <Text>Select your plan</Text>
          <Text>You have the option of monthly or yearly billing</Text>
        </Box>
      </Flex>

      <Group justify="space-around" mt={50}>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          Previous Step
        </Button>
        <Button variant="primary">Next Step</Button>
      </Group>
    </Container>
  );
};

export default SelectPlan;
