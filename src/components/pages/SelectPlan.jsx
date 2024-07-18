import { Text, Group, Grid, Box, Flex, Container, Title, Image, Switch } from "@mantine/core";
import Button from "../layouts/Buttons";
import { useNavigate } from "react-router-dom";
import arcade from "../../assets/images/icon-arcade.svg";
import advance from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import useFormStore from "../formStore";
import { useEffect } from "react";

const SelectPlan = () => {
  const navigate = useNavigate();
  const { selectedPlan, setSelectedPlan, yearlyPlan, setYearlyPlan, setCurrentStep} = useFormStore();

  const plan = [
    {
      id: 1,
      name: "Arcade",
      month: "$9/mo",
      year: "$90/yr",
      bonus: "2 months free",
      img: <Image src={arcade} w={40} />,
    },
    {
      id: 2,
      name: "Advanced",
      month: "$12/mo",
      year: "$120/yr",
      bonus: "2 months free",
      img: <Image src={advance} w={40} />,
    },
    {
      id: 3,
      name: "Pro",
      month: "$15/mo",
      year: "$150/yr",
      bonus: "2 months free",
      img: <Image src={pro} w={40} />,
    },
  ];
  
  useEffect(() => {
    setCurrentStep(2);
  }, [setCurrentStep]);
  
  const handleYearlyPlan = () => {
    setYearlyPlan(!yearlyPlan);
  };

  const handleSelectedPlan = (index) => {
    setSelectedPlan(index);
    console.log(selectedPlan);
  };

  const handleNextStep = () => {
    if (selectedPlan >= 0) {
      console.log("selected:", plan[selectedPlan]);
      navigate("/pick-add");
    }
  };

  return (

        

        <Box>
          <Title order={2} ff="Ubuntu">
            Select your plan
          </Title>
          <Text size="sm" c="hsl(231, 11%, 63%)">
            You have the option of monthly or yearly billing
          </Text>
          <Grid>
            {plan.map((item, index) => (
              <Grid.Col
                w={120}
                h={150}
                span={0}
                m={20}
                key={index}
                p={20}
                className={`rounded-md border ${selectedPlan === index ? "border-primary-200 bg-secondary-300" : ""}`}
                onClick={() => handleSelectedPlan(index)}
              >
                {item.img}
                <Text size="md" mt={10} name={item.name}>
                  {item.name}
                </Text>
                <Text size="xs" c="hsl(231, 11%, 63%)" className="leading-7">
                  {yearlyPlan ? item.year : item.month}
                </Text>
                <Text size="xs">{yearlyPlan ? item.bonus : ""}</Text>
              </Grid.Col>
            ))}
          </Grid>

          <Group justify="center" mt={20} className="bg-secondary-300 rounded-md">
            <Text>Monthly</Text>
            <Switch checked={yearlyPlan} onChange={handleYearlyPlan} color="hsl(206, 94%, 16%)" />
            <Text>Yearly</Text>
          </Group>

          <Group justify="space-between" mt={50}>
            <Button variant="tertiary" onClick={() => navigate(-1)}>
              Go Back
            </Button>
            <Button variant="primary" onClick={handleNextStep}>
              Next Step
            </Button>
          </Group>
        </Box>
     
  );
};

export default SelectPlan;
