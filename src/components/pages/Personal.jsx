/* eslint-disable react/prop-types */

import { Box, TextInput, Group, Title, Text } from "@mantine/core";
import Button from "../layouts/Buttons";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data, e) => {
    e.preventDefault();
    console.log(data);
    navigate("/select-plan");
  };

  return (
    <Box mt={30}>
      <Title order={2} ff="Ubuntu">
        {" "}
        Personal info{" "}
      </Title>
      <Text size="sm" c="hsl(231, 11%, 63%)">
        {" "}
        Please provide your name, email address, and phone number.
      </Text>
      <form className="mt-5" onSubmit={handleSubmit(submitForm)}>
        <TextInput
          my={10}
          label="Name"
          placeholder="e.g. Stephen King"
          ref={register}
          {...register("name")}
          error={errors.name?.message}
        />

        <TextInput
          my={10}
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          {...register("email")}
          error={errors.email?.message}
        />

        <TextInput
          my={10}
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
