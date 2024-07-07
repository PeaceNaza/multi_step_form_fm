import { Container, TextInput, Group, Title, Text, Flex, Box } from "@mantine/core"
import Button from "../layouts/Buttons"
import Steps from "../layouts/Steps"
import { useState } from "react"
import { Form } from "@mantine/form"


const Personal = () => {
  const textInput = [
    { label: "Name", placeholder: "e.g. Stephen King" },
    { label: "Email Address", placeholder: "e.g. stephenking@lorem.com"},
    { label: "Phone Number", placeholder: "e.g. +1 234 567 890" }
  ] 
   
  const [value, setValue] = useState("")
  console.log(value)
  
  return (
    <Container size="75%" mt={90} h={{base: "", md: "80vh"}} bg="hsl(0, 0%, 100%)" className="rounded-md">
  <Flex justify="flex-start" pt={15} direction={{base: "column", md: "row", xs: "column"}} wrap="wrap" gap={50}>
    
      <Steps />
    

    <form className="mt-10">
      <Title order={2} ff="Ubuntu"> Personal info </Title>
      <Text size="xs" c="hsl(231, 11%, 63%)"> Please provide your name, email address, and phone number.</Text>
      <Flex direction="column" gap={20} mt={20}>
        {textInput.map((input, index) => (
          <TextInput
            key={index}
            label={input.label}
            placeholder={input.placeholder}
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
        ))}
      </Flex>
     <Group justify="flex-end" mt={40}>
     <Button variant="primary">Next Step</Button>
     </Group>
      
    </form>
  </Flex>
    
    </Container>
  )
}

export default Personal