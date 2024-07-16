import useFormStore from "../formStore";
import Personal from "../pages/Personal";
import SelectPlan from "../pages/SelectPlan";
import PickAdd from "../pages/PickAdd";
import Summary from "../pages/Summary";
import Finished from "../pages/Finished";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Container } from "@mantine/core";
import Steps from "../layouts/Steps";

const Form = () => {
  const navigate = useNavigate();
  const { formData, setFormData, page, setPage, error, setError } = useFormStore();

  const { step, name, email, phone, plan, planType, addons } = formData;

  function prevStep() {
    const { step } = formData;
    setFormData((prevFormData) => ({ ...prevFormData, step: step - 1 }));
  }

  function nextStep() {
    const { step } = formData;
    setFormData((prevFormData) => ({ ...prevFormData, step: step + 1 }));
  }

  function secondStep() {
    const { step } = formData;
    setFormData((prevFormData) => ({ ...prevFormData, step: step + 2 }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function handleOptionChange(e) {
    setFormData((prevFormData) => ({ ...prevFormData, [e.target.name]: e.target.value }));
  }

  function handleCheckboxChange(e) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      addons: [...prevFormData.addons, e.target.value],
    }));
  }

  function removeCheckboxChange(e) {
    setFormData((prevFormData) => {
      const addons = prevFormData.addons.filter((p) => p !== e.target.value);
      return { ...prevFormData, addons };
    });
  }

  const pageDisplay = () => {
    switch (step) {
      case 1:
        return (
          <Personal
            nextStep={nextStep}
            handleChange={handleChange}
            name={name}
            email={email}
            phone={phone}
          />
        );
      case 2:
        return (
          <SelectPlan
            prevStep={prevStep}
            nextStep={nextStep}
            handleOptionChange={handleOptionChange}
            plan={plan}
            planType={planType}
          />
        );
      case 3:
        return (
          <PickAdd
            prevStep={prevStep}
            nextStep={nextStep}
            addons={addons}
            handleCheckboxChange={handleCheckboxChange}
            removeCheckboxChange={removeCheckboxChange}
          />
        );
      case 4:
        return (
          <Summary
            prevStep={prevStep}
            nextStep={nextStep}
            secondStep={secondStep}
            plan={plan}
            planType={planType}
            addons={addons}
          />
        );
      default:
        return <Finished />;
    }
  };

  return (
    <Container
      size="75%"
      mt={50}
      h={{ base: "", md: "85vh" }}
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
        <Steps step={step} />
        {pageDisplay()}
      </Flex>
    </Container>
  );
};

export default Form;
