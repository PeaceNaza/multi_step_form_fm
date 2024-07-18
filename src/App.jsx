import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import { MantineProvider } from "@mantine/core";
import { Container, Box, Flex } from "@mantine/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SelectPlan from "./components/pages/SelectPlan";
import PickAdd from "./components/pages/PickAdd";
import Summary from "./components/pages/Summary";
import Finished from "./components/pages/Finished";
import Personal from "./components/pages/Personal";
import Steps from "./components/layouts/Steps";

const App = () => {
  return (
    <MantineProvider>
     <Container size="70vw" my={50} h={{ md: "85vh" }} bg="hsl(0, 0%, 100%)" className="rounded-md shadow">

        <Router>
        <Flex align="center" justify="flex-start" pt={15} direction={{ base: "column", md: "row" }} gap={70}>
            <Box w="26%">
              <Steps />
            </Box>

            <Box w='55%'>
          <Routes>
            <Route path="/" element={<Personal />} />
            <Route path="/select-plan" element={<SelectPlan />} />
            <Route path="/pick-add" element={<PickAdd />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/finished" element={<Finished />} />
          </Routes>
            </Box>
        </Flex>
        </Router>
      </Container>
    </MantineProvider>
  );
};

export default App;
