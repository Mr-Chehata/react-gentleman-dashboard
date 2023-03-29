import moment from "moment";

export default class DateHelper {
  static getAge(date: string) {
    return moment().diff(moment(date), "years", false);
  }

  static getYearsNumber(date: string) {
    return moment().diff(moment(date), "years", false);
  }

  static compareDates(date1: string, date2: string): boolean {
    return moment(date1).isAfter(moment(date2), "year"); // true;
  }
  static getHumanizedDate(date: string): string {
    return moment(date).fromNow(); // true;
  }
}
