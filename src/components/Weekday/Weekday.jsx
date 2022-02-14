import { convertDate } from "../../service/convert-data";

export function Weekday({ day }) {
  return (
    <li>
      <h3>{`${new Date(convertDate(day.date)).toDateString()}`}</h3>
      <div>Температура, мин: {day.mintemp}</div>
      <div>Температура, макс: {day.maxtemp}</div>
      <div>Атмосферное давление: {day.pressure} мм рт.ст.</div>
      <div>Влажность: {day.humidity} %</div>
      <div>Облачность: {day.cloudiness.percent} %</div>
      <div>Гроза: {day.storm}</div>
      <div>Осадки: {day.precipitation.amount} мм</div>
      <div>Ветер: {day.wind.speed} м/с</div>
    </li>
  );
}
