import { Text, Group, Grid, Box, Flex, Container, Title, Image, Switch } from "@mantine/core";
import Button from "../layouts/Buttons";
import Steps from "../layouts/Steps";
import { useNavigate } from "react-router-dom";
import arcade from "../../assets/images/icon-arcade.svg";
import advance from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import { useState } from "react";

const SelectPlan = () => {
  const navigate = useNavigate();
  const [yearlyPlan, setYearlyPlan] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(0);

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

  const handleYearlyPlan = () => {
    setYearlyPlan(!yearlyPlan);
  };

  const handleSelectedPlan = (index) => {
    setSelectedPlan(index);
  };

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
        <Box w="25%">
          <Steps />
        </Box>

        <Box w="50%">
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
                <Text size="md" mt={10}>
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
            <Switch
              defaultChecke={yearlyPlan}
              onChange={handleYearlyPlan}
              color="hsl(206, 94%, 16%)"
            />
            <Text>Yearly</Text>
          </Group>

          <Group justify="space-between" mt={50}>
            <Button variant="tertiary" onClick={() => navigate(-1)}>
              Go Back
            </Button>
            <Button variant="primary" onClick={() => navigate("/pick-add")}>
              Next Step
            </Button>
          </Group>
        </Box>
      </Flex>
    </Container>
  );
};

export default SelectPlan;
