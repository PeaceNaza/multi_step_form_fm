import { Container, Flex, Box, Title, Text, Anchor, Group } from "@mantine/core";
import Steps from "../layouts/Steps";
import Button from "../layouts/Buttons";
import { useNavigate } from "react-router-dom";
import useFormStore from "../formStore";
import { useEffect } from "react";

const Summary = () => {
  const navigate = useNavigate();

  const finish = () => {
    if (window.confirm("Are you sure you want to submit?")) {
      setIsConfirmed(true);
      navigate("/finished");
    }
  };

  const {
    selectedPlan,
    setSelectedPlan,
    selectedAddOns,
    yearlyPlan,
    setYearlyPlan,
    setCurrentStep,
    setIsConfirmed,
    resetConfirmation,
  } = useFormStore();

  const plans = [
    {
      id: 1,
      name: "Arcade",
      month: "$9/mo",
      year: "$90/yr",
    },
    {
      id: 2,
      name: "Advanced",
      month: "$12/mo",
      year: "$120/yr",
    },
    {
      id: 3,
      name: "Pro",
      month: "$15/mo",
      year: "$150/yr",
    },
  ];

  const addOns = [
    {
      id: 1,
      title: "Online service",
      description: "Access to multiplayer games",
      price: "+$1/mo",
      yearly: "+$10/yr",
    },
    {
      id: 2,
      title: "Larger storage",
      description: "1TB of cloud save",
      price: "+$2/mo",
      yearly: "+$20/yr",
    },
    {
      id: 3,
      title: "Customizable profile",
      description: "Custom theme on your profile",
      price: "+$2/mo",
      yearly: "+$20/yr",
    },
  ];

  useEffect(() => {
    setCurrentStep(4);
    resetConfirmation();
  }, [setCurrentStep, resetConfirmation]);

  const planDetails = plans[selectedPlan];
  const addOnDetails = addOns.filter((addOn) => selectedAddOns.includes(addOn.id));

  const toggleChange = () => {
    setYearlyPlan(!yearlyPlan);
    setSelectedPlan(selectedPlan);
  };

  const totalAmount = addOnDetails.reduce(
    (acc, addOn) => {
      const addOnPrice = yearlyPlan ? addOn.yearly : addOn.price;
      return acc + parseInt(addOnPrice.replace("$", ""));
    },
    parseInt(yearlyPlan ? planDetails.year.replace("$", "") : planDetails.month.replace("$", "")),
  );

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
          align="flex-start"
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
              Finishing up
            </Title>

            <Text mb={25} c="hsl(231, 11%, 63%)" className="tracking-wider md:text-sm">
              Double check everything looks OK before confirming.
            </Text>

            <Box
              h={{ md: 180 }}
              mt={10}
              px={20}
              py={15}
              bg="hsl(217, 100%, 97%)"
              className="rounded-md shadow"
            >
              <Flex align="center" justify="space-between">
                <Text fw={500}>
                  {planDetails.name}({yearlyPlan ? "Yearly" : "Monthly"})
                </Text>
                <Text fw={500}>{yearlyPlan ? planDetails.year : planDetails.month}</Text>
              </Flex>
              <Anchor
                size="sm"
                underline="always"
                c="hsl(231, 11%, 63%)"
                onClick={toggleChange}
                className="click"
              >
                Change
              </Anchor>
              <hr className="my-4" />

              {addOnDetails.map((addOn, index) => (
                <Flex key={index} align="center" justify="space-between">
                  <Text mb={8} size="sm" c="hsl(231, 11%, 63%)">
                    {addOn.title}
                  </Text>
                  <Text size="sm">{yearlyPlan ? addOn.yearly : addOn.price}</Text>
                </Flex>
              ))}
            </Box>

            <Group mt={18} mx={20} justify="space-between">
              <Text size="sm" c="hsl(231, 11%, 63%)">
                {yearlyPlan ? "Total (per year)" : "Total (per month)"}
              </Text>
              <Text size="sm" c="hsl(243, 100%, 62%)" fw={500}>
                +${totalAmount}/{yearlyPlan ? "yr" : "mo"}
              </Text>
            </Group>

            <Group
              justify="space-between"
              mt={{ md: 60, lg: 78 }}
              display={{ base: "none", md: "flex" }}
            >
              <Button variant="tertiary" onClick={() => navigate(-1)}>
                Go Back
              </Button>
              <Button variant="confirm" onClick={finish}>
                Confirm
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
        <Button variant="confirm" onClick={finish}>
          Confirm
        </Button>
      </Group>
    </>
  );
};

export default Summary;
