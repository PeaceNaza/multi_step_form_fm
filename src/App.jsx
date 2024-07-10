import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import { MantineProvider } from "@mantine/core";
import { Container } from "@mantine/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/layouts/Form";

const App = () => {
  return (
    <MantineProvider>
      <Container fluid className="px-5 md:px-20">
        <Router>
          <Routes>
            <Route path="/" element={<Form />} />
          </Routes>
        </Router>
      </Container>
    </MantineProvider>
  );
};

export default App;
