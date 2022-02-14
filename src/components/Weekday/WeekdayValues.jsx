import { randomInteger } from "../../service/random-number";

export function WeekdayValues({ day }) {
  return (
    <div>
      <div>{day.mintemp}</div>
      <div>{day.maxtemp}</div>
      <div>{day.pressure} мм рт.ст.</div>
      <div>{day.humidity} %</div>
      <div>
        {day.cloudiness.percent} %,{" "}
        {day.cloudiness.type[`${randomInteger(0, 4)}`]}
      </div>
      <div>{day.storm ? "есть" : "нет"}</div>
      <div>{day.precipitation.amount} мм</div>
      <div>
        {day.wind.speed} м/с,{" "}
        {day.wind.speed === 0
          ? day.wind.direction.scale["0"]
          : day.wind.direction.scale[`${randomInteger(1, 8)}`]}
      </div>
    </div>
  );
}
