export default class DateHelper {
  static getAge(dateString: string) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  static getYears(dateString: string) {
    var today = new Date();
    var date = new Date(dateString);
    var years = today.getFullYear() - date.getFullYear();
    var m = today.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
      years--;
    }
    return years;
  }

  static isBefore(dateString: string, dateString1: string): boolean {
    try {
      const first = new Date(dateString);
      const second = new Date(dateString1);
      return first < second;
    } catch (e) {
      return false;
    }
  }
}
