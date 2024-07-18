import { Container, Flex, Box, Title, Text, Anchor, Group } from "@mantine/core";
import Steps from "../layouts/Steps";
import Button from "../layouts/Buttons";
import { useNavigate } from "react-router-dom";
import useFormStore from "../formStore";
import { useEffect } from "react";


const Summary = () => {
  const navigate = useNavigate();

  const finish = () => {
    if (window.confirm("are you sure you want to submit?")) {
    navigate("/finished");
  }}

  const { selectedPlan, setSelectedPlan, selectedAddOns, yearlyPlan, setYearlyPlan, setCurrentStep } =
    useFormStore();

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

  useEffect(() => {
    setCurrentStep(4);
  }, [setCurrentStep]);

  const planDetails = plans[selectedPlan];
  const addOnDetails = addOns.filter((addOn) => selectedAddOns.includes(addOn.id));

  const toggleChange = () => {
    setYearlyPlan(!yearlyPlan);
    setSelectedPlan(selectedPlan);
  };

  const totalAmount = addOnDetails.reduce((acc, addOn) => {
    return acc + parseInt(addOn.price.replace("$", ""));
  }, parseInt(yearlyPlan ? planDetails.year.replace("$", "") : planDetails.month.replace("$", "")));

  return (

        <Box>

          <Title order={2} ff="Ubuntu">
            Finishing up
          </Title>

          <Text size="sm" c="hsl(231, 11%, 63%)">
            Double check everything looks OK before confirming.
          </Text>

          <Box mt={50} p={20} bg="hsl(217, 100%, 97%)" className="rounded-md shadow" my={20}>
            <Flex align="center" justify="space-between">
              <Text>
                {planDetails.name}({yearlyPlan ? "Yearly" : "Monthly"})
              </Text>
              <Text>{yearlyPlan ? planDetails.year : planDetails.month}</Text>
            </Flex>
            <Anchor onClick={toggleChange}>Change</Anchor>
            <hr />
          
             {addOnDetails.map((addOn, index) => (
               <Flex  key={index} align="center" justify="space-between">
                  <Text>
                    {addOn.title} 
                  </Text>
                   <Text>{addOn.price}</Text>
                </Flex>
              ))}
             
          </Box>
          <Group justify="space-between">
            <Text>{yearlyPlan ? "Total (per year)" : "Total (per month)"}</Text>
            <Text>${totalAmount}</Text>
          </Group>
          <Group justify="space-between" mt={50}>
            <Button variant="tertiary" onClick={() => navigate(-1)}>
              Go Back
            </Button>
            <Button variant="primary" onClick={finish}>
              Finish
            </Button>
          </Group>
        </Box>
     
  );
};

export default Summary;
