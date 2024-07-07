import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import { MantineProvider } from "@mantine/core";
import { Container } from "@mantine/core";
import Personal from "./components/pages/Personal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SelectPlan from "./components/pages/SelectPlan";

const App = () => {
  return (
    <MantineProvider>
      <Container fluid className="px-5 md:px-20">
        <Router>
          <Routes>
            <Route path="/" element={<Personal />} />
            <Route path="/select-plan" element={<SelectPlan />} />
          </Routes>
        </Router>
      </Container>
    </MantineProvider>
  );
};

export default App;
