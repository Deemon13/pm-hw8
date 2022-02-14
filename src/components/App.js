import days from "../data/weather.json";
import { Weekday } from "./Weekday/Weekday";

function App() {
  return (
    <>
      <h2>Погода в Энергодаре</h2>
      <ul>
        {days.map((day) => (
          <Weekday key={day.id} day={day} />
        ))}
      </ul>
    </>
  );
}

export default App;
