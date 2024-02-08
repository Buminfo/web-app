import moment from "moment";

function Moment({ time }: any) {
  return <span> {moment(time, "YYYYMMDDhhmmss").fromNow()}</span>;
}

export default Moment;
