import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
  }

  addBananas() {
    this.emojis = this.emojis.map(emoji => emoji + this.banana);

    const p = document.createElement("p");
    p.innerText = this.emojis.reduce((prev, curr) => prev + curr);
    const emojis = document.getElementById("emojis");
    emojis.appendChild(p);
  }
}