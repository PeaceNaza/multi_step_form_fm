import { Container, TextInput, Group, Title, Text, Flex } from "@mantine/core";
import Button from "../layouts/Buttons";
import Steps from "../layouts/Steps";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Personal = () => {
  const navigate = useNavigate();

  const textInput = [
    { label: "Name", placeholder: "e.g. Stephen King" },
    { label: "Email Address", placeholder: "e.g. stephenking@lorem.com" },
    { label: "Phone Number", placeholder: "e.g. +1 234 567 890" },
  ];

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted: ", data);
    navigate("/select-plan");
  };

  return (
    <Container
      size="75%"
      mt={90}
      h={{ base: "", md: "80vh" }}
      bg="hsl(0, 0%, 100%)"
      className="rounded-md shadow"
    >
      <Flex
        justify="flex-start"
        pt={15}
        direction={{ base: "column", md: "row", xs: "column" }}
        wrap="wrap"
        gap={50}
      >
        <Steps />

        <form className="mt-10" onSubmit={handleSubmit}>
          <Title order={2} ff="Ubuntu">
            {" "}
            Personal info{" "}
          </Title>
          <Text size="sm" c="hsl(231, 11%, 63%)">
            {" "}
            Please provide your name, email address, and phone number.
          </Text>
          <Flex direction="column" gap={20} mt={20}>
            {textInput.map((input, index) => (
              <TextInput
                key={index}
                label={input.label}
                placeholder={input.placeholder}
                value={data[input.label.toLowerCase()]}
                onChange={(event) =>
                  setData({ ...data, [input.label.toLowerCase()]: event.currentTarget.value })
                }
                error={input.required ? "This field is required" : null}
                required
              />
            ))}
          </Flex>
          <Group justify="flex-end" mt={50}>
            <Button onClick={handleSubmit} variant="primary">
              Next Step
            </Button>
          </Group>
        </form>
      </Flex>
    </Container>
  );
};

export default Personal;
