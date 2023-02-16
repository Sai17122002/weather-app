import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Forecast from "./components/Forecast";
import Error from "./Error";

function App() {
  const [query, setQuery] = useState({ q: "paris" });
  const [units, setUnits] = useState("metric");
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units })
        .then((data) => {
          toast.success(
            `Successfully fetched weather for ${data.name}, ${data.country}.`
          );

          setWeather(data);
        })
        .catch((err) => {
          setError(true);
        });
    };

    fetchWeather();
  }, [query, units]);

  return error === false ? (
    <div className="top-container">
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />

          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  ) : (
    <Error />
  );
}

export default App;
