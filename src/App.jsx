import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import { MantineProvider } from "@mantine/core";
import { Container } from "@mantine/core";
import Personal from "./components/Personal";

const App = () => {
  return (
    <MantineProvider>
     <Container>
      <Personal />
     </Container>
    </MantineProvider>
  );
};

export default App;
