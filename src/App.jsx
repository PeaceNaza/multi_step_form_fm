import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import { MantineProvider } from "@mantine/core";
import { Group } from "@mantine/core";
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
      <Group w="100vw" display={{ base: "block", md: "none" }}>
        <Steps />
      </Group>

      <Router>
        <Routes>
          <Route path="/" element={<Personal />} />
          <Route path="/select-plan" element={<SelectPlan />} />
          <Route path="/pick-add" element={<PickAdd />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/finished" element={<Finished />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
};

export default App;
