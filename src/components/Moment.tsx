import moment from "moment";

function Moment({ time }: any) {
  // var timestring1 = "2013-05-09T00:00:00Z";
  // var timestring2 = "2013-05-09T02:00:00Z";
  var startdate = moment(time);
  // var expected_enddate = moment(timestring2);
  var returned_date = moment(startdate).add(1, "hours"); // see the cloning?
  // returned_endate.isSame(expected_enddate); // true
  return <span> {moment(returned_date, "YYYYMMDDhhmmss").fromNow()}</span>;
}

export default Moment;
