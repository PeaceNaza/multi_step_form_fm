/* eslint-disable react/prop-types */
import "../../styles/step.css";
import { Box, TextInput, Group, Title, Text, Container, Flex } from "@mantine/core";
import Button from "../layouts/Buttons";
import { useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import useFormStore from "../formStore";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import Steps from "../layouts/Steps";

const schema = yup.object().shape({
  name: yup.string().required("This field is required"),
  email: yup.string().email("Invalid email").required("This field is required"),
  phone: yup
    .number()
    .required("This field is required")
    .typeError("This field is required")
    .positive("Invalid phone number")
    .integer("Invalid phone number"),
});

const Personal = () => {
  const navigate = useNavigate();
  const { personalInfo, setPersonalInfo, setCurrentStep, previousStep } = useFormStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: personalInfo,
  });

  useEffect(() => {
    setCurrentStep(1);
  }, [setCurrentStep]);

  const submitForm = (data, e) => {
    e.preventDefault();
    setPersonalInfo(data);
    console.log(data);
    navigate("/select-plan");
  };

  return (
    <>
      <Container
        mt={{ base: 0, md: 50 }}
        w={{ base: "90vw", md: "60vw" }}
        h={{ md: "85vh" }}
        bg="hsl(0, 0%, 100%)"
        className="top rounded-md shadow-md"
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
          <Box mt={{ base: 10, md: 23 }} mb={{ base: 35, md: 23 }}>
            <Title order={2} ff="Ubuntu" fw={700} mb={{ base: 10, md: 0 }}>
              {" "}
              Personal info{" "}
            </Title>
            <Text c="hsl(231, 11%, 63%)" className="tracking-wide md:text-sm">
              {" "}
              Please provide your name, email address, and phone number.
            </Text>
            <form onSubmit={handleSubmit(submitForm)} className="font-medium">
              <Box mt={20}>
                <Group justify="space-between">
                  <Text size="sm">Name</Text>
                  <Text size="sm" fw={500} c="hsl(354, 84%, 57%)">
                    {errors.name?.message}
                  </Text>
                </Group>
                <TextInput
                  placeholder="e.g. Stephen King"
                  ref={register}
                  {...register("name")}
                  styles={{
                    input: {
                      color: "hsl(213, 96%, 18%)",
                      fontFamily: "Ubuntu",
                      borderColor: errors.name && "hsl(354, 84%, 57%)",
                      borderWidth: 1,
                    },
                  }}
                />
              </Box>

              <Box mt={20}>
                <Group justify="space-between">
                  <Text size="sm">Email Address</Text>
                  <Text size="sm" fw={500} c="hsl(354, 84%, 57%)">
                    {errors.email?.message}
                  </Text>
                </Group>
                <TextInput
                  placeholder="e.g. stephenking@lorem.com"
                  {...register("email")}
                  styles={{
                    input: {
                      color: "hsl(213, 96%, 18%)",
                      fontFamily: "Ubuntu",
                      borderColor: errors.email && "hsl(354, 84%, 57%)",
                    },
                  }}
                />
              </Box>

              <Box mt={20}>
                <Group justify="space-between">
                  <Text size="sm">Phone Number</Text>
                  <Text size="sm" fw={500} c="hsl(354, 84%, 57%)">
                    {errors.phone?.message}
                  </Text>
                </Group>
                <TextInput
                  placeholder="e.g. +1 234 567 890"
                  {...register("phone")}
                  styles={{
                    input: {
                      color: "hsl(213, 96%, 18%)",
                      fontFamily: "Ubuntu",
                      borderColor: errors.phone && "hsl(354, 84%, 57%)",
                    },
                  }}
                />
              </Box>

              <Group
                justify="flex-end"
                mt={{ lg: 90, md: 70 }}
                display={{ base: "none", md: "flex" }}
              >
                <Button variant="primary">Next step</Button>
              </Group>
            </form>
          </Box>
        </Flex>
      </Container>

      <form onSubmit={handleSubmit(submitForm)}>
        <Group
          className=" bg-secondary-500 mt-[30rem]"
          h="100%"
          w="100vw"
          justify="flex-end"
          py={{ base: 23, md: 0 }}
          pr={{ base: 25, md: 0 }}
          display={{ base: "flex", md: "none" }}
        >
          <Button variant="primary">Next step</Button>
        </Group>
      </form>
    </>
  );
};

export default Personal;
