/* eslint-disable react/prop-types */

import { Box, TextInput, Group, Title, Text } from "@mantine/core";
import Button from "../layouts/Buttons";
import { useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import useFormStore from "../formStore";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";

const schema = yup.object().shape({
  name: yup.string().required("This field is required"),
  email: yup.string().email("Invalid email").required("This field is required"),
  phone: yup
    .number()
    .typeError("Phone number must be a number")
    .positive("Phone number must be positive")
    .required("This field is required"),
});

const Personal = () => {
  const navigate = useNavigate();
  const { personalInfo, setPersonalInfo, setCurrentStep } = useFormStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: personalInfo,
  });
 
  useEffect(() => {
    setCurrentStep(1)
  }, [setCurrentStep]);

  const submitForm = (data, e) => {
    e.preventDefault();
    setPersonalInfo(data);
    console.log(data);
    navigate("/select-plan");
  };

  return (

        <Box w={400}>
          <Title order={2} ff="Ubuntu">
            {" "}
            Personal info{" "}
          </Title>
          <Text size="sm" c="hsl(231, 11%, 63%)">
            {" "}
            Please provide your name, email address, and phone number.
          </Text>
          <form onSubmit={handleSubmit(submitForm)} >

            <TextInput
              mt={20}
              label="Name"
              placeholder="e.g. Stephen King"
              ref={register}
              {...register("name")}
              error={errors.name?.message}
            />

            <TextInput
              mt={30}
              label="Email Address"
              placeholder="e.g. stephenking@lorem.com"
              {...register("email")}
              error={errors.email?.message}
            />

            <TextInput
              mt={30}
              label="Phone Number"
              placeholder="e.g. +1 234 567 890"
              {...register("phone")}
              error={errors.phone?.message}
            />

            <Group justify="flex-end" mt={50}>
              <Button variant="primary">Next step</Button>
            </Group>
          </form>
        </Box>
     
  );
};

export default Personal;
