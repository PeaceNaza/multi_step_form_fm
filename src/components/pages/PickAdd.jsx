import { Box, Flex, Text, Title, Container, Checkbox, Group } from "@mantine/core";
import Button from "../layouts/Buttons";
import { useNavigate } from "react-router-dom";
import useFormStore from "../formStore";
import { useEffect } from "react";
import Steps from "../layouts/Steps";

const PickAdd = () => {
  const navigate = useNavigate();

  const { selectedAddOns, setSelectedAddOns, setCurrentStep } = useFormStore();

  const pickAddOns = [
    {
      id: 1,
      title: "Online service",
      description: "Access to multiplayer games",
      price: "+$1/mo",
      year: "+$10/year",
    },
    {
      id: 2,
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: "+$2/mo",
      year: "+$20/year",
    },
    {
      id: 3,
      title: "Customizable profile",
      description: "Custom theme on your profile",
      price: "+$2/mo",
      year: "+$20/year",
    },
  ];

  useEffect(() => {
    setCurrentStep(3);
  }, [setCurrentStep]);

  const handleSelectedAddOns = (id) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== id));
      console.log(
        "Deleted:",
        pickAddOns.find((item) => item.id === id),
      );
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
      console.log(
        "Added:",
        pickAddOns.find((item) => item.id === id),
      );
    }
  };

  return (
    <>
      <Container
        mt={{ base: 0, md: 50 }}
        w={{ base: "90vw", md: "60vw" }}
        h={{ md: "85vh" }}
        bg="hsl(0, 0%, 100%)"
        className="top  rounded-md shadow-md"
      >
        <Flex
          align={{ base: "center", md: "flex-start" }}
          justify="flex-start"
          pt={15}
          direction={{ base: "column", md: "row" }}
          gap={{ base: 0, md: 20, lg: 70 }}
        >
          <Box display={{ base: "none", md: "block" }}>
            <Steps />
          </Box>

          <Box w={{ base: "97%", md: "57%" }} mt={{ base: 10, md: 23 }} mb={{ base: 25, md: 23 }}>
            <Title order={2} ff="Ubuntu" mb={{ base: 8, md: 2 }} fw={700}>
              Pick add-ons{" "}
            </Title>
            <Text mb={25} c="hsl(231, 11%, 63%)" className="tracking-wider md:text-sm">
              Add-ons help enhance your gaming experience.
            </Text>

            {pickAddOns.map((addOn) => {
              const isSelected = selectedAddOns.includes(addOn.id);
              return (
                <Box
                  key={addOn.id}
                  p={10}
                  my={20}
                  className={`border rounded-md shadow hover:border hover:border-primary-200 cursor-pointer  ${isSelected ? "bg-secondary-300 border border-primary-200" : ""}`}
                >
                  <Flex align="center" justify="space-between">
                    <Group wrap="wrap" align="flex-start">
                      <Checkbox
                        size={18}
                        color="hsl(243, 100%, 62%)"
                        my={13}
                        ml={5}
                        checked={isSelected}
                        onChange={() => handleSelectedAddOns(addOn.id)}
                      />
                      <Box>
                        <Text fw={500} ff="Ubuntu">
                          {addOn.title}
                        </Text>
                        <Text size="xs" c="hsl(231, 11%, 63%)">
                          {addOn.description}
                        </Text>
                      </Box>
                    </Group>

                    <Text size="xs" c="hsl(243, 100%, 62%)">
                      {addOn.price}
                    </Text>
                  </Flex>
                </Box>
              );
            })}

            <Group justify="space-between" mt={63} display={{ base: "none", md: "flex" }}>
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

      <Group
        h="100%"
        w="100vw"
        py={{ base: 20, md: 0 }}
        pr={{ base: 25, md: 0 }}
        pl={{ base: 10, md: 0 }}
        display={{ base: "flex", md: "none" }}
        justify="space-between"
        className="bg-secondary-500 mt-[31rem]"
      >
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
    </>
  );
};

export default PickAdd;
