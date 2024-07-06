import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import { MantineProvider } from "@mantine/core";

const App = () => {
  return (
    <MantineProvider>
    <div className='text-red-600 text-5xl'>App</div>
    </MantineProvider>
  )
}

export default App

