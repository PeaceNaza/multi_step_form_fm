import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import { MantineProvider } from "@mantine/core";
import { Container } from "@mantine/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/layouts/Form";
import SelectPlan from "./components/pages/SelectPlan";
import PickAdd from "./components/pages/PickAdd";
import Summary from "./components/pages/Summary";
import Finished from "./components/pages/Finished";

const App = () => {
  return (
    <MantineProvider>
      <Container fluid className="px-5 md:px-20">
        <Router>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/select-plan" element={<SelectPlan />} />
            <Route path="/pick-add" element={<PickAdd />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/finished" element={<Finished />} />
          </Routes>
        </Router>
      </Container>
    </MantineProvider>
  );
};

export default App;
