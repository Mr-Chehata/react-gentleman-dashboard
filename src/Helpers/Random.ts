export default class Random {
  /* @todo:move this to helper */
  static integer(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static uuid(prefix: string, length: number = 16) {
    return prefix + "__" + Math.random().toString(length).slice(2);
  }
}
