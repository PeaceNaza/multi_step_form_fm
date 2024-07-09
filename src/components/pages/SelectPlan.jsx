import { Text, Group, Box, Flex, Container, Title } from "@mantine/core";
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
        <Box mt={40}>
        <Title order={2} ff="Ubuntu">Select your plan</Title>
        <Text size="sm" c="hsl(231, 11%, 63%)">You have the option of monthly or yearly billing</Text>
        
        <Group justify="space-between" mt={50}>
        <Button variant="tertiary" onClick={() => navigate(-1)}>
          Go Back
        </Button>
        <Button variant="primary">Next Step</Button>
        </Group>
       
        </Box>
      </Flex>
  
    </Container>
  );
};

export default SelectPlan;
