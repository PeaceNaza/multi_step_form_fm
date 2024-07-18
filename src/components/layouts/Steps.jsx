import { Text, Flex, Box, Group } from "@mantine/core";
import Button from "./Buttons";

import "../../styles/step.css";
import useFormStore from "../formStore";

const Steps = () => {
   const { currentStep } = useFormStore();

  const steps = [
    { 
      id: 1,
      title: "STEP 1", 
      description: "Your INFO", 
      button: 1 
    },

    { 
      id: 2,
      title: "STEP 2", 
      description: "SELECT PLAN", 
      button: 2 
    },
    { 
      id: 3,
      title: "STEP 3", 
      description: "ADD-ONS", 
      button: 3 
    },
    { 
      id: 4,
      title: "STEP 4", 
      description: "SUMMARY", 
      button: 4 
    },
  ];
 
  
  return (
    <Box miw="30%" mih="80vh" className="sidebar rounded-md">
      <Flex direction={{ base: "row", md: "column" }} gap={15} p={20}>
        {steps.map((step) => (
          <Group mt={10} key={step.button} justify="flex-start" className="rounded-md">
            <Button variant="secondary" isActive={currentStep === step.button}>{step.button}</Button>
            <Box>
              <Text size="10px" c="hsl(231, 11%, 63%)">
                {step.title}
              </Text>
              <Text size="xs" c="white" mt={3} fw={500} ff="Ubuntu">
                {step.description}
              </Text>
            </Box>
          </Group>
        ))}
      </Flex>
    </Box>
  );
};
export default Steps;
