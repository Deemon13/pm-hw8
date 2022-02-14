import { convertDate } from "../../service/convert-data";

export function WeekdayTitle({ dateStr }) {
  return <h3>{`${new Date(convertDate(dateStr)).toDateString()}`}</h3>;
}
