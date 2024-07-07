import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import { MantineProvider } from "@mantine/core";
import { Container } from "@mantine/core";
import Personal from "./components/pages/Personal";

const App = () => {
  return (
    <MantineProvider>
      <Container fluid className="px-5 md:px-20">
        <Personal />
      </Container>
    </MantineProvider>
  );
};

export default App;
