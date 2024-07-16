import { Box, Flex, Text, Title, Container, Checkbox, Group } from "@mantine/core";
import Steps from "../layouts/Steps";
import Button from "../layouts/Buttons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PickAdd = () => {
  const navigate = useNavigate();

  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const pickAddOns = [
    {
      id: 1,
      title: "Online service",
      description: "Access to multiplayer games",
      price: "+$1/mo",
    },
    {
      id: 2,
      title: "Larger storage",
      description: "1TB of cloud save",
      price: "+$2/mo",
    },
    {
      id: 3,
      title: "Custom profile",
      description: "Custom theme on your profile",
      price: "+$2/mo",
    },
  ];

  const handleSelectedAddOns = (id) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  return (
    <>
      <Container mt={50} h={{ md: "85vh" }} bg="hsl(0, 0%, 100%)" className="rounded-md shadow">
        <Flex
          align="center"
          justify="flex-start"
          pt={15}
          direction={{ base: "column", md: "row" }}
          wrap="wrap"
          gap={50}
        >
          <Box w="25%">
            <Steps step={3} />
          </Box>
          <Box w="60%">
            <Title>Pick add-ons </Title>
            <Text size="sm">Add-ons help enhance your gaming experience.</Text>
            {pickAddOns.map((addOn) => {
              const isSelected = selectedAddOns.includes(addOn.id);
              return (
                <Box
                  key={addOn.id}
                  p={10}
                  bg="hsl(0, 0%, 100%)"
                  className="rounded-md shadow"
                  my={20}
                >
                  <Flex align="center" justify="space-between">
                    <Group wrap="wrap" align="flex-start">
                      <Checkbox
                        size={15}
                        mt={20}
                        mr={5}
                        checked={isSelected}
                        onChange={() => handleSelectedAddOns(addOn.id)}
                      />
                      <Box>
                        <Title order={4} ff="Ubuntu">
                          {addOn.title}
                        </Title>
                        <Text>{addOn.description}</Text>
                      </Box>
                    </Group>

                    <Text>{addOn.price}</Text>
                  </Flex>
                </Box>
              );
            })}
            <Group justify="space-between" mt={50}>
              <Button variant="tertiary" onClick={() => navigate(-1)}>
                Go Back
              </Button>
              <Button
                variant="primary"
                onClick={() => navigate("/summary")}
                disabled={selectedAddOns.length === 0}
              >
                Next Step
              </Button>
            </Group>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default PickAdd;
