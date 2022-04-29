import { sub } from "./sub";

export class executor {
  constructor() {
    Promise.resolve("index constructor called").then((result) => {
      console.log(result);
    });
  }

  execute() {
    const map = new Map();
    map.set("key", "sub module called");
    sub(map.get("key"));
  }
}
