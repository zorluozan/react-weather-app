import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeProvider from "./theme/ThemeProvider";
import WeatherApp from "./components/WeatherApp";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import "dayjs/locale/en";

const queryClient = new QueryClient();

dayjs.extend(localeData);
dayjs.extend(weekday);

dayjs.locale("en");

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <WeatherApp />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
