import { WeekdayParams } from "./WeekdayParams";

import { WeekdayTitle } from "./WeekdayTitle";
import { WeekdayValues } from "./WeekdayValues";

import { WeekendDataWrapper } from "./Weekday.styled";

export function Weekday({ day }) {
  return (
    <li>
      <WeekdayTitle dateStr={day.date} />
      <WeekendDataWrapper>
        <WeekdayParams />
        <WeekdayValues day={day} />
      </WeekendDataWrapper>
    </li>
  );
}
