export type ClassValue =
  | ClassArray
  | ClassDictionary
  | null
  | undefined
  | string
  | number
  | boolean;

export type ClassDictionary = Record<string, any>;
export type ClassArray = Array<ClassValue>;

export default function classNames(...args: Array<ClassValue>): string {
  const result: string[] = [];

  for (const arg of args) {
    if (typeof arg === "string" || typeof arg === "number") {
      if (arg !== 0 && arg !== "") {
        result.push(arg.toString());
      }
    } else if (arg && Array.isArray(arg)) {
      result.push(...classNames(...arg).split(" "));
    } else if (arg && arg.constructor === Object) {
      for (const key in arg as ClassDictionary) {
        if (arg[key]) {
          result.push(key.toString());
        }
      }
    }
  }

  return result.join(" ");
}
