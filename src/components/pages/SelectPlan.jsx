import { Text, Grid, Image, Box, Flex, Group, Container, Title, } from "@mantine/core";
import Button from "../layouts/Buttons";
import { useNavigate } from "react-router-dom";
import arcade from "../../assets/images/icon-arcade.svg";
import advance from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import useFormStore from "../formStore";
import { useEffect } from "react";
import Steps from "../layouts/Steps";
import "../../styles/step.css";

const SelectPlan = () => {
  const navigate = useNavigate();
  const { selectedPlan, setSelectedPlan, yearlyPlan, setYearlyPlan, setCurrentStep } =
    useFormStore();

  const plan = [
    {
      id: 1,
      name: "Arcade",
      month: "$9/mo",
      year: "$90/yr",
      bonus: "2 months free",
      img: <Image src={arcade} w={35} alt="arcade" />,
    },
    {
      id: 2,
      name: "Advanced",
      month: "$12/mo",
      year: "$120/yr",
      bonus: "2 months free",
      img: <Image src={advance} w={35} alt="advance" />,
    },
    {
      id: 3,
      name: "Pro",
      month: "$15/mo",
      year: "$150/yr",
      bonus: "2 months free",
      img: <Image src={pro} w={35} alt="pro" />,
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
    <>
      <Container
        mt={{ base: 0, md: 50 }}
        w={{ base: "90vw", md: "60vw" }}
        h={{ md: "85vh" }}
        bg="hsl(0, 0%, 100%)"
        className="top rounded-md shadow-md"
        pb={{ base: 40, md: 0 }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="flex-start"
          pt={15}
          align={{ base: "center", md: "flex-start" }}
          gap={{ base: 0, md: 20, lg: 75 }}
        >
          <Box display={{ base: "none", md: "block" }}>
            <Steps />
          </Box>
          <Box mt={{ base: 15, md: 25 }}>
            <Title order={2} ff="Ubuntu" mb={{ base: 10, md: 2 }} fw={700}>
              Select your plan
            </Title>
            <Text mb={30} c="hsl(231, 11%, 63%)" className="tracking-wider md:text-sm">
              You have the option of monthly or yearly billing
            </Text>
            <Grid span={12}>
              {plan.map((item, index) => (
                <Grid.Col
                  w={{ md: 120 }}
                  span={{ base: 11.3, md: 3.3 }}
                  m={8}
                  key={index}
                  p={{ base: 15, md: 10 }}
                  className={`rounded-md border shadow ${selectedPlan === index ? "border-primary-200 bg-secondary-300" : ""} hover:border-primary-200`}
                  onClick={() => handleSelectedPlan(index)}
                >
                  <Grid>
                    <Grid.Col span={{ base: 2.2, md: 12 }} justify="center">
                      <Text mt={5}>{item.img}</Text>
                    </Grid.Col>
                    <Grid.Col span={{ base: 9, md: 12 }} justify="center">
                      <Text fw={{ base: "bold", md: 500 }} mt={{ md: 18 }} size="md">
                        {item.name}
                      </Text>
                      <Text size="xs" c="hsl(231, 11%, 63%)" className="leading-5">
                        {yearlyPlan ? item.year : item.month}
                      </Text>
                      <Text size="xs" fw={500}>
                        {yearlyPlan ? item.bonus : ""}
                      </Text>
                    </Grid.Col>
                  </Grid>
                </Grid.Col>
              ))}
            </Grid>

            <Group
              py={8}
              mr={{ md: 15 }}
              justify="center"
              mt={30}
              className="bg-secondary-300 rounded-md "
            >
              <Text fw={500} className={`${yearlyPlan && " text-[#9699AB] "}`}>
                Monthly
              </Text>

              <input
                type="checkbox"
                className="toggle bg-secondary-400 [--tglbg:#02295A] hover:bg-secondary-400"
                defaultChecked
                onChange={handleYearlyPlan}
                checked={yearlyPlan}
              />
              <Text fw={500} className={`${!yearlyPlan && " text-[#9699AB] "}`}>
                Yearly
              </Text>
            </Group>

            <Group
              display={{ base: "none", md: "flex" }}
              justify="space-between"
              className={`${yearlyPlan ? "mt-16" : "mt-20"}`}
            >
              <Button variant="tertiary" onClick={() => navigate(-1)}>
                Go Back
              </Button>
              <Button variant="primary" onClick={handleNextStep}>
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
        className={`${yearlyPlan ? "mt-[34rem]" : "mt-[31rem]"}  bg-secondary-500 shadow`}
      >
        <Button variant="tertiary" onClick={() => navigate(-1)}>
          Go Back
        </Button>
        <Button variant="primary" onClick={handleNextStep}>
          Next Step
        </Button>
      </Group>
    </>
  );
};

export default SelectPlan;
